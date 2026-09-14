/**
 * Avalanche — ADVENTO registration receiver.
 *
 * Paste this into the Apps Script editor of the Google Sheet that should
 * collect registrations, then deploy it as a Web App (see README.md).
 */

var SHEET_NAME = 'Registrations';
var HEADERS = ['Timestamp', 'Name', 'USN', 'Phone', 'Email', 'Branch', 'Year', 'Event'];

var USN_RE   = /^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;
var GMAIL_RE = /^[a-z0-9][a-z0-9._%+-]*@gmail\.com$/i;
var PHONE_RE = /^\d{10}$/;

function doPost(e) {
  // When registration opens, a few hundred people submit at once. Without a
  // lock two executions can read the same last row and one write is lost.
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return json({ ok: false, error: 'busy, please retry' });
  }

  try {
    var data = JSON.parse(e.postData.contents);

    var usn   = String(data.usn || '').toUpperCase().trim();
    var phone = String(data.phone || '').replace(/\D/g, '');
    var email = String(data.email || '').trim();

    // The browser checks these too; re-check here so nothing bypasses the form.
    if (!String(data.name || '').trim()) return json({ ok: false, error: 'name required' });
    if (!USN_RE.test(usn))               return json({ ok: false, error: 'bad usn' });
    if (!PHONE_RE.test(phone))           return json({ ok: false, error: 'bad phone' });
    if (!GMAIL_RE.test(email))           return json({ ok: false, error: 'gmail required' });

    var sheet = getSheet();

    // One registration per USN
    if (sheet.getLastRow() > 1) {
      var seen = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues();
      for (var i = 0; i < seen.length; i++) {
        if (String(seen[i][0]).toUpperCase() === usn) {
          return json({ ok: true, duplicate: true });
        }
      }
    }

    sheet.appendRow([
      new Date(),
      String(data.name).trim(),
      usn,
      phone,
      email,
      String(data.branch || '').trim(),
      data.year || '',
      data.event || 'ADVENTO'
    ]);

    return json({ ok: true });

  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Open the /exec URL in a browser to check the deployment is live
function doGet() {
  return json({ ok: true, service: 'avalanche-registrations' });
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
