const surahList = [
  { id: 1, name: "Al-Faatiha - The Opening", arabic: "الفاتحة", ayat: 7 },
  { id: 2, name: "Al-Baqara - The Cow", arabic: "البقرة", ayat: 286 },
  { id: 3, name: "Al-Imran - The Family of Imran", arabic: "آل عمران", ayat: 200 },
  { id: 4, name: "An-Nisa - The Women", arabic: "النساء", ayat: 176 },
  { id: 5, name: "Al-Maidah - The Table Spread", arabic: "المائدة", ayat: 120 },
  { id: 6, name: "Al-Anam - The Cattle", arabic: "الأنعام", ayat: 165 },
  { id: 7, name: "Al-A'raf - The Heights", arabic: "الأعراف", ayat: 206 },
  { id: 8, name: "Al-Anfal - The Spoils of War", arabic: "الأنفال", ayat: 75 },
  { id: 9, name: "At-Tawbah - The Repentance", arabic: "التوبة", ayat: 129 },
  { id: 10, name: "Yunus - Jonah", arabic: "يونس", ayat: 109 },
  { id: 11, name: "Hud - Hud", arabic: "هود", ayat: 123 },
  { id: 12, name: "Yusuf - Joseph", arabic: "يوسف", ayat: 111 },
  { id: 13, name: "Ar-Ra'd - The Thunder", arabic: "الرعد", ayat: 43 },
  { id: 14, name: "Ibrahim - Abraham", arabic: "ابراهيم", ayat: 52 },
  { id: 15, name: "Al-Hijr - The Rocky Tract", arabic: "الحجر", ayat: 99 },
  { id: 16, name: "An-Nahl - The Bee", arabic: "النحل", ayat: 128 },
  { id: 17, name: "Al-Isra - The Night Journey", arabic: "الإسراء", ayat: 111 },
  { id: 18, name: "Al-Kahf - The Cave", arabic: "الكهف", ayat: 110 },
  { id: 19, name: "Maryam - Mary", arabic: "مريم", ayat: 98 },
  { id: 20, name: "Ta-Ha", arabic: "طه", ayat: 135 },
  { id: 21, name: "Al-Anbiya - The Prophets", arabic: "الأنبياء", ayat: 112 },
  { id: 22, name: "Al-Hajj - The Pilgrimage", arabic: "الحج", ayat: 78 },
  { id: 23, name: "Al-Mu'minun - The Believers", arabic: "المؤمنون", ayat: 118 },
  { id: 24, name: "An-Nur - The Light", arabic: "النور", ayat: 64 },
  { id: 25, name: "Al-Furqan - The Criterion", arabic: "الفرقان", ayat: 77 },
  { id: 26, name: "Ash-Shu'ara - The Poets", arabic: "الشعراء", ayat: 227 },
  { id: 27, name: "An-Naml - The Ant", arabic: "النمل", ayat: 93 },
  { id: 28, name: "Al-Qasas - The Stories", arabic: "القصص", ayat: 88 },
  { id: 29, name: "Al-Ankabut - The Spider", arabic: "العنكبوت", ayat: 69 },
  { id: 30, name: "Ar-Rum - The Romans", arabic: "الروم", ayat: 60 },
  { id: 31, name: "Luqman - Luqman", arabic: "لقمان", ayat: 34 },
  { id: 32, name: "As-Sajda - The Prostration", arabic: "السجدة", ayat: 30 },
  { id: 33, name: "Al-Ahzab - The Clans", arabic: "الأحزاب", ayat: 73 },
  { id: 34, name: "Saba - Sheba", arabic: "سبأ", ayat: 54 },
  { id: 35, name: "Fatir - The Originator", arabic: "فاطر", ayat: 45 },
  { id: 36, name: "Ya-Sin", arabic: "يس", ayat: 83 },
  { id: 37, name: "As-Saffat - Those who set the Ranks", arabic: "الصافات", ayat: 182 },
  { id: 38, name: "Sad - The Letter Sad", arabic: "ص", ayat: 88 },
  { id: 39, name: "Az-Zumar - The Groups", arabic: "الزمر", ayat: 75 },
  { id: 40, name: "Ghafir - The Forgiver", arabic: "غافر", ayat: 85 },
  { id: 41, name: "Fussilat - Explained in Detail", arabic: "فصلت", ayat: 54 },
  { id: 42, name: "Ash-Shura - The Consultation", arabic: "الشورى", ayat: 53 },
  { id: 43, name: "Az-Zukhruf - The Ornaments of Gold", arabic: "الزخرف", ayat: 89 },
  { id: 44, name: "Ad-Dukhan - The Smoke", arabic: "الدخان", ayat: 59 },
  { id: 45, name: "Al-Jathiya - The Crouching", arabic: "الجاثية", ayat: 37 },
  { id: 46, name: "Al-Ahqaf - The Wind-Curved Sandhills", arabic: "الأحقاف", ayat: 35 },
  { id: 47, name: "Muhammad - Muhammad", arabic: "محمد", ayat: 38 },
  { id: 48, name: "Al-Fath - The Victory", arabic: "الفتح", ayat: 29 },
  { id: 49, name: "Al-Hujurat - The Rooms", arabic: "الحجرات", ayat: 18 },
  { id: 50, name: "Qaf - The Letter Qaf", arabic: "ق", ayat: 45 },
  { id: 51, name: "Adh-Dhariyat - The Winnowing Winds", arabic: "الذاريات", ayat: 60 },
  { id: 52, name: "At-Tur - The Mount", arabic: "الطور", ayat: 49 },
  { id: 53, name: "An-Najm - The Star", arabic: "النجم", ayat: 62 },
  { id: 54, name: "Al-Qamar - The Moon", arabic: "القمر", ayat: 55 },
  { id: 55, name: "Ar-Rahman - The Beneficent", arabic: "الرحمن", ayat: 78 },
  { id: 56, name: "Al-Waqia - The Inevitable", arabic: "الواقعة", ayat: 96 },
  { id: 57, name: "Al-Hadid - The Iron", arabic: "الحديد", ayat: 29 },
  { id: 58, name: "Al-Mujadila - The Pleading Woman", arabic: "المجادلة", ayat: 22 },
  { id: 59, name: "Al-Hashr - The Exile", arabic: "الحشر", ayat: 24 },
  { id: 60, name: "Al-Mumtahina - She that is to be examined", arabic: "الممتحنة", ayat: 13 },
  { id: 61, name: "As-Saff - The Ranks", arabic: "الصف", ayat: 14 },
  { id: 62, name: "Al-Jumua - The Congregation", arabic: "الجمعة", ayat: 11 },
  { id: 63, name: "Al-Munafiqun - The Hypocrites", arabic: "المنافقون", ayat: 11 },
  { id: 64, name: "At-Taghabun - The Mutual Disillusion", arabic: "التغابن", ayat: 18 },
  { id: 65, name: "At-Talaq - The Divorce", arabic: "الطلاق", ayat: 12 },
  { id: 66, name: "At-Tahrim - The Prohibition", arabic: "التحريم", ayat: 12 },
  { id: 67, name: "Al-Mulk - The Sovereignty", arabic: "الملك", ayat: 30 },
  { id: 68, name: "Al-Qalam - The Pen", arabic: "القلم", ayat: 52 },
  { id: 69, name: "Al-Haqqa - The Reality", arabic: "الحاقة", ayat: 52 },
  { id: 70, name: "Al-Maarij - The Ascending Stairways", arabic: "المعارج", ayat: 44 },
  { id: 71, name: "Nuh - Noah", arabic: "نوح", ayat: 28 },
  { id: 72, name: "Al-Jinn - The Jinn", arabic: "الجن", ayat: 28 },
  { id: 73, name: "Al-Muzzammil - The Enshrouded One", arabic: "المزمل", ayat: 20 },
  { id: 74, name: "Al-Muddaththir - The Cloaked One", arabic: "المدثر", ayat: 56 },
  { id: 75, name: "Al-Qiyama - The Resurrection", arabic: "القيامة", ayat: 40 },
  { id: 76, name: "Al-Insan - The Man", arabic: "الانسان", ayat: 31 },
  { id: 77, name: "Al-Mursalat - The Emissaries", arabic: "المرسلات", ayat: 50 },
  { id: 78, name: "An-Naba - The Tidings", arabic: "النبأ", ayat: 40 },
  { id: 79, name: "An-Nazi'at - Those who drag forth", arabic: "النازعات", ayat: 46 },
  { id: 80, name: "Abasa - He frowned", arabic: "عبس", ayat: 42 },
  { id: 81, name: "At-Takwir - The Overthrowing", arabic: "التكوير", ayat: 29 },
  { id: 82, name: "Al-Infitar - The Cleaving", arabic: "الإنفطار", ayat: 19 },
  { id: 83, name: "Al-Mutaffifin - Defrauding", arabic: "المطففين", ayat: 36 },
  { id: 84, name: "Al-Inshiqaq - The Splitting Open", arabic: "الإنشقاق", ayat: 25 },
  { id: 85, name: "Al-Buruj - The Mansions of the Stars", arabic: "البروج", ayat: 22 },
  { id: 86, name: "At-Tariq - The Morning Star", arabic: "الطارق", ayat: 17 },
  { id: 87, name: "Al-A'la - The Most High", arabic: "الأعلى", ayat: 19 },
  { id: 88, name: "Al-Ghashiya - The Overwhelming", arabic: "الغاشية", ayat: 26 },
  { id: 89, name: "Al-Fajr - The Dawn", arabic: "الفجر", ayat: 30 },
  { id: 90, name: "Al-Balad - The City", arabic: "البلد", ayat: 20 },
  { id: 91, name: "Ash-Shams - The Sun", arabic: "الشمس", ayat: 15 },
  { id: 92, name: "Al-Lail - The Night", arabic: "الليل", ayat: 21 },
  { id: 93, name: "Ad-Duhaa - The Morning Hours", arabic: "الضحى", ayat: 11 },
  { id: 94, name: "Ash-Sharh - The Relief", arabic: "الشرح", ayat: 8 },
  { id: 95, name: "At-Tin - The Fig", arabic: "التين", ayat: 8 },
  { id: 96, name: "Al-Alaq - The Clot", arabic: "العلق", ayat: 19 },
  { id: 97, name: "Al-Qadr - The Power", arabic: "القدر", ayat: 5 },
  { id: 98, name: "Al-Bayyina - The Clear Proof", arabic: "البينة", ayat: 8 },
  { id: 99, name: "Az-Zalzalah - The Earthquake", arabic: "الزلزلة", ayat: 8 },
  { id: 100, name: "Al-Adiyat - The Courser", arabic: "العاديات", ayat: 11 },
  { id: 101, name: "Al-Qaria - The Calamity", arabic: "القارعة", ayat: 11 },
  { id: 102, name: "At-Takathur - The Rivalry", arabic: "التكاثر", ayat: 8 },
  { id: 103, name: "Al-Asr - The Declining Day", arabic: "العصر", ayat: 3 },
  { id: 104, name: "Al-Humazah - The Traducer", arabic: "الهمزة", ayat: 9 },
  { id: 105, name: "Al-Fil - The Elephant", arabic: "الفيل", ayat: 5 },
  { id: 106, name: "Quraish - Quraish", arabic: "قريش", ayat: 4 },
  { id: 107, name: "Al-Ma'un - The Small Kindnesses", arabic: "الماعون", ayat: 7 },
  { id: 108, name: "Al-Kawthar - The Abundance", arabic: "الكوثر", ayat: 3 },
  { id: 109, name: "Al-Kafiroon - The Disbelievers", arabic: "الكافرون", ayat: 6 },
  { id: 110, name: "An-Nasr - The Divine Support", arabic: "النصر", ayat: 3 },
  { id: 111, name: "Al-Masad - The Palm Fiber", arabic: "المسد", ayat: 5 },
  { id: 112, name: "Al-Ikhlas - The Sincerity", arabic: "الإخلاص", ayat: 4 },
  { id: 113, name: "Al-Falaq - The Daybreak", arabic: "الفلق", ayat: 5 },
  { id: 114, name: "An-Nas - The Mankind", arabic: "الناس", ayat: 6 }
];

