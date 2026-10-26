PROMAXIS v4.8.2
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

FIXES IN 4.7.2
  Analytics -> Product-wise sales : products are listed exactly as typed on the memos. A memo that names a product without a model is no longer
                    matched to "the first model with that name". Models are not shown by default ("By name + model" switch shows them).
                    Total amount = the memo total (shared between products when one memo has several).
  Stock auto-minus : only moves stock when the memo line points at exactly one product (exact model, or a name that has a single model).
  Chrome          : the hidden login password box is removed after sign-in and search boxes have autocomplete off, so Chrome stops offering
                    to "Save password" while you search for a memo.

NEW IN 4.7.3
  Filter on the account list pages (Promotional Sales and Sales Target, every business):
                    a new "Filter" button above the top cards. Date from/to, memo range, product, status, total and promo amount.
                    The four top cards, every salesman card and the All Accounts Summary (screen + Print PDF) change automatically with the filter.
                    A "Filtered" tag and a "Clear filter" button show while it is on. Pace / incentive lines are hidden in a filtered view.
  Filter inside a salesman's account:
                    the four top cards now follow the Filter and the Search box (and the Summary button, as before).
                    Filter fields apply as you type or pick - pressing Apply is no longer required.

NEW IN 4.7.4
  WhatsApp for Promotional Sales (all business accounts + each salesman's account):
                    "📲 WhatsApp Messages" on every Promotional Sales list page, "📲 WhatsApp" inside every salesman's account.
                    Same system as Sales Target (number remembered, message editable, "Sent ✓" ticks) but with promotional wording:
                    Promotional sales update / No sales yet (reminder) / Top seller (congratulations). The right one is suggested automatically.
                    When a Filter is on, the numbers and ranking in the message follow it. Edit the wording in Settings > WhatsApp message templates.
  Analytics:
                    Product-wise sales has a new "By name (A-Z)" sort (click again for Z-A).
                    Products not sold has a "By name" button to flip A-Z / Z-A.
                    A business with TK 0 achieved in its target period is no longer listed in Target pace (screen, Print/PDF and Excel).

NEW IN 4.7.6
  Analytics - Sales Target and Promotional Sales are completely separate:
                    Two buttons at the top of the Analytics page: "Sales Target" and "Promotional Sales". The whole page follows the one you pick -
                    Target pace / Promotional sales pace, Month-wise trend, Salesman ranking, Product-wise sales, Products not sold, Print / PDF and Excel.
                    Sales Target      = only memos entered on the Sales Target side.
                    Promotional Sales = only memos entered on the Promotional Sales side (older memos with no side recorded count here).
                    Pace uses each business's Session Period (Settings) and the sum of its salesman targets; a business with TK 0 on that side is not listed;
                    with no Session Period set the card shows the total so far and "Set a session period to see pace".
                    Note: the Sales Target account pages still pull Promotional memos in when a Session Period is set (the old rule), so their numbers can be
                    higher than the Sales Target figures in Analytics. The Dashboard "Last months" chart still shows both together.
                    Print file names and the Excel file name include the side. Products not sold = products with no sale on the selected side.
  WhatsApp - six new default messages (English), for both Sales Target and Promotional Sales:
                    Memo reminder - send pending memos / Memo reminder - little time left / Memo reminder - send every day /
                    Memo - mark promotional products correctly / Memo - correct missing or unclear details / Memo - thank you for sending on time.
                    Single message: choose them in "Message type". Bulk window: new "Message to send" list - pick one memo message and Send on every row
                    (the "below 100%" / "hide no sales" filters are not applied to memo messages, so everyone gets it).
                    Edit the wording in Settings > WhatsApp message templates > Memo messages.

NEW IN 4.8.2 (duplicate memos, first built in 4.8.0)
  Duplicate memos (individual salesman accounts - Promotional Sales and Sales Target):
                    New rule: a memo is a duplicate only when its DATE (day / month / year) AND its MEMO NUMBER are both the same,
                    e.g. 14/02/2026 + 1234 and 14/02/2026 + 1234. The same memo number on a different date is NOT a duplicate.
                    The rule is used everywhere: red "Duplicate" tag, Find Duplicate Memo, the Status filter, print / Excel and the All Accounts summaries.
                    Auto delete: when a salesman's account is opened, its duplicate memos are deleted automatically. It works on both sides, each on its own:
                    the Promotional Sales page cleans Promotional duplicates, the Sales Target page cleans Sales Target duplicates. The first memo is kept,
                    the extra copies go to the Recycle Bin with their stock added back, and the message has an Undo button - an undone memo stays in the list
                    shown as Duplicate and is not deleted again. Memos are never deleted across the two sides.
                    While entering memos: as you type the Date and Memo Number a red notice appears if the same date + memo number is already in the account or
                    in the Add to List (staged) entries; such a memo is not added. Add / Add to List / Save Changes all check it, and the final Add skips anything
                    that became a duplicate meanwhile.
                    Settings > Duplicate memos: switch the automatic deletion ON / OFF (ON by default).
