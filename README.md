# Dr. Ali and Shabana Health Services Co. — Website (Karachi)

Static website for patient appointment booking and online consultation through WhatsApp. English / Urdu.

## Doctor photos
Put the photos in the `images/` folder with these exact names:
- `images/dr-ali.jpg`
- `images/dr-shabana.jpg`

Square photos (about 600×600) work best, with the face near the top. If a photo is missing, a placeholder is shown.

## Edit clinic details
All settings are at the top of `script.js` in the `CLINIC` object:
- `whatsapp`: the doctor's number in international format, digits only (currently `971585569878`)
- `phoneDisplay`, `address`, `mapQuery`
- `hours`: opening times per day (`null` = closed)
- `fees`

Doctor names, roles and bios are in the translations (`doc.*` keys) in `script.js`.

## Booking confirmation
Patients must enter their WhatsApp number with the country code (e.g. `+92 300 1234567`); the form rejects numbers without `+` or `00`.

After a patient books:
1. The site immediately shows: "Your appointment is booked for <day, date> at <time>."
2. WhatsApp opens with the booking addressed to the doctor's number.
3. That message ends with a one-tap link. When the doctor taps it, the patient's chat opens with
   "Your appointment is booked for <date> at <time>." already typed. The doctor presses send.

A WhatsApp reply that sends itself with no tap needs the WhatsApp Business Platform (Cloud API) and a
small server. A static site can't do that.

## Run
Open `index.html` in a browser. No build step.

## Deploy
Upload the files (including `images/`) to any static host (GitHub Pages, Netlify, Cloudflare Pages).