const paraList = [  
  { id: 1, name: "Para 1: Alif Laam Meem", arabic: "آلم", range: "Al-Faatiha 1 – Al-Baqara 141" },  
  { id: 2, name: "Para 2: Sayaqool", arabic: "سَيَقُولُ", range: "Al-Baqara 142 – 252" },  
  { id: 3, name: "Para 3: Tilka’r Rusul", arabic: "تِلْكَ ٱلرُّسُلُ", range: "Al-Baqara 253 – Aal-e-Imran 92" },  
  { id: 4, name: "Para 4: Lan Tanaaloo", arabic: "لَن تَنَالُوا۟", range: "Aal-e-Imran 93 – An-Nisaa 23" },  
  { id: 5, name: "Para 5: Wa’l Mohsanaat", arabic: "وَٱلْمُحْصَنَـٰتُ", range: "An-Nisaa 24 – An-Nisaa 147" },  
  { id: 6, name: "Para 6: La Yuhibbullah", arabic: "لَا يُحِبُّ ٱللَّهُ", range: "An-Nisaa 148 – Al-Maaida 82" },  
  { id: 7, name: "Para 7: Wa Iza Samiu", arabic: "وَإِذَا سَمِعُوا۟", range: "Al-Maaida 83 – Al-An’am 110" },  
  { id: 8, name: "Para 8: Wa Lau Annana", arabic: "وَلَوْ أَنَّنَا", range: "Al-An’am 111 – Al-A’raf 87" },  
  { id: 9, name: "Para 9: Qad Aflaha", arabic: "قَدْ أَفْلَحَ", range: "Al-A’raf 88 – Al-Anfal 40" },  
  { id: 10, name: "Para 10: Wa A’lamu", arabic: "وَٱعْلَمُوٓا۟", range: "Al-Anfal 41 – At-Tawba 92" },  
  { id: 11, name: "Para 11: Ya’tazeruna", arabic: "يَعْتَذِرُونَ", range: "At-Tawba 93 – Hud 5" },  
  { id: 12, name: "Para 12: Wa Mamin Da’abat", arabic: "وَمَا مِن دَآبَّةٍ", range: "Hud 6 – Yusuf 52" },  
  { id: 13, name: "Para 13: Wa Ma Ubrioo", arabic: "وَمَآ أُبَرِّئُ", range: "Yusuf 53 – Ibrahim 52" },  
  { id: 14, name: "Para 14: Rubama", arabic: "رُّبَمَا", range: "Al-Hijr 1 – An-Nahl 50" },  
  { id: 15, name: "Para 15: Subhanallazi", arabic: "سُبْحَـٰنَ ٱلَّذِىٓ", range: "An-Nahl 51 – Al-Kahf 74" },  
  { id: 16, name: "Para 16: Qal Alam", arabic: "قَالَ أَلَمْ", range: "Al-Kahf 75 – Ta-Ha 135" },  
  { id: 17, name: "Para 17: Aqtarabat", arabic: "ٱقْتَرَبَتِ", range: "Al-Anbiya 1 – Al-Hajj 78" },  
  { id: 18, name: "Para 18: Qadd Aflaha", arabic: "قَدْ أَفْلَحَ", range: "Al-Mu’minun 1 – Al-Furqan 20" },  
  { id: 19, name: "Para 19: Wa Qalallazina", arabic: "وَقَالَ ٱلَّذِينَ", range: "Al-Furqan 21 – An-Naml 55" },  
  { id: 20, name: "Para 20: A’man Khalaq", arabic: "أَمَّنْ خَلَقَ", range: "An-Naml 56 – Al-Ankabut 45" },  
  { id: 21, name: "Para 21: Utlu Ma Oohi", arabic: "ٱتْلُ مَآ أُوحِىَ", range: "Al-Ankabut 46 – Al-Ahzab 30" },  
  { id: 22, name: "Para 22: Wa Manyaqnut", arabic: "وَمَن يَّقْنُتْ", range: "Al-Ahzab 31 – Ya-Sin 27" },  
  { id: 23, name: "Para 23: Wa Maliya", arabic: "وَمَا لِىَ", range: "Ya-Sin 28 – Az-Zumar 31" },  
  { id: 24, name: "Para 24: Faman Azlam", arabic: "فَمَنْ أَظْلَمُ", range: "Az-Zumar 32 – Fussilat 46" },  
  { id: 25, name: "Para 25: Ilahe Yuruddu", arabic: "إِلَيْهِ يُرَدُّ", range: "Fussilat 47 – Al-Jathiya 37" },  
  { id: 26, name: "Para 26: Ha’a Meem", arabic: "حم", range: "Al-Ahqaf 1 – Az-Zariyat 30" },  
  { id: 27, name: "Para 27: Qala Fama Khatbukum", arabic: "قَالَ فَمَا خَطْبُكُم", range: "Az-Zariyat 31 – Al-Hadid 29" },  
  { id: 28, name: "Para 28: Qadd Sami Allah", arabic: "قَدْ سَمِعَ ٱللَّهُ", range: "Al-Mujadila 1 – At-Tahrim 12" },  
  { id: 29, name: "Para 29: Tabarakallazi", arabic: "تَبَارَكَ ٱلَّذِى", range: "Al-Mulk 1 – Al-Mursalat 50" },  
  { id: 30, name: "Para 30: Amma Yatasa’aloon", arabic: "عَمَّ يَتَسَآءَلُوْنَ", range: "An-Naba 1 – An-Naas 6" }  
];     

