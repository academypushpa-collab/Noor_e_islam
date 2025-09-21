const surahList = [
    { id: 1, name: "Al-Faatiha - The Opening", ayatCount: 7 },
    { id: 2, name: "Al-Baqara - The Cow", ayatCount: 286 },
    { id: 3, name: "Aal-i-Imran - The Family of Imran", ayatCount: 200 },
    { id: 4, name: "An-Nisaa - The Women", ayatCount: 176 },
    { id: 5, name: "Al-Ma'idah - The Table Spread", ayatCount: 120 },
    { id: 6, name: "Al-An'am - The Cattle", ayatCount: 165 },
    { id: 7, name: "Al-A'raf - The Heights", ayatCount: 206 },
    { id: 8, name: "Al-Anfal - The Spoils of War", ayatCount: 75 },
    { id: 9, name: "At-Tawbah - The Repentance", ayatCount: 129 },
    { id: 10, name: "Yunus - Jonah", ayatCount: 109 },
    { id: 11, name: "Hud - Hud", ayatCount: 123 },
    { id: 12, name: "Yusuf - Joseph", ayatCount: 111 },
    { id: 13, name: "Ar-Ra'd - The Thunder", ayatCount: 43 },
    { id: 14, name: "Ibrahim - Abraham", ayatCount: 52 },
    { id: 15, name: "Al-Hijr - The Rocky Tract", ayatCount: 99 },
    { id: 16, name: "An-Nahl - The Bee", ayatCount: 128 },
    { id: 17, name: "Al-Isra - The Night Journey", ayatCount: 111 },
    { id: 18, name: "Al-Kahf - The Cave", ayatCount: 110 },
    { id: 19, name: "Maryam - Mary", ayatCount: 98 },
    { id: 20, name: "Ta-Ha", ayatCount: 135 },
    { id: 21, name: "Al-Anbiya - The Prophets", ayatCount: 112 },
    { id: 22, name: "Al-Hajj - The Pilgrimage", ayatCount: 78 },
    { id: 23, name: "Al-Mu'minun - The Believers", ayatCount: 118 },
    { id: 24, name: "An-Nur - The Light", ayatCount: 64 },
    { id: 25, name: "Al-Furqan - The Criterion", ayatCount: 77 },
    { id: 26, name: "Ash-Shu'ara - The Poets", ayatCount: 227 },
    { id: 27, name: "An-Naml - The Ant", ayatCount: 93 },
    { id: 28, name: "Al-Qasas - The Stories", ayatCount: 88 },
    { id: 29, name: "Al-Ankabut - The Spider", ayatCount: 69 },
    { id: 30, name: "Ar-Rum - The Romans", ayatCount: 60 },
    { id: 31, name: "Luqman - Luqman", ayatCount: 34 },
    { id: 32, name: "As-Sajda - The Prostration", ayatCount: 30 },
    { id: 33, name: "Al-Ahzab - The Clans", ayatCount: 73 },
    { id: 34, name: "Saba - Sheba", ayatCount: 54 },
    { id: 35, name: "Fatir - The Originator", ayatCount: 45 },
    { id: 36, name: "Ya-Sin", ayatCount: 83 },
    { id: 37, name: "As-Saffat - Those who set the Ranks", ayatCount: 182 },
    { id: 38, name: "Sad - The Letter Sad", ayatCount: 88 },
    { id: 39, name: "Az-Zumar - The Groups", ayatCount: 75 },
    { id: 40, name: "Ghafir - The Forgiver", ayatCount: 85 },
    { id: 41, name: "Fussilat - Explained in Detail", ayatCount: 54 },
    { id: 42, name: "Ash-Shura - The Consultation", ayatCount: 53 },
    { id: 43, name: "Az-Zukhruf - The Ornaments of Gold", ayatCount: 89 },
    { id: 44, name: "Ad-Dukhan - The Smoke", ayatCount: 59 },
    { id: 45, name: "Al-Jathiya - The Crouching", ayatCount: 37 },
    { id: 46, name: "Al-Ahqaf - The Wind-Curved Sandhills", ayatCount: 35 },
    { id: 47, name: "Muhammad - Muhammad", ayatCount: 38 },
    { id: 48, name: "Al-Fath - The Victory", ayatCount: 29 },
    { id: 49, name: "Al-Hujurat - The Rooms", ayatCount: 18 },
    { id: 50, name: "Qaf - The Letter Qaf", ayatCount: 45 },
    { id: 51, name: "Adh-Dhariyat - The Winnowing Winds", ayatCount: 60 },
    { id: 52, name: "At-Tur - The Mount", ayatCount: 49 },
    { id: 53, name: "An-Najm - The Star", ayatCount: 62 },
    { id: 54, name: "Al-Qamar - The Moon", ayatCount: 55 },
    { id: 55, name: "Ar-Rahman - The Beneficent", ayatCount: 78 },
    { id: 56, name: "Al-Waqi'a - The Inevitable", ayatCount: 96 },
    { id: 57, name: "Al-Hadid - The Iron", ayatCount: 29 },
    { id: 58, name: "Al-Mujadila - The Pleading Woman", ayatCount: 22 },
    { id: 59, name: "Al-Hashr - The Exile", ayatCount: 24 },
    { id: 60, name: "Al-Mumtahina - She that is to be examined", ayatCount: 13 },
    { id: 61, name: "As-Saff - The Ranks", ayatCount: 14 },
    { id: 62, name: "Al-Jumu'a - The Congregation", ayatCount: 11 },
    { id: 63, name: "Al-Munafiqun - The Hypocrites", ayatCount: 11 },
    { id: 64, name: "At-Taghabun - The Mutual Disillusion", ayatCount: 18 },
    { id: 65, name: "At-Talaq - The Divorce", ayatCount: 12 },
    { id: 66, name: "At-Tahrim - The Prohibition", ayatCount: 12 },
    { id: 67, name: "Al-Mulk - The Sovereignty", ayatCount: 30 },
    { id: 68, name: "Al-Qalam - The Pen", ayatCount: 52 },
    { id: 69, name: "Al-Haqqah - The Reality", ayatCount: 52 },
    { id: 70, name: "Al-Ma'arij - The Ascending Stairways", ayatCount: 44 },
    { id: 71, name: "Nuh - Noah", ayatCount: 28 },
    { id: 72, name: "Al-Jinn - The Jinn", ayatCount: 28 },
    { id: 73, name: "Al-Muzzammil - The Enshrouded One", ayatCount: 20 },
    { id: 74, name: "Al-Muddaththir - The Cloaked One", ayatCount: 56 },
    { id: 75, name: "Al-Qiyamah - The Resurrection", ayatCount: 40 },
    { id: 76, name: "Al-Insan - The Man", ayatCount: 31 },
    { id: 77, name: "Al-Mursalat - The Emissaries", ayatCount: 50 },
    { id: 78, name: "An-Naba - The Tidings", ayatCount: 40 },
    { id: 79, name: "An-Nazi'at - Those who drag forth", ayatCount: 46 },
    { id: 80, name: "Abasa - He frowned", ayatCount: 42 },
    { id: 81, name: "At-Takwir - The Overthrowing", ayatCount: 29 },
    { id: 82, name: "Al-Infitar - The Cleaving", ayatCount: 19 },
    { id: 83, name: "Al-Mutaffifin - Defrauding", ayatCount: 36 },
    { id: 84, name: "Al-Inshiqaq - The Splitting Open", ayatCount: 25 },
    { id: 85, name: "Al-Buruj - The Mansions of the Stars", ayatCount: 22 },
    { id: 86, name: "At-Tariq - The Morning Star", ayatCount: 17 },
    { id: 87, name: "Al-A'la - The Most High", ayatCount: 19 },
    { id: 88, name: "Al-Ghashiya - The Overwhelming", ayatCount: 26 },
    { id: 89, name: "Al-Fajr - The Dawn", ayatCount: 30 },
    { id: 90, name: "Al-Balad - The City", ayatCount: 20 },
    { id: 91, name: "Ash-Shams - The Sun", ayatCount: 15 },
    { id: 92, name: "Al-Lail - The Night", ayatCount: 21 },
    { id: 93, name: "Ad-Duhaa - The Morning Hours", ayatCount: 11 },
    { id: 94, name: "Ash-Sharh - The Relief", ayatCount: 8 },
    { id: 95, name: "At-Tin - The Fig", ayatCount: 8 },
    { id: 96, name: "Al-Alaq - The Clot", ayatCount: 19 },
    { id: 97, name: "Al-Qadr - The Power", ayatCount: 5 },
    { id: 98, name: "Al-Bayyina - The Clear Proof", ayatCount: 8 },
    { id: 99, name: "Az-Zalzalah - The Earthquake", ayatCount: 8 },
    { id: 100, name: "Al-Adiyat - The Courser", ayatCount: 11 },
    { id: 101, name: "Al-Qari'a - The Calamity", ayatCount: 11 },
    { id: 102, name: "At-Takathur - The Rivalry in world increase", ayatCount: 8 },
    { id: 103, name: "Al-Asr - The Declining Day", ayatCount: 3 },
    { id: 104, name: "Al-Humazah - The Traducer", ayatCount: 9 },
    { id: 105, name: "Al-Fil - The Elephant", ayatCount: 5 },
    { id: 106, name: "Quraish - The Tribe of Quraish", ayatCount: 4 },
    { id: 107, name: "Al-Ma'un - The Small Kindnesses", ayatCount: 7 },
    { id: 108, name: "Al-Kawthar - The Abundance of Good", ayatCount: 3 },
    { id: 109, name: "Al-Kafiroon - The Disbelievers", ayatCount: 6 },
    { id: 110, name: "An-Nasr - The Divine Support", ayatCount: 3 },
    { id: 111, name: "Al-Masad - The Palm Fiber", ayatCount: 5 },
    { id: 112, name: "Al-Ikhlas - The Sincerity", ayatCount: 4 },
    { id: 113, name: "Al-Falaq - The Daybreak", ayatCount: 5 },
    { id: 114, name: "An-Nas - The Mankind", ayatCount: 6 }
];

const paraList = [
    { id: 1, name: "Para 1: Al-Faatiha to Al-Baqara [1-141]" },
    { id: 2, name: "Para 2: Al-Baqara [142-252]" },
    { id: 3, name: "Para 3: Al-Baqara [253] to Aal-i-Imran [92]" }
];

// Show Surah List
function openSurahList() {
    const container = document.getElementById('selectionContainer');
    container.innerHTML = "";
    surahList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerText = `${item.id}. ${item.name} (${item.ayatCount} Ayat)`;
        div.onclick = () => openReader('surah', item.id, item.name, item.ayatCount);
        container.appendChild(div);
    });
}

// Show Para List
function openParaList() {
    const container = document.getElementById('selectionContainer');
    container.innerHTML = "";
    paraList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerText = item.name;
        div.onclick = () => openReader('para', item.id, item.name, 0);
        container.appendChild(div);
    });
}

// Open Quran Reader Page
function openReader(type, id, name, ayatCount) {
    localStorage.setItem('quranType', type);       // 'surah' or 'para'
    localStorage.setItem('quranId', id);
    localStorage.setItem('quranName', name);
    localStorage.setItem('quranAyatCount', ayatCount);
    
    window.location.href = 'quranReader.html';
}