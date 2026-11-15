/* ============================================================
   CLINIC SETTINGS — edit these values, nothing else needs to change
   ============================================================ */
const CLINIC = {
  // WhatsApp number in international format, digits only (92 = Pakistan, no leading 0)
  whatsapp: "923000000000",            // <-- REPLACE with the doctor's real WhatsApp number
  phoneDisplay: "+92 300 0000000",     // <-- shown on the page
  address: "Main Road, Lanjar, Sindh, Pakistan",
  mapQuery: "Lanjar, Sindh, Pakistan", // used for the embedded Google map
  // Opening hours: 0 = Sunday ... 6 = Saturday. Set a day to null if the clinic is closed.
  hours: {
    0: null,
    1: ["10:00", "14:00", "17:00", "21:00"],
    2: ["10:00", "14:00", "17:00", "21:00"],
    3: ["10:00", "14:00", "17:00", "21:00"],
    4: ["10:00", "14:00", "17:00", "21:00"],
    5: ["10:00", "12:30", "17:00", "21:00"],
    6: ["10:00", "14:00"]
  },
  slotMinutes: 30,
  fees: { clinic: "Rs. 1000", video: "Rs. 800", chat: "Rs. 500" }
};

/* ============================================================
   Translations
   ============================================================ */
const I18N = {
  en: {
    "nav.about": "About", "nav.services": "Services", "nav.online": "Online Consultation",
    "nav.book": "Book Appointment", "nav.contact": "Contact",
    "hero.tag": "Trusted family care in Lanjar",
    "hero.title": "Dr. Ali Abd Shabana",
    "hero.sub": "Book a clinic visit or consult the doctor online through WhatsApp — from home, without waiting in line.",
    "hero.book": "Book Appointment", "hero.chat": "Consult on WhatsApp",
    "hero.b1": "Assalam-o-Alaikum Doctor Sahib, I have had a fever since yesterday.",
    "hero.b2": "Wa Alaikum Assalam. Please share your temperature and any other symptoms. ✔✔",
    "hero.s1": "Online consultations", "hero.s2": "Reply on WhatsApp", "hero.s3": "Clinic in Lanjar",
    "about.kicker": "About the doctor",
    "about.title": "Care that listens first",
    "about.p1": "Dr. Ali Abd Shabana serves patients in Lanjar and nearby villages, treating children and adults for everyday illnesses as well as long-term conditions.",
    "about.p2": "Patients who cannot travel can now send their symptoms, reports and photos on WhatsApp and get advice, prescriptions and follow-ups without leaving home.",
    "about.l1": "Clear explanation in Urdu, Sindhi or English",
    "about.l2": "Prescriptions shared directly on WhatsApp",
    "about.l3": "Follow-up reminders after every visit",
    "srv.kicker": "Services", "srv.title": "What we treat",
    "srv.1t": "General Medicine", "srv.1d": "Fever, flu, infections, stomach and chest problems.",
    "srv.2t": "Diabetes & Blood Pressure", "srv.2d": "Regular check-ups, medicine adjustment and diet advice.",
    "srv.3t": "Child Health", "srv.3d": "Common childhood illnesses, growth and nutrition guidance.",
    "srv.4t": "Women's Health", "srv.4d": "General consultations handled with privacy and respect.",
    "srv.5t": "Lab Report Review", "srv.5d": "Send your reports on WhatsApp and get them explained.",
    "srv.6t": "Follow-up Care", "srv.6d": "Quick check-ins after treatment to make sure you recover well.",
    "on.kicker": "Online consultation", "on.title": "See the doctor from home in 3 steps",
    "on.1t": "Fill the booking form", "on.1d": "Choose WhatsApp chat or video call and pick a time.",
    "on.2t": "Send on WhatsApp", "on.2d": "Your details open in WhatsApp — just press send.",
    "on.3t": "Get your consultation", "on.3d": "The clinic confirms your slot and the doctor contacts you at that time.",
    "fee.title": "Consultation fees", "fee.clinic": "Clinic visit", "fee.video": "WhatsApp video call", "fee.chat": "WhatsApp chat",
    "book.kicker": "Appointment", "book.title": "Book your appointment",
    "book.sub": "Your request is sent to the clinic on WhatsApp. You will get a confirmation reply.",
    "f.name": "Patient full name", "f.phone": "Your phone number", "f.age": "Age", "f.gender": "Gender",
    "f.male": "Male", "f.female": "Female", "f.other": "Other",
    "f.type": "Consultation type", "f.t.clinic": "Clinic visit", "f.t.video": "WhatsApp video call", "f.t.chat": "WhatsApp chat",
    "f.date": "Preferred date", "f.time": "Preferred time", "f.pick": "Select a date first",
    "f.closed": "Clinic is closed on this day", "f.symptoms": "Symptoms / reason for visit",
    "f.symptomsPh": "e.g. Fever for 3 days, headache",
    "f.newpt": "First visit to this doctor", "f.submit": "Send booking on WhatsApp",
    "f.note": "WhatsApp will open with your details filled in. Press send to complete the booking.",
    "f.err": "Please fill in all required fields.",
    "hrs.title": "Clinic timings", "hrs.closed": "Closed",
    "ct.kicker": "Contact", "ct.title": "Visit the clinic",
    "ct.addr": "Address", "ct.phone": "Phone / WhatsApp", "ct.chat": "Chat on WhatsApp",
    "emg": "Emergency? Do not wait for an online reply — go to the nearest hospital or call 1122.",
    "foot": "All rights reserved.",
    "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "msg.hello": "Assalam-o-Alaikum Doctor Sahib, I would like to book an appointment.",
    "msg.quick": "Assalam-o-Alaikum Doctor Sahib, I would like an online consultation.",
    "msg.name": "Name", "msg.phone": "Phone", "msg.age": "Age", "msg.gender": "Gender",
    "msg.type": "Type", "msg.date": "Date", "msg.time": "Time", "msg.symptoms": "Symptoms",
    "msg.new": "First visit", "msg.yes": "Yes", "msg.no": "No"
  },
  ur: {
    "nav.about": "تعارف", "nav.services": "خدمات", "nav.online": "آن لائن مشورہ",
    "nav.book": "اپائنٹمنٹ بک کریں", "nav.contact": "رابطہ",
    "hero.tag": "لانجار میں قابلِ اعتماد علاج",
    "hero.title": "ڈاکٹر علی عبد شبانہ",
    "hero.sub": "کلینک کی اپائنٹمنٹ بک کریں یا گھر بیٹھے واٹس ایپ پر ڈاکٹر سے مشورہ کریں — بغیر قطار میں انتظار کے۔",
    "hero.book": "اپائنٹمنٹ بک کریں", "hero.chat": "واٹس ایپ پر مشورہ",
    "hero.b1": "السلام علیکم ڈاکٹر صاحب، مجھے کل سے بخار ہے۔",
    "hero.b2": "وعلیکم السلام۔ براہِ کرم اپنا درجہ حرارت اور دیگر علامات بتائیں۔ ✔✔",
    "hero.s1": "آن لائن مشورہ", "hero.s2": "واٹس ایپ پر جواب", "hero.s3": "لانجار میں کلینک",
    "about.kicker": "ڈاکٹر کا تعارف",
    "about.title": "پہلے سنیں، پھر علاج",
    "about.p1": "ڈاکٹر علی عبد شبانہ لانجار اور قریبی دیہات کے مریضوں کا علاج کرتے ہیں — بچوں اور بڑوں کی عام بیماریوں سے لے کر طویل مدتی امراض تک۔",
    "about.p2": "جو مریض سفر نہیں کر سکتے وہ اپنی علامات، رپورٹس اور تصاویر واٹس ایپ پر بھیج کر گھر بیٹھے مشورہ، نسخہ اور فالو اپ حاصل کر سکتے ہیں۔",
    "about.l1": "اردو، سندھی یا انگریزی میں واضح رہنمائی",
    "about.l2": "نسخہ براہِ راست واٹس ایپ پر",
    "about.l3": "ہر وزٹ کے بعد فالو اپ یاد دہانی",
    "srv.kicker": "خدمات", "srv.title": "ہم کن امراض کا علاج کرتے ہیں",
    "srv.1t": "جنرل میڈیسن", "srv.1d": "بخار، نزلہ زکام، انفیکشن، پیٹ اور سینے کے مسائل۔",
    "srv.2t": "شوگر اور بلڈ پریشر", "srv.2d": "باقاعدہ چیک اپ، دوا میں تبدیلی اور غذا کا مشورہ۔",
    "srv.3t": "بچوں کی صحت", "srv.3d": "بچوں کی عام بیماریاں، نشوونما اور غذائیت۔",
    "srv.4t": "خواتین کی صحت", "srv.4d": "رازداری اور احترام کے ساتھ مشورہ۔",
    "srv.5t": "لیب رپورٹ کا جائزہ", "srv.5d": "رپورٹس واٹس ایپ پر بھیجیں اور وضاحت حاصل کریں۔",
    "srv.6t": "فالو اپ", "srv.6d": "علاج کے بعد مختصر چیک اپ تاکہ آپ جلد صحت یاب ہوں۔",
    "on.kicker": "آن لائن مشورہ", "on.title": "تین آسان مراحل میں گھر بیٹھے ڈاکٹر سے ملیں",
    "on.1t": "فارم پُر کریں", "on.1d": "واٹس ایپ چیٹ یا ویڈیو کال منتخب کریں اور وقت چنیں۔",
    "on.2t": "واٹس ایپ پر بھیجیں", "on.2d": "آپ کی تفصیلات واٹس ایپ میں کھل جائیں گی — بس سینڈ دبائیں۔",
    "on.3t": "مشورہ حاصل کریں", "on.3d": "کلینک آپ کا وقت کنفرم کرے گا اور ڈاکٹر اسی وقت رابطہ کریں گے۔",
    "fee.title": "فیس", "fee.clinic": "کلینک وزٹ", "fee.video": "واٹس ایپ ویڈیو کال", "fee.chat": "واٹس ایپ چیٹ",
    "book.kicker": "اپائنٹمنٹ", "book.title": "اپنی اپائنٹمنٹ بک کریں",
    "book.sub": "آپ کی درخواست واٹس ایپ پر کلینک کو بھیجی جائے گی۔ آپ کو تصدیقی جواب ملے گا۔",
    "f.name": "مریض کا پورا نام", "f.phone": "آپ کا فون نمبر", "f.age": "عمر", "f.gender": "جنس",
    "f.male": "مرد", "f.female": "عورت", "f.other": "دیگر",
    "f.type": "مشورے کی قسم", "f.t.clinic": "کلینک وزٹ", "f.t.video": "واٹس ایپ ویڈیو کال", "f.t.chat": "واٹس ایپ چیٹ",
    "f.date": "تاریخ", "f.time": "وقت", "f.pick": "پہلے تاریخ منتخب کریں",
    "f.closed": "اس دن کلینک بند ہے", "f.symptoms": "علامات / آنے کی وجہ",
    "f.symptomsPh": "مثلاً تین دن سے بخار، سر درد",
    "f.newpt": "اس ڈاکٹر کے پاس پہلی بار", "f.submit": "واٹس ایپ پر بکنگ بھیجیں",
    "f.note": "واٹس ایپ آپ کی تفصیلات کے ساتھ کھلے گا۔ بکنگ مکمل کرنے کے لیے سینڈ دبائیں۔",
    "f.err": "براہِ کرم تمام ضروری خانے پُر کریں۔",
    "hrs.title": "کلینک کے اوقات", "hrs.closed": "بند",
    "ct.kicker": "رابطہ", "ct.title": "کلینک تشریف لائیں",
    "ct.addr": "پتہ", "ct.phone": "فون / واٹس ایپ", "ct.chat": "واٹس ایپ پر بات کریں",
    "emg": "ایمرجنسی؟ آن لائن جواب کا انتظار نہ کریں — قریبی ہسپتال جائیں یا 1122 پر کال کریں۔",
    "foot": "جملہ حقوق محفوظ ہیں۔",
    "days": ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
    "msg.hello": "السلام علیکم ڈاکٹر صاحب، میں اپائنٹمنٹ بک کرنا چاہتا/چاہتی ہوں۔",
    "msg.quick": "السلام علیکم ڈاکٹر صاحب، مجھے آن لائن مشورہ چاہیے۔",
    "msg.name": "نام", "msg.phone": "فون", "msg.age": "عمر", "msg.gender": "جنس",
    "msg.type": "قسم", "msg.date": "تاریخ", "msg.time": "وقت", "msg.symptoms": "علامات",
    "msg.new": "پہلی بار", "msg.yes": "جی ہاں", "msg.no": "نہیں"
  }
};