// ================= Show Surah / Para =================
function openSurahList() {
    const container = document.getElementById('selectionContainer');
    container.innerHTML = "";

    surahList.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';

        div.innerHTML = `
            <span class="english">${index + 1}. ${item.name} (${item.ayat} Ayat)</span>
            <span class="arabic">${item.arabic}</span>
        `;

        div.onclick = () => openReader('surah', item.id, item.name, item.arabic);
        container.appendChild(div);
    });
}

function openParaList() {
    const container = document.getElementById('selectionContainer');
    container.innerHTML = "";

    paraList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';

        div.innerHTML = `
            <span class="english">${item.name}<br><small>${item.range}</small></span>
            <span class="arabic">${item.arabic}</span>
        `;

        div.onclick = () => openReader('para', item.id, item.name, item.arabic);
        container.appendChild(div);
    });
}

// ================= Open Reader =================
function openReader(type, id, name, arabicName) {
    localStorage.setItem('quranType', type);
    localStorage.setItem('quranId', id);
    localStorage.setItem('quranName', name);
    localStorage.setItem('quranArabic', arabicName || "");
    window.location.href = 'quranReader.html';
}

// ---- Helper: Arabic Number Conversion ----
function toArabicNumber(num) {
    const arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return num.toString().split('').map(d => arabicNums[parseInt(d)]).join('');
}

