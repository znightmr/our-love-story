/* =========================================================
   Happy Anniversary  —  edit EVERYTHING here in CONFIG.
   You only ever need to touch this one block below.
========================================================= */
const CONFIG = {

    // --- The two of you ---
    you:  "Guitar",
    her:  "Gam",

    // --- The day it all began (YYYY-MM-DD) ---
    startDate: "2025-06-02",

    // --- Hero ---
    eyebrow: "Happy 1.1 Year Anniversary",

    // --- Love letter (typed out on screen). Use \n for new lines. ---
    letter:
        "To my Gam,\n\n" +
        "It has been one year, one month, and a whole lot of little moments — " +
        "and somehow every single day with you still feels like the best one.\n\n" +
        "Thank you for your laugh, your patience, and for choosing me again and again. " +
        "I can't wait to keep collecting memories with you.",
    letterSignature: "— Always yours, Guitar",

    // --- Timeline of memories ---
    timeline: [
        { date: "02 June 2025", title: "The beginning", text: "The day we became us. ❤" },
        { date: "November 2025",  title: "Our first trip", text: "One of the happiest days I can remember with 🦖." },
        { date: "Every day",    title: "Little things",  text: "Coffee, silly texts, and staying up too late talking." },
        { date: "Today",        title: "1.1 years in",   text: "Still choosing you. Happy anniversary. 🌸" },
    ],

    // --- Gallery. Drop photos into ourlovestory/img/ and list them here. ---
    // Missing files show a soft placeholder automatically, so this works even empty.
    photos: [
        "img/01.PNG", "img/02.PNG", "img/03.PNG",
        "img/04.PNG", "img/05.PNG", "img/06.PNG",
        "img/07.PNG", "img/08.PNG",
    ],

    // --- Reasons I love you (shown one at a time, at random) ---
    reasons: [
        "Because your smile turns any ordinary day into a good one.",
        "Because you make me feel completely at home.",
        "Because of the way you care about the little things.",
        "Because you laugh at my worst jokes anyway.",
        "Because you make me want to be better, gently.",
        "Because a thousand reasons would still not be enough.",
    ],

    // --- Our song ---
    song: {
        title: "Always Been You — Jesse Gold",
        url:   "https://www.youtube.com/watch?v=jr4C2ea0Ymg",   // paste your real Spotify/YouTube link
    },

    // --- Ending ---
    endingTitle: "Here's to us",
    endingBody:  "Thank you for coming into my life. Here's to many more years of memories, together.",
};

/* =========================================================
   Below this line is the machinery. No need to edit it.
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const $ = (sel) => document.querySelector(sel);

    /* ---- Hero ---- */
    $("#heroEyebrow").textContent = CONFIG.eyebrow;
    $("#heroNames").innerHTML =
        `${escapeHtml(CONFIG.you)} <span class="amp">&amp;</span> ${escapeHtml(CONFIG.her)}`;
    const start = new Date(CONFIG.startDate + "T00:00:00");
    $("#heroSince").textContent = "Since " + formatDate(start);

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

    /* ---- Counter ---- */
    $("#counterHeadline").textContent =
        `${escapeHtml(CONFIG.you)} & ${escapeHtml(CONFIG.her)}`;
    buildCounter(start);

    /* ---- Letter ---- */
    $("#letterTitle").textContent = `To ${CONFIG.her}`;
    $("#letterSign").textContent = CONFIG.letterSignature;

    /* ---- Timeline ---- */
    $("#timelineList").innerHTML = CONFIG.timeline.map((m) => `
        <div class="tl-item">
            <div class="tl-date">${escapeHtml(m.date)}</div>
            <h3>${escapeHtml(m.title)}</h3>
            <p>${escapeHtml(m.text)}</p>
        </div>`).join("");

    /* ---- Gallery ---- */
    buildGallery();

    /* ---- Reasons ---- */
    const reasonBox = $("#reasonText");
    let lastReason = -1;
    const showReason = () => {
        let i;
        do { i = Math.floor(Math.random() * CONFIG.reasons.length); }
        while (CONFIG.reasons.length > 1 && i === lastReason);
        lastReason = i;
        reasonBox.style.opacity = 0;
        setTimeout(() => {
            reasonBox.textContent = CONFIG.reasons[i];
            reasonBox.style.opacity = 1;
        }, 250);
    };
    reasonBox.textContent = CONFIG.reasons[0];
    lastReason = 0;
    $("#reasonBtn").addEventListener("click", showReason);

    /* ---- Song ---- */
    $("#songTitle").textContent = CONFIG.song.title;
    $("#songLink").href = CONFIG.song.url;

    /* ---- Ending ---- */
    $("#endingTitle").textContent = CONFIG.endingTitle;
    $("#endingBody").textContent = CONFIG.endingBody;

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

/* ---------- helpers ---------- */

function formatDate(d) {
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function buildCounter(start) {
    const grid = document.getElementById("loveCounter");
    const cells = [
        ["days", "Days"], ["hours", "Hours"],
        ["minutes", "Minutes"], ["seconds", "Seconds"],
    ];
    grid.innerHTML = cells.map(([k, lbl]) =>
        `<div class="count-box"><div class="num" data-k="${k}">0</div><div class="lbl">${lbl}</div></div>`
    ).join("");

    const note = document.getElementById("counterNote");

    const tick = () => {
        const now = new Date();
        let diff = Math.floor((now - start) / 1000);
        if (diff < 0) diff = 0;
        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        const map = { days, hours, minutes, seconds };
        grid.querySelectorAll(".num").forEach((el) => {
            el.textContent = map[el.dataset.k].toLocaleString("en-US");
        });
        note.textContent = `That's ${humanSpan(start, now)} of us.`;
    };
    tick();
    setInterval(tick, 1000);
}

function humanSpan(start, now) {
    let y = now.getFullYear() - start.getFullYear();
    let m = now.getMonth() - start.getMonth();
    let d = now.getDate() - start.getDate();
    if (d < 0) { m -= 1; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y -= 1; m += 12; }
    const parts = [];
    if (y) parts.push(y + (y === 1 ? " year" : " years"));
    if (m) parts.push(m + (m === 1 ? " month" : " months"));
    if (d) parts.push(d + (d === 1 ? " day" : " days"));
    return parts.join(", ") || "day one";
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
let letterTyped = false;
function typeLetter() {
    if (letterTyped) return;
    letterTyped = true;
    const el = document.getElementById("typing");
    const text = CONFIG.letter;
    let i = 0;
    el.textContent = "";
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    el.appendChild(cursor);
    const step = () => {
        if (i < text.length) {
            cursor.insertAdjacentText("beforebegin", text.charAt(i));
            i++;
            setTimeout(step, text.charAt(i - 1) === "\n" ? 120 : 28);
        } else {
            setTimeout(() => cursor.remove(), 1200);
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
