# Registrations → Google Sheet → Excel

The site is static, so it has no server of its own. The registration form
posts to a small Google Apps Script that appends a row to your Sheet.

Free, no account beyond the Google one you already have, and no monthly
submission limit.

---

## Setup (about 10 minutes, done once)

**1. Make the Sheet**

Go to <https://sheets.new> and name it something like
`Avalanche Registrations`.

**2. Open the script editor**

In that Sheet: **Extensions → Apps Script**.

**3. Paste the code**

Delete whatever is in `Code.gs` and paste the contents of
[`Code.gs`](./Code.gs) from this folder. Save (Ctrl+S).

**4. Deploy it**

- **Deploy → New deployment**
- Click the gear next to "Select type" and choose **Web app**
- Description: anything, e.g. `registrations v1`
- **Execute as: Me**
- **Who has access: Anyone**  ← this one matters. Not "Anyone with Google
  account" — the form is used by students who may not be signed in.
- **Deploy**, then approve the permission prompt
  (it will warn that the app is unverified — that is normal for your own
  script; choose *Advanced → Go to … (unsafe)*)

**5. Copy the Web app URL**

It looks like:

```
https://script.google.com/macros/s/AKfycb.....................ugA/exec
```

**6. Put it in the site**

Open `src/registerConfig.js` and replace the placeholder:

```js
export const REGISTER_ENDPOINT = "https://script.google.com/macros/s/AKfycb.../exec";
```

Do the same in `landing-page/src/registerConfig.js` so both copies match.

That is it. Submit the form once and a row should appear in the Sheet.

---

## Getting the Excel file

In the Sheet: **File → Download → Microsoft Excel (.xlsx)**.

The `Registrations` tab has one row per signup:

| Timestamp | Name | USN | Phone | Email | Branch | Year | Event |
|---|---|---|---|---|---|---|---|

---

## If something goes wrong

**Nothing arrives in the Sheet**

Open the `/exec` URL directly in a browser. You should see
`{"ok":true,"service":"avalanche-registrations"}`. If you get a login page
instead, the deployment access is not set to **Anyone** — redeploy with that
setting.

**The form says "Could not send that"**

Almost always the same cause as above. Check the browser console for a CORS
error, then re-check the access setting.

**You changed `Code.gs`**

A saved edit is not live until you redeploy: **Deploy → Manage deployments →
edit (pencil) → Version: New version → Deploy**. The URL stays the same.

---

## Notes

- One registration per USN: a repeat submission of a USN already in the sheet
  is accepted by the browser but not written again.
- Writes are wrapped in a `LockService` lock, so simultaneous submissions
  cannot overwrite each other when registration opens.
- Rows are only appended, never overwritten, so it is safe to sort or filter
  the Sheet while registrations are open.
- To collect for a different event later, change `EVENT` in
  `src/pages/Register.jsx`; the value is stored per row.

---

## Will it hold 300+ registrations?

Comfortably. The numbers that matter:

| Limit | This form |
|---|---|
| Google Sheets: 10,000,000 cells per file | 300 rows x 8 columns = **2,400 cells** |
| Apps Script: 20,000 URL calls/day (consumer account) | 300 submissions |
| Apps Script: 90 min total runtime/day | each write is well under a second |

300 is roughly **0.02%** of what a single Sheet holds. You would need about
**1.2 million** registrations before the Sheet filled up.

The real risk at 300 is not storage, it is everyone submitting in the same
minute when registration opens. Two things handle that:

- `LockService` serialises the writes, so no row is lost to a race.
- A USN that already exists is not written twice, so a student refreshing and
  resubmitting does not create duplicates.

If it ever outgrows a Sheet (thousands of rows, or you want live dashboards),
move the same `doPost` to Firebase or Supabase — the form itself would not
change, only `REGISTER_ENDPOINT`.
