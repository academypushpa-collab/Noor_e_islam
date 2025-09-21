const namesContainer = document.getElementById("namesContainer");

const names = [
  { arabic: "ٱلرَّحْمَـٰنُ", english: "Ar-Rahman", meaning: "The Beneficent" },
  { arabic: "ٱلرَّحِيمُ", english: "Ar-Rahim", meaning: "The Merciful" },
  { arabic: "ٱلْمَلِكُ", english: "Al-Malik", meaning: "The King" },
  { arabic: "ٱلْقُدُّوسُ", english: "Al-Quddus", meaning: "The Most Sacred" },
  { arabic: "ٱلسَّلَامُ", english: "As-Salam", meaning: "The Source of Peace" },
  { arabic: "ٱلْمُؤْمِنُ", english: "Al-Mu’min", meaning: "The Guardian of Faith" },
  { arabic: "ٱلْمُهَيْمِنُ", english: "Al-Muhaymin", meaning: "The Protector" },
  { arabic: "ٱلْعَزِيزُ", english: "Al-Aziz", meaning: "The Almighty" },
  { arabic: "ٱلْجَبَّارُ", english: "Al-Jabbar", meaning: "The Compeller" },
  { arabic: "ٱلْمُتَكَبِّرُ", english: "Al-Mutakabbir", meaning: "The Supreme" },
  { arabic: "ٱلْخَالِقُ", english: "Al-Khaliq", meaning: "The Creator" },
  { arabic: "ٱلْبَارِئُ", english: "Al-Bari", meaning: "The Evolver" },
  { arabic: "ٱلْمُصَوِّرُ", english: "Al-Musawwir", meaning: "The Fashioner" },
  { arabic: "ٱلْغَفَّارُ", english: "Al-Ghaffar", meaning: "The Forgiving" },
  { arabic: "ٱلْقَهَّارُ", english: "Al-Qahhar", meaning: "The Subduer" },
  { arabic: "ٱلْوَهَّابُ", english: "Al-Wahhab", meaning: "The Bestower" },
  { arabic: "ٱلرَّزَّاقُ", english: "Ar-Razzaq", meaning: "The Provider" },
  { arabic: "ٱلْفَتَّاحُ", english: "Al-Fattah", meaning: "The Opener" },
  { arabic: "ٱلْعَلِيمُ", english: "Al-‘Aleem", meaning: "The All-Knowing" },
  { arabic: "ٱلْقَابِضُ", english: "Al-Qabid", meaning: "The Withholder" },
  { arabic: "ٱلْبَاسِطُ", english: "Al-Basit", meaning: "The Expander" },
  { arabic: "ٱلْخَافِضُ", english: "Al-Khafid", meaning: "The Abaser" },
  { arabic: "ٱلرَّافِعُ", english: "Ar-Rafi", meaning: "The Exalter" },
  { arabic: "ٱلْمُعِزُّ", english: "Al-Mu’izz", meaning: "The Honourer" },
  { arabic: "ٱلْمُذِلُّ", english: "Al-Mudhill", meaning: "The Dishonourer" },
  { arabic: "ٱلسَّمِيعُ", english: "As-Sami", meaning: "The All-Hearing" },
  { arabic: "ٱلْبَصِيرُ", english: "Al-Basir", meaning: "The All-Seeing" },
  { arabic: "ٱلْحَكَمُ", english: "Al-Hakam", meaning: "The Judge" },
  { arabic: "ٱلْعَدْلُ", english: "Al-‘Adl", meaning: "The Just" },
  { arabic: "ٱللَّطِيفُ", english: "Al-Lateef", meaning: "The Gentle" },
  { arabic: "ٱلْخَبِيرُ", english: "Al-Khabeer", meaning: "The All-Aware" },
  { arabic: "ٱلْحَلِيمُ", english: "Al-Haleem", meaning: "The Forbearing" },
  { arabic: "ٱلْعَظِيمُ", english: "Al-‘Azim", meaning: "The Magnificent" },
  { arabic: "ٱلْغَفُورُ", english: "Al-Ghafoor", meaning: "The All-Forgiving" },
  { arabic: "ٱلشَّكُورُ", english: "Ash-Shakoor", meaning: "The Appreciative" },
  { arabic: "ٱلْعَلِيُّ", english: "Al-‘Aliyy", meaning: "The Most High" },
  { arabic: "ٱلْكَبِيرُ", english: "Al-Kabeer", meaning: "The Most Great" },
  { arabic: "ٱلْحَفِيظُ", english: "Al-Hafiz", meaning: "The Preserver" },
  { arabic: "ٱلْمُقِيتُ", english: "Al-Muqeet", meaning: "The Nourisher" },
  { arabic: "ٱلْحَسِيبُ", english: "Al-Hasib", meaning: "The Reckoner" },
  { arabic: "ٱلْجَلِيلُ", english: "Al-Jaleel", meaning: "The Majestic" },
  { arabic: "ٱلْكَرِيمُ", english: "Al-Kareem", meaning: "The Generous" },
  { arabic: "ٱلرَّقِيبُ", english: "Ar-Raqeeb", meaning: "The Watchful" },
  { arabic: "ٱلْمُجِيبُ", english: "Al-Mujeeb", meaning: "The Responsive" },
  { arabic: "ٱلْوَاسِعُ", english: "Al-Wasi‘", meaning: "The All-Encompassing" },
  { arabic: "ٱلْحَكِيمُ", english: "Al-Hakeem", meaning: "The All-Wise" },
  { arabic: "ٱلْوَدُودُ", english: "Al-Wadud", meaning: "The Loving" },
  { arabic: "ٱلْمَجِيدُ", english: "Al-Majeed", meaning: "The Most Glorious" },
  { arabic: "ٱلْبَاعِثُ", english: "Al-Ba‘ith", meaning: "The Resurrector" },
  { arabic: "ٱلشَّهِيدُ", english: "Ash-Shaheed", meaning: "The Witness" },
  { arabic: "ٱلْحَقُ", english: "Al-Haqq", meaning: "The Truth" },
  { arabic: "ٱلْوَكِيلُ", english: "Al-Wakeel", meaning: "The Trustee" },
  { arabic: "ٱلْقَوِيُّ", english: "Al-Qawiyy", meaning: "The All-Strong" },
  { arabic: "ٱلْمَتِينُ", english: "Al-Mateen", meaning: "The Firm" },
  { arabic: "ٱلْوَلِيُّ", english: "Al-Waliyy", meaning: "The Protecting Friend" },
  { arabic: "ٱلْحَمِيدُ", english: "Al-Hameed", meaning: "The Praiseworthy" },
  { arabic: "ٱلْمُحْصِي", english: "Al-Muhsi", meaning: "The Accounter" },
  { arabic: "ٱلْمُبْدِئُ", english: "Al-Mubdi", meaning: "The Originator" },
  { arabic: "ٱلْمُعِيدُ", english: "Al-Mu‘id", meaning: "The Restorer" },
  { arabic: "ٱلْمُحْيِي", english: "Al-Muhyi", meaning: "The Giver of Life" },
  { arabic: "ٱلْمُمِيتُ", english: "Al-Mumeet", meaning: "The Creator of Death" },
  { arabic: "ٱلْحَيُّ", english: "Al-Hayy", meaning: "The Ever-Living" },
  { arabic: "ٱلْقَيُّومُ", english: "Al-Qayyum", meaning: "The Sustainer" },
  { arabic: "ٱلْوَاجِدُ", english: "Al-Wajid", meaning: "The Finder" },
  { arabic: "ٱلْمَاجِدُ", english: "Al-Majid", meaning: "The Illustrious" },
  { arabic: "ٱلْوَاحِدُ", english: "Al-Wahid", meaning: "The One" },
  { arabic: "ٱلْأَحَدُ", english: "Al-Ahad", meaning: "The Unique" },
  { arabic: "ٱلصَّمَدُ", english: "As-Samad", meaning: "The Eternal Refuge" },
  { arabic: "ٱلْقَادِرُ", english: "Al-Qadir", meaning: "The Able" },
  { arabic: "ٱلْمُقْتَدِرُ", english: "Al-Muqtadir", meaning: "The Omnipotent" },
  { arabic: "ٱلْمُقَدِّمُ", english: "Al-Muqaddim", meaning: "The Expediter" },
  { arabic: "ٱلْمُؤَخِّرُ", english: "Al-Mu’akhkhir", meaning: "The Delayer" },
  { arabic: "ٱلأَوَّلُ", english: "Al-Awwal", meaning: "The First" },
  { arabic: "ٱلْآخِرُ", english: "Al-Akhir", meaning: "The Last" },
  { arabic: "ٱلظَّاهِرُ", english: "Az-Zahir", meaning: "The Manifest" },
  { arabic: "ٱلْبَاطِنُ", english: "Al-Batin", meaning: "The Hidden" },
  { arabic: "ٱلْوَالِي", english: "Al-Wali", meaning: "The Patron" },
  { arabic: "ٱلْمُتَعَالِي", english: "Al-Muta‘ali", meaning: "The Most Exalted" },
  { arabic: "ٱلْبَرُّ", english: "Al-Barr", meaning: "The Most Kind" },
  { arabic: "ٱلتَّوَّابُ", english: "At-Tawwab", meaning: "The Accepter of Repentance" },
  { arabic: "ٱلْمُنْتَقِمُ", english: "Al-Muntaqim", meaning: "The Avenger" },
  { arabic: "ٱلْعَفُوُ", english: "Al-‘Afuww", meaning: "The Pardoner" },
  { arabic: "ٱلرَّؤُفُ", english: "Ar-Ra’uf", meaning: "The Most Compassionate" },
  { arabic: "مَالِكُ ٱلْمُلْكِ", english: "Malik-ul-Mulk", meaning: "The Owner of Dominion" },
  { arabic: "ذُوالْجَلَالِ وَالإكْرَامِ", english: "Dhul-Jalali wal-Ikram", meaning: "Lord of Majesty & Generosity" },
  { arabic: "ٱلْمُقْسِطُ", english: "Al-Muqsit", meaning: "The Just" },
  { arabic: "ٱلْجَامِعُ", english: "Al-Jami‘", meaning: "The Gatherer" },
  { arabic: "ٱلْغَنيُّ", english: "Al-Ghaniyy", meaning: "The Self-Sufficient" },
  { arabic: "ٱلْمُغْنِيُّ", english: "Al-Mughni", meaning: "The Enricher" },
  { arabic: "ٱلْمَانِعُ", english: "Al-Mani‘", meaning: "The Withholder" },
  { arabic: "ٱلضَّارُ", english: "Ad-Darr", meaning: "The Distresser" },
  { arabic: "ٱلنَّافِعُ", english: "An-Nafi‘", meaning: "The Benefactor" },
  { arabic: "ٱلنُّورُ", english: "An-Nur", meaning: "The Light" },
  { arabic: "ٱلْهَادِي", english: "Al-Hadi", meaning: "The Guide" },
  { arabic: "ٱلْبَدِيعُ", english: "Al-Badi‘", meaning: "The Incomparable" },
  { arabic: "ٱلْبَاقِي", english: "Al-Baqi", meaning: "The Everlasting" },
  { arabic: "ٱلْوَارِثُ", english: "Al-Warith", meaning: "The Inheritor" },
  { arabic: "ٱلرَّشِيدُ", english: "Ar-Rashid", meaning: "The Guide to the Right Path" },
  { arabic: "ٱلصَّبُورُ", english: "As-Sabur", meaning: "The Patient" }
];


// ✅ Render Function
function renderNames(list) {
  namesContainer.innerHTML = "";
  list.forEach(n => {
    const card = document.createElement("div");
    card.className = "nameCard";
    card.innerHTML = `
      <div class="arabic">${n.arabic}</div>
      <div class="english">${n.english}</div>
      <div class="meaning">${n.meaning}</div>
    `;
    namesContainer.appendChild(card);
  });
}

// ✅ Search Feature
searchBox.addEventListener("keyup", () => {
  const filter = searchBox.value.toLowerCase();
  const filtered = names.filter(n =>
    n.english.toLowerCase().includes(filter) ||
    n.meaning.toLowerCase().includes(filter) ||
    n.arabic.includes(filter)
  );
  renderNames(filtered);
});

// First Load
renderNames(names);

