Original, full-resolution source images. NOT served to the browser.

Anything inside public/ is copied verbatim into dist/ by Vite, so these
originals (~134 MB) were being shipped on every deploy even though no page
referenced them. They live here instead.

What the site actually loads:
  public/team/         <- PHOTOS/ resized to 400x400 webp  (team page avatars)
  public/images-opt/   <- images/ at 1400px webp           (About, Events)
  public/images-thumb/ <- images/ at 760px webp            (Gallery tiles)

To regenerate after adding a photo here, re-run the resize with sharp
(400x400 cover for team avatars, quality 78).
