PROMAXIS v4.7.1
================

Files (upload ALL of them into the same folder, e.g. your GitHub Pages repo):
  index.html               the app
  sw.js                    makes the app work with no internet
  manifest.webmanifest     lets you "Install" it on PC / phone
  icon-192.png, icon-512.png, icon-maskable-512.png

If you only upload index.html, the app still works — you just won't get offline mode / install.
Offline mode and install need an https:// address (GitHub Pages is fine) or localhost; they do not work when index.html is opened straight from a folder.
Your existing data is NOT touched — open v4.6.0 in the same browser/address and everything is there.

FIRST OPEN
  1. Sign in with your usual password. If you were still on the old starter password you will be asked to set your own, and you get a personal recovery key (shown once - write it down).
  2. Old password/recovery key that were visible in the source code are retired.

GOOGLE DRIVE SYNC (multi-PC)  -  Back Up page
  The Client ID and Gmail are already filled in. Just open the app from its https address, go to Back Up and press Connect & Sync.
  Before that, in Google Cloud (project promaxis-510712) make sure: Google Drive API is enabled, the Gmail is a Test user, and your site address is under Authorized JavaScript origins.
  (Only needed if you ever create a new Client ID:)
  1. console.cloud.google.com -> new project -> enable "Google Drive API"
  2. OAuth consent screen: External, add your Google account under Test users
  3. Credentials -> OAuth client ID -> Web application -> Authorized JavaScript origins = the address where the app lives (e.g. https://yourname.github.io)
  4. Paste the Client ID on the Back Up page, press Connect & Sync.
  Connect your main PC first. On other PCs connect BEFORE entering new data.
  Google asks to sign in again about once an hour; the top-bar badge turns amber, click anywhere and it reconnects.

SETTINGS TO CHECK
  Settings -> Incentive slabs : sample rates (80% -> 0.5%, 100% -> 1%, 120% -> 1.5%) are placeholders. Enter your real rates, then switch it ON.
  Settings -> Stock           : auto-deduct is ON; default low-stock level is 10.
  Product Details             : "Promo ৳/unit (Contractor)" is a per-unit amount, credited to the contractor chosen on each memo.
  Accounts                    : add each salesman's WhatsApp number (📞 button).


NEW IN 4.7.0
  Sync speed      : a change on one PC reaches the others in about 2-5 seconds (checked every 2 seconds; sent 1 second after you stop typing).
                    Google asks for a fresh sign-in about once an hour - the top-bar badge turns amber and the next click renews it.
                    The sync file in Drive is compressed (it will not open as readable text in Drive - that is normal).
  Back Up page    : "Save backup to Google Drive" - JSON, Excel and PDF go to a folder called "PROMAXIS Backups".
                    A JSON backup is also saved once a day automatically (newest 14 kept). Restore any JSON backup from the list.
                    The PDF is created by Google from the complete-data report; if your data is very large use JSON/Excel.
  Analytics       : three print/PDF buttons: (1) Target pace + Month-wise trend + Salesman ranking together, (2) Product-wise sales, (3) Products not sold; plus Excel; Product-wise sales lists every sold product with its total amount (best first) and a separate
                    "Products not sold" list; optional date range.
  Product Details : the Low/Out badge is gone. Dashboard low-stock list can be switched off in Settings -> Stock.
  Messages        : default WhatsApp templates are English (edit them in Settings).
