/* =========================================================
   Happy Anniversary  —  edit EVERYTHING here in CONFIG.
   You only ever need to touch this one block below.

   Two languages: everything under `en` has a matching entry
   under `th`. The floating toggle (top-right) switches between
   them and remembers your choice.
========================================================= */
const CONFIG = {

    // --- The two of you (same in both languages) ---
    you:  "Guitar",
    her:  "Gam",

    // --- The day it all began (YYYY-MM-DD) ---
    startDate: "2025-06-02",

    // --- Gallery. Drop photos into ourlovestory/img/ and list them here. ---
    // Missing files show a soft placeholder automatically, so this works even empty.
    photos: [
        "img/01.PNG", "img/02.PNG", "img/03.PNG",
        "img/04.PNG", "img/05.PNG", "img/06.PNG",
        "img/07.PNG", "img/08.PNG",
    ],

    // --- Our song (link shared; title can differ per language) ---
    songUrl: "https://www.youtube.com/watch?v=jr4C2ea0Ymg",   // paste your real Spotify/YouTube link

    // ======================= ENGLISH =======================
    en: {
        eyebrow: "Happy 1.1 Year Anniversary",

        letter:
            "To my Gam,\n\n" +
            "It has been one year, one month, and a whole lot of little moments — " +
            "and somehow every single day with you still feels like the best one.\n\n" +
            "Thank you for your laugh, your patience, and for choosing me again and again. " +
            "I can't wait to keep collecting memories with you.",
        letterSignature: "— Always yours, Guitar",

        timeline: [
            { date: "02 June 2025", title: "The beginning", text: "The day we became us. ❤" },
            { date: "November 2025",  title: "Our first trip", text: "One of the happiest days I can remember with 🦖." },
            { date: "Every day",    title: "Little things",  text: "Matcha, silly texts, and staying up too late talking." },
            { date: "Today",        title: "1.1 years in",   text: "Still choosing you. Happy anniversary. 🌸" },
        ],

        reasons: [
            "Because your smile turns any ordinary day into a good one.",
            "Because you make me feel completely at home.",
            "Because of the way you care about the little things.",
            "Because you laugh at my worst jokes anyway.",
            "Because you make me want to be better, gently.",
            "Because a thousand reasons would still not be enough.",
        ],

        songTitle: "Always Been You — Jesse Gold",

        endingTitle: "Here's to us",
        endingBody:  "Thank you for coming into my life. Here's to many more years of memories, together.",
    },

    // ======================== THAI =========================
    th: {
        eyebrow: "สุขสันต์วันครบรอบ 1.1 ปี",

        letter:
            "ถึงแก้ม,\n\n" +
            "ผ่านมาหนึ่งปี หนึ่งเดือน กับช่วงเวลาเล็ก ๆ อีกมากมาย — " +
            "และไม่ว่ายังไง ทุก ๆ วันที่มีเธอก็ยังรู้สึกเหมือนเป็นวันที่ดีที่สุดเสมอ\n\n" +
            "ขอบคุณสำหรับเสียงหัวเราะ ความอดทน และการที่เธอเลือกฉันครั้งแล้วครั้งเล่า " +
            "ฉันอยากเก็บความทรงจำดี ๆ ไปกับเธออีกเรื่อย ๆ",
        letterSignature: "— รักเธอเสมอ, กีตาร์",

        timeline: [
            { date: "2 มิถุนายน 2025", title: "จุดเริ่มต้น", text: "วันที่เรากลายเป็นเรา ❤" },
            { date: "พฤศจิกายน 2025",  title: "ทริปแรกของเรา", text: "หนึ่งในวันที่มีความสุขที่สุดเท่าที่จำได้ กับ 🦖" },
            { date: "ทุก ๆ วัน",       title: "เรื่องเล็ก ๆ น้อย ๆ", text: "มัจฉะ ข้อความน่ารัก ๆ และการนอนดึกเพราะมัวแต่คุยกัน" },
            { date: "วันนี้",          title: "ครบ 1.1 ปีแล้ว", text: "ก็ยังเลือกเธอเหมือนเดิม สุขสันต์วันครบรอบนะ 🌸" },
        ],

        reasons: [
            "เพราะรอยยิ้มของเธอทำให้วันธรรมดากลายเป็นวันที่ดี",
            "เพราะเธอทำให้ฉันรู้สึกอบอุ่นเหมือนได้อยู่บ้าน",
            "เพราะวิธีที่เธอใส่ใจในเรื่องเล็ก ๆ น้อย ๆ",
            "เพราะเธอหัวเราะให้กับมุกแป้ก ๆ ของฉันเสมอ",
            "เพราะเธอทำให้ฉันอยากเป็นคนที่ดีขึ้นอย่างอ่อนโยน",
            "เพราะต่อให้มีเหตุผลเป็นพันข้อ ก็ยังไม่พอจะบอกรักเธอ",
        ],

        songTitle: "Always Been You — Jesse Gold",

        endingTitle: "แด่เราสองคน",
        endingBody:  "ขอบคุณที่เข้ามาในชีวิตของฉัน ขอให้เรามีความทรงจำดี ๆ ด้วยกันไปอีกหลายปีนะ",
    },
};