// ---- Ayat Number Formatter ----
function formatAyatNumber(num) {
    let mode = localStorage.getItem("ayatNumberMode") || "english";
    return mode === "arabic" ? toArabicNumber(num) : num;
}

// ---- Toggle Function ----
function toggleAyatNumberMode() {
    let current = localStorage.getItem("ayatNumberMode") || "english";
    let newMode = current === "english" ? "arabic" : "english";
    localStorage.setItem("ayatNumberMode", newMode);
    loadSurah(); // reload ayat
    alert("Ayat Number Mode switched to: " + newMode.toUpperCase());
}

// ================= Scrollable Quran Reader =================
function loadSurah() {
    const surahId = parseInt(localStorage.getItem('quranId')) || 1;
    const surahName = localStorage.getItem('quranName') || "Unknown";
    const arabicName = localStorage.getItem('quranArabic') || "";

    const surahNameElem = document.getElementById('surahName');
    const ayatBox = document.getElementById('ayatBox');

    if (surahNameElem) {
        surahNameElem.innerHTML = `
            <span class="english">${surahName}</span>
            <span class="arabic">${arabicName}</span>
        `;
    }

    const allAyat = quranPages[surahId] || [];
    if (ayatBox) {
        ayatBox.innerHTML = "";
        ayatBox.style.direction = "rtl";
        ayatBox.style.textAlign = "justify";
        ayatBox.style.lineHeight = "2.2";
        ayatBox.style.maxHeight = "70vh";
        ayatBox.style.overflowY = "scroll";
        ayatBox.style.padding = "10px";

        allAyat.forEach((ayat, index) => {
            let div = document.createElement("div");
            div.className = "ayat-line";
            div.innerHTML = `
                <span class="ayat-text">${ayat}</span>
                <span class="ayat-num">(${formatAyatNumber(index + 1)})</span>
                <button class="bookmark-btn" onclick="saveBookmark(${surahId}, '${surahName}', ${index + 1})">🔖</button>
            `;
            ayatBox.appendChild(div);
        });
    }
}