let lang = "en";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}

const t = (k) => I18N[lang][k] ?? I18N.en[k] ?? k;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function waLink(text) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* ---------- Language ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $("#langBtn").textContent = lang === "en" ? "اردو" : "English";
  renderHours();
  renderSlots();
  $$("[data-wa-quick]").forEach(a => { a.href = waLink(t("msg.quick")); });
}

/* ---------- Hours table ---------- */
const fmt12 = (hhmm) => {
  let [h, m] = hhmm.split(":").map(Number);
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ap}`;
};

function renderHours() {
  const days = t("days");
  const today = new Date().getDay();
  const order = [1, 2, 3, 4, 5, 6, 0];
  $("#hoursList").innerHTML = order.map(d => {
    const h = CLINIC.hours[d];
    let txt = t("hrs.closed");
    if (h) {
      const parts = [];
      for (let i = 0; i < h.length; i += 2) parts.push(`${fmt12(h[i])} – ${fmt12(h[i + 1])}`);
      txt = parts.join(" · ");
    }
    return `<li class="${d === today ? "today" : ""} ${h ? "" : "closed"}"><span>${days[d]}</span><span dir="ltr">${txt}</span></li>`;
  }).join("");
}

/* ---------- Time slots ---------- */
function renderSlots() {
  const dateEl = $("#date"), sel = $("#time");
  const prev = sel.value;
  if (!dateEl.value) {
    sel.innerHTML = `<option value="">${t("f.pick")}</option>`;
    sel.disabled = true;
    return;
  }
  const d = new Date(dateEl.value + "T00:00");
  const h = CLINIC.hours[d.getDay()];
  if (!h) {
    sel.innerHTML = `<option value="">${t("f.closed")}</option>`;
    sel.disabled = true;
    return;
  }
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  const opts = [];
  for (let i = 0; i < h.length; i += 2) {
    const [sh, sm] = h[i].split(":").map(Number);
    const [eh, em] = h[i + 1].split(":").map(Number);
    for (let m = sh * 60 + sm; m + CLINIC.slotMinutes <= eh * 60 + em; m += CLINIC.slotMinutes) {
      if (isToday && m <= now.getHours() * 60 + now.getMinutes()) continue;
      const v = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
      opts.push(`<option value="${v}">${fmt12(v)}</option>`);
    }
  }
  if (!opts.length) {
    sel.innerHTML = `<option value="">${t("f.closed")}</option>`;
    sel.disabled = true;
    return;
  }
  sel.innerHTML = opts.join("");
  sel.disabled = false;
  if ([...sel.options].some(o => o.value === prev)) sel.value = prev;
}

/* ---------- Booking ---------- */
function submitBooking(e) {
  e.preventDefault();
  const f = e.target;
  if (!f.checkValidity() || $("#time").disabled) {
    $("#formErr").hidden = false;
    f.reportValidity();
    return;
  }
  $("#formErr").hidden = true;
  const data = new FormData(f);
  const typeLabel = t(`f.t.${data.get("type")}`);
  const genderLabel = t(`f.${data.get("gender")}`);
  const dateObj = new Date(data.get("date") + "T00:00");
  const dateStr = `${t("days")[dateObj.getDay()]}, ${dateObj.toLocaleDateString("en-GB")}`;
  const lines = [
    t("msg.hello"),
    "",
    `*${t("msg.name")}:* ${data.get("name").trim()}`,
    `*${t("msg.phone")}:* ${data.get("phone").trim()}`,
    `*${t("msg.age")}:* ${data.get("age")}`,
    `*${t("msg.gender")}:* ${genderLabel}`,
    `*${t("msg.type")}:* ${typeLabel}`,
    `*${t("msg.date")}:* ${dateStr}`,
    `*${t("msg.time")}:* ${fmt12(data.get("time"))}`,
    `*${t("msg.new")}:* ${data.get("newpt") ? t("msg.yes") : t("msg.no")}`
  ];
  const sym = (data.get("symptoms") || "").trim();
  if (sym) lines.push(`*${t("msg.symptoms")}:* ${sym}`);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // static config values
  $$("[data-cfg]").forEach(el => {
    const k = el.dataset.cfg;
    el.textContent = k.startsWith("fee.") ? CLINIC.fees[k.slice(4)] : CLINIC[k];
  });
  $$("[data-tel]").forEach(a => { a.href = `tel:+${CLINIC.whatsapp}`; });
  $("#map").src = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&z=14&output=embed`;
  $("#year").textContent = new Date().getFullYear();

  // date limits: today .. +30 days
  const pad = n => String(n).padStart(2, "0");
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = new Date(), max = new Date();
  max.setDate(max.getDate() + 30);
  $("#date").min = iso(today);
  $("#date").max = iso(max);
  $("#date").addEventListener("change", renderSlots);

  $("#bookForm").addEventListener("submit", submitBooking);

  // preset consultation type from buttons
  $$("[data-type]").forEach(b => b.addEventListener("click", () => {
    const r = $(`input[name=type][value=${b.dataset.type}]`);
    if (r) r.checked = true;
  }));

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "en" ? "ur" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });

  // mobile menu
  const nav = $("#nav");
  $("#menuBtn").addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    $("#menuBtn").setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  applyLang();
});