/* --- UI labels (buttons, section headers, formats) per language --- */
const UI = {
    en: {
        dateLocale:   "en-GB",
        loading:      "Loading our story…",
        heroEyebrow:  "Our Anniversary",
        since:        (d) => "Since " + d,
        begin:        "Begin our story",
        counterEyebrow: "Together for",
        counterLabels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
        note:         (span) => `That's ${span} of us.`,
        span:         { year:" year", years:" years", month:" month", months:" months",
                        day:" day", days:" days", joiner:", ", fallback:"day one" },
        letterEyebrow: "A little letter",
        letterTo:     (her) => `To ${her}`,
        timelineEyebrow: "Along the way",
        timelineTitle:   "Our memories",
        galleryEyebrow:  "Moments",
        galleryTitle:    "Us, in pictures",
        reasonEyebrow:   "Just because",
        reasonTitle:     "Reasons I love you",
        another:         "Another reason",
        songEyebrow:     "Our song",
        listen:          "Listen",
    },
    th: {
        dateLocale:   "th-TH-u-ca-gregory",
        loading:      "กำลังโหลดเรื่องราวของเรา…",
        heroEyebrow:  "วันครบรอบของเรา",
        since:        (d) => "ตั้งแต่ " + d,
        begin:        "เริ่มเรื่องราวของเรา",
        counterEyebrow: "อยู่ด้วยกันมาแล้ว",
        counterLabels: { days: "วัน", hours: "ชั่วโมง", minutes: "นาที", seconds: "วินาที" },
        note:         (span) => `รวมแล้ว ${span} ของเราสองคน`,
        span:         { year:" ปี", years:" ปี", month:" เดือน", months:" เดือน",
                        day:" วัน", days:" วัน", joiner:" ", fallback:"วันแรก" },
        letterEyebrow: "จดหมายน้อย ๆ",
        letterTo:     (her) => `ถึง ${her}`,
        timelineEyebrow: "ระหว่างทาง",
        timelineTitle:   "ความทรงจำของเรา",
        galleryEyebrow:  "ช่วงเวลา",
        galleryTitle:    "ความทรงจำของเราสองคน",
        reasonEyebrow:   "เพราะว่า",
        reasonTitle:     "เหตุผลที่ฉันรักเธอ",
        another:         "อีกเหตุผลหนึ่ง",
        songEyebrow:     "เพลงของเรา",
        listen:          "ฟังเพลง",
    },
};

/* =========================================================
   Below this line is the machinery. No need to edit it.
========================================================= */
const LANG_KEY = "anniversary-lang";
const state = {
    lang: pickInitialLang(),
    start: new Date(CONFIG.startDate + "T00:00:00"),
    reasonIndex: 0,
    letterRevealed: false,
};
// convenience getters for the current language
const C = () => CONFIG[state.lang];
const T = () => UI[state.lang];

function pickInitialLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "th") return saved;
    return (navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    const $ = (sel) => document.querySelector(sel);

    /* ---- Names (language-independent) ---- */
    $("#heroNames").innerHTML =
        `${escapeHtml(CONFIG.you)} <span class="amp">&amp;</span> ${escapeHtml(CONFIG.her)}`;
    $("#counterHeadline").textContent = `${CONFIG.you} & ${CONFIG.her}`;
    $("#songLink").href = CONFIG.songUrl;

    /* ---- Cover image (optional) ---- */
    const cover = new Image();
    cover.onload = () => {
        const hero = $(".hero");
        hero.style.setProperty("--cover", `url("img/cover.jpg")`);
        hero.classList.add("has-cover");
    };
    cover.src = "img/cover.jpg";

    /* ---- Start button ---- */
    $("#startBtn").addEventListener("click", () => {
        $("#counter").scrollIntoView({ behavior: "smooth" });
    });

    /* ---- Counter (numbers update every second, read current lang) ---- */
    buildCounter();

    /* ---- Gallery (images are language-independent, built once) ---- */
    buildGallery();

    /* ---- Reasons ---- */
    $("#reasonBtn").addEventListener("click", showReason);

    /* ---- Language toggle ---- */
    document.querySelectorAll("#langToggle button").forEach((btn) => {
        btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    /* ---- Paint everything in the chosen language ---- */
    applyLang(state.lang);

    /* ---- Scroll reveal ---- */
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("show");
                if (e.target.id === "letter") typeLetter();
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    /* ---- Floating hearts ---- */
    setInterval(spawnHeart, 2200);
});

/* ---- Loading screen ---- */
window.addEventListener("load", () => {
    const l = document.getElementById("loading");
    setTimeout(() => l.classList.add("hideLoading"), 700);
});

/* ---------- language switch ---------- */
function applyLang(lang) {
    if (lang !== "en" && lang !== "th") lang = "en";
    state.lang = lang;
    localStorage.setItem(LANG_KEY, lang);

    const $ = (sel) => document.querySelector(sel);
    const c = C(), t = T();

    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-th", lang === "th");

    // toggle button active state
    document.querySelectorAll("#langToggle button").forEach((b) =>
        b.classList.toggle("active", b.dataset.lang === lang));

    // loading
    $("#loadingText").textContent = t.loading;

    // hero
    $("#heroEyebrow").textContent = c.eyebrow;
    $("#heroSince").textContent = t.since(formatDate(state.start, t.dateLocale));
    $("#startBtn").textContent = t.begin;

    // counter (static labels; numbers refresh on their own tick)
    $("#counterEyebrow").textContent = t.counterEyebrow;
    document.querySelectorAll("#loveCounter .lbl").forEach((el) => {
        el.textContent = t.counterLabels[el.dataset.k];
    });

    // letter
    $("#letterEyebrow").textContent = t.letterEyebrow;
    $("#letterTitle").textContent = t.letterTo(CONFIG.her);
    $("#letterSign").textContent = c.letterSignature;
    if (state.letterRevealed) typeLetter(true);   // re-type in the new language

    // timeline
    $("#timelineEyebrow").textContent = t.timelineEyebrow;
    $("#timelineTitle").textContent = t.timelineTitle;
    $("#timelineList").innerHTML = c.timeline.map((m) => `
        <div class="tl-item">
            <div class="tl-date">${escapeHtml(m.date)}</div>
            <h3>${escapeHtml(m.title)}</h3>
            <p>${escapeHtml(m.text)}</p>
        </div>`).join("");

    // gallery labels
    $("#galleryEyebrow").textContent = t.galleryEyebrow;
    $("#galleryTitle").textContent = t.galleryTitle;

    // reasons
    $("#reasonEyebrow").textContent = t.reasonEyebrow;
    $("#reasonTitle").textContent = t.reasonTitle;
    $("#reasonBtn").textContent = t.another;
    $("#reasonText").textContent = c.reasons[state.reasonIndex] || c.reasons[0];

    // song
    $("#songEyebrow").textContent = t.songEyebrow;
    $("#songTitle").textContent = c.songTitle;
    $("#songLink").textContent = t.listen;

    // ending
    $("#endingTitle").textContent = c.endingTitle;
    $("#endingBody").textContent = c.endingBody;
}

/* ---------- helpers ---------- */

function formatDate(d, locale) {
    return d.toLocaleDateString(locale, { day: "2-digit", month: "long", year: "numeric" });
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function buildCounter() {
    const grid = document.getElementById("loveCounter");
    const keys = ["days", "hours", "minutes", "seconds"];
    grid.innerHTML = keys.map((k) =>
        `<div class="count-box"><div class="num" data-k="${k}">0</div><div class="lbl" data-k="${k}"></div></div>`
    ).join("");

    const note = document.getElementById("counterNote");

    const tick = () => {
        const now = new Date();
        let diff = Math.floor((now - state.start) / 1000);
        if (diff < 0) diff = 0;
        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        const map = { days, hours, minutes, seconds };
        grid.querySelectorAll(".num").forEach((el) => {
            el.textContent = map[el.dataset.k].toLocaleString("en-US");
        });
        note.textContent = T().note(humanSpan(state.start, now, T().span));
    };
    tick();
    setInterval(tick, 1000);
}

function humanSpan(start, now, u) {
    let y = now.getFullYear() - start.getFullYear();
    let m = now.getMonth() - start.getMonth();
    let d = now.getDate() - start.getDate();
    if (d < 0) { m -= 1; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y -= 1; m += 12; }
    const parts = [];
    if (y) parts.push(y + (y === 1 ? u.year : u.years));
    if (m) parts.push(m + (m === 1 ? u.month : u.months));
    if (d) parts.push(d + (d === 1 ? u.day : u.days));
    return parts.join(u.joiner) || u.fallback;
}

function showReason() {
    const reasons = C().reasons;
    const box = document.getElementById("reasonText");
    let i;
    do { i = Math.floor(Math.random() * reasons.length); }
    while (reasons.length > 1 && i === state.reasonIndex);
    state.reasonIndex = i;
    box.style.opacity = 0;
    setTimeout(() => {
        box.textContent = C().reasons[i];
        box.style.opacity = 1;
    }, 250);
}

function buildGallery() {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";
    CONFIG.photos.forEach((src, i) => {
        const fig = document.createElement("figure");
        const img = new Image();
        img.alt = `Us, photo ${i + 1}`;
        img.src = src;
        img.onload = () => {
            fig.appendChild(img);
            fig.addEventListener("click", () => openLightbox(src));
        };
        img.onerror = () => {
            fig.classList.add("placeholder");
            fig.innerHTML =
                `<div class="ph-inner"><div class="ph-heart">❤</div>` +
                `<small>add ${escapeHtml(src)}</small></div>`;
        };
        grid.appendChild(fig);
    });
}

function openLightbox(src) {
    const lb = document.getElementById("lightbox");
    document.getElementById("lightboxImg").src = src;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
}
document.addEventListener("click", (e) => {
    const lb = document.getElementById("lightbox");
    if (e.target.id === "lightbox" || e.target.classList.contains("lightbox-close")) {
        lb.classList.remove("open");
        lb.setAttribute("aria-hidden", "true");
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const lb = document.getElementById("lightbox");
        lb.classList.remove("open");
        lb.setAttribute("aria-hidden", "true");
    }
});

/* ---- typewriter letter ---- */
let letterTimer = null;
function typeLetter(restart) {
    if (state.letterRevealed && !restart) return;
    state.letterRevealed = true;
    if (letterTimer) { clearTimeout(letterTimer); letterTimer = null; }

    const el = document.getElementById("typing");
    const text = C().letter;
    let i = 0;
    el.textContent = "";
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    el.appendChild(cursor);
    const step = () => {
        if (i < text.length) {
            cursor.insertAdjacentText("beforebegin", text.charAt(i));
            i++;
            letterTimer = setTimeout(step, text.charAt(i - 1) === "\n" ? 120 : 28);
        } else {
            letterTimer = setTimeout(() => cursor.remove(), 1200);
        }
    };
    step();
}

/* ---- floating hearts ---- */
function spawnHeart() {
    if (document.hidden) return;
    const h = document.createElement("div");
    h.className = "floating-heart";
    h.textContent = "❤";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 20 + "px";
    h.style.animationDuration = 6 + Math.random() * 5 + "s";
    h.style.opacity = 0.4 + Math.random() * 0.4;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 11000);
}