// ================= ✅ Multiple Bookmark Feature =================
function saveBookmark(surahId, surahName, ayatNum) {
    let bookmarks = JSON.parse(localStorage.getItem("quranBookmarks") || "[]");

    let newBookmark = {
        surahId: surahId,
        surah: surahName,
        ayat: ayatNum,
        time: new Date().toLocaleString()
    };

    bookmarks.push(newBookmark);
    localStorage.setItem("quranBookmarks", JSON.stringify(bookmarks));
    alert("🔖 Bookmark saved: " + surahName + " (Ayat " + ayatNum + ")");
}

function openBookmarkList() {
    const container = document.getElementById('selectionContainer');
    container.innerHTML = "";

    let bookmarks = JSON.parse(localStorage.getItem("quranBookmarks") || "[]");

    if (bookmarks.length === 0) {
        container.innerHTML = "<p style='padding:15px; text-align:center;'>No bookmarks found!</p>";
        return;
    }

    bookmarks.forEach((bm, index) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.innerHTML = `
          <span class="english">📖 ${bm.surah} - Ayat ${bm.ayat}</span>
          <button onclick="goToBookmark(${bm.surahId}, ${bm.ayat})">Open</button>
          <button onclick="deleteBookmark(${index})">❌</button>
        `;
        container.appendChild(div);
    });
}

function goToBookmark(surahId, ayatNum) {
    localStorage.setItem("quranId", surahId);
    localStorage.setItem("scrollToAyat", ayatNum);
    window.location.href = "quranReader.html";
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("quranBookmarks") || "[]");
    bookmarks.splice(index, 1);
    localStorage.setItem("quranBookmarks", JSON.stringify(bookmarks));
    openBookmarkList();
}

// ================= Event Listeners =================
document.addEventListener('DOMContentLoaded', () => {
    loadSurah();

    // ✅ Auto scroll to bookmarked ayat if available
    const ayatToScroll = parseInt(localStorage.getItem("scrollToAyat"));
    if (ayatToScroll) {
        setTimeout(() => {
            const target = document.querySelectorAll(".ayat-line")[ayatToScroll - 1];
            if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
            localStorage.removeItem("scrollToAyat");
        }, 500);
    }
});