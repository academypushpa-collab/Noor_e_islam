// ===============================
// Dua List (Daily Use 1–50)
// ===============================
const duas = [
  {
    title: "1. Sone ki Dua",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma Amutu Wa Ahya",
    meaning: "Tere Naam se, ya Allah! Main sota aur uthta hoon."
  },
  {
    title: "2. Uthne ki Dua",
    arabic: "الْـحَمْـدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
    transliteration: "Alhamdulillahil-ladhi ahyana ba'da ma amatana",
    meaning: "Sab tareef Allah ke liye hai jisne hume maut ke baad zinda kiya."
  },
  {
    title: "3. Kapde Pehnne ki Dua",
    arabic: "الْـحَـمْـدُ للهِ الَّذِي كَسَانِي هَذَا",
    transliteration: "Alhamdulillahil-ladhi kasani hadha",
    meaning: "Allah ka shukr jisne mujhe yeh libas pehnaya."
  },
  {
    title: "4. Kapde Utarne ki Dua",
    arabic: "بِسْمِ الله",
    transliteration: "Bismillah",
    meaning: "Allah ke Naam ke saath."
  },
  {
    title: "5. Ghar se Nikalne ki Dua",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
    transliteration: "Bismillahi tawakkaltu 'alallah",
    meaning: "Allah ke Naam se, maine Allah par bharosa kiya."
  },
  {
    title: "6. Ghar Mein Dakhil Hone ki Dua",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا",
    transliteration: "Bismillahi walajna",
    meaning: "Allah ke Naam se hum ghar mein dakhil hote hain."
  },
  {
    title: "7. Khana Khane se Pehle",
    arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
    transliteration: "Bismillah wa 'ala barakatillah",
    meaning: "Allah ke Naam se aur uski barkat ke sath."
  },
  {
    title: "8. Khana Khatam karne ke baad",
    arabic: "الْـحَـمْـدُ للهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
    transliteration: "Alhamdulillahil-ladhi at'amana wa saqana",
    meaning: "Allah ka shukr jisne hume khilaya pilaya."
  },
  {
    title: "9. Safar ki Dua",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
    transliteration: "Subhanalladhi sakhkhara lana hadha",
    meaning: "Paak hai wo Allah jisne is sawari ko hamare liye musakhar kiya."
  },
  {
    title: "10. Bazar Jaane ki Dua",
    arabic: "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transliteration: "La ilaha illallah wahdahu la sharika lahu",
    meaning: "Allah ke siwa koi maabood nahi, uska koi shareek nahi."
  },
  {
    title: "11. Masjid Mein Dakhil Hone ki Dua",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah li abwaba rahmatik",
    meaning: "Ya Allah! mere liye apni rahmat ke darwaze khol de."
  },
  {
    title: "12. Masjid Se Nikalne ki Dua",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    meaning: "Ya Allah! main tujhse apne fazl ka sawal karta hoon."
  },
  {
    title: "13. Bimaar ki Dua",
    arabic: "اللَّهُمَّ اشْفِهِ",
    transliteration: "Allahumma ashfihi",
    meaning: "Ya Allah! ise shifa ata farma."
  },
  {
    title: "14. Musibat ke Waqt ki Dua",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    transliteration: "Inna lillahi wa inna ilayhi raji'un",
    meaning: "Hum Allah ke liye hain aur usi ki taraf laut kar jaayenge."
  },
  {
    title: "15. Barish ki Dua",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "Allahumma sayyiban nafi'an",
    meaning: "Ya Allah! ise faida mand barish bana de."
  },
  {
    title: "16. Maut ki Yaad ki Dua",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ مَنْ يَذْكُرُ الْمَوْتَ كَثِيرًا",
    transliteration: "Allahumma aj‘alni mimman yadhkuru almawta kathiran",
    meaning: "Ya Allah! mujhe un mein bana jo maut ko aksar yaad karte hain."
  },
  {
    title: "17. Iman Mazboot Karne ki Dua",
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
    transliteration: "Rabbana la tuzigh quloobana ba‘da idh hadaytana",
    meaning: "Ai Rabb! hidayat dene ke baad hamare dil ko tedha na kar."
  },
  {
    title: "18. Sabra ki Dua",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
    transliteration: "Rabbana afrigh ‘alayna sabran",
    meaning: "Ai Rabb! hum par sabr barsa de."
  },
  {
    title: "19. Dushman se Hifazat ki Dua",
    arabic: "اللَّهُمَّ اكْفِنَاهُمْ بِمَا شِئْتَ",
    transliteration: "Allahummakfinahum bima shi’ta",
    meaning: "Ya Allah! unse hume apne tareeqe se kaafi bana de."
  },
  {
    title: "20. Salam Karne ki Dua",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salamu ‘alaykum wa rahmatullah",
    meaning: "Tum par salamati aur Allah ki rahmat ho."
  },
  {
    title: "21. Salam ka Jawab dene ki Dua",
    arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ",
    transliteration: "Wa ‘alaykumu as-salamu wa rahmatullah",
    meaning: "Aur tum par bhi salamati aur Allah ki rahmat ho."
  },
  {
    title: "22. Musalman Bhai ke liye Dua",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ",
    transliteration: "Allahummaghfir lahu",
    meaning: "Ya Allah! uske liye maghfirat farma."
  },
  {
    title: "23. Rizq ki Barkat ki Dua",
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي رِزْقِنَا",
    transliteration: "Allahumma barik lana fi rizqina",
    meaning: "Ya Allah! hamare rizq mein barkat ata farma."
  },
  {
    title: "24. Hidayat ki Dua",
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinas siratal mustaqim",
    meaning: "Humein seedha raasta dikha."
  },
  {
    title: "25. Shifa ki Dua",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ",
    transliteration: "Allahumma rabban-nasi adhhibil-ba’sa",
    meaning: "Logo ke Rabb! bimaari door kar."
  },
  {
    title: "26. Maghfirat ki Dua",
    arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا",
    transliteration: "Rabbana ighfir lana dhunubana",
    meaning: "Ai Rabb! hamare gunah maaf farma."
  },
  {
    title: "27. Bachav ki Dua",
    arabic: "اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ",
    transliteration: "Allahumma ihfazni min bayni yadayya",
    meaning: "Ya Allah! aage pichhe har jagah se hifazat farma."
  },
  {
    title: "28. Pareshani Door Karne ki Dua",
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Ya Hayyu Ya Qayyum birahmatika astagheethu",
    meaning: "Ai Hamesha Zinda, Sab Qayam Rakhne wale! teri rahmat se madad mangta hoon."
  },
  {
    title: "29. Ilm ki Asani ki Dua",
    arabic: "رَبِّ يَسِّرْ وَلَا تُعَسِّرْ",
    transliteration: "Rabbi yassir wa la tu‘assir",
    meaning: "Mere Rabb! asaan bana aur mushkil na kar."
  },
  {
    title: "30. Safar se Wapas Aane ki Dua",
    arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ",
    transliteration: "Ayibuna ta’ibuna ‘abidun",
    meaning: "Hum wapas lautne wale, tauba karne wale, ibadat karne wale hain."
  },
  {
    title: "31. Tawba ki Dua",
    arabic: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا",
    transliteration: "Rabbana zalamna anfusana",
    meaning: "Ai Rabb! humne apne nafs par zulm kiya."
  },
  {
    title: "32. Gum Se Nijaat ki Dua",
    arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا",
    transliteration: "Allahumma aj‘al fi qalbi nooran",
    meaning: "Ya Allah! mere dil mein roshni bana de."
  },
  {
    title: "33. Bachon ki Hifazat ki Dua",
    arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ",
    transliteration: "U‘eedhukuma bikalimatillahi tammati",
    meaning: "Allah ke mukammal kalimon se tumhari hifazat karta hoon."
  },
  {
    title: "34. Ghar ki Barkat ki Dua",
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي بَيْتِنَا",
    transliteration: "Allahumma barik lana fi baytina",
    meaning: "Ya Allah! hamare ghar mein barkat ata farma."
  },
  {
    title: "35. Rozgar ki Dua",
    arabic: "اللَّهُمَّ ارْزُقْنَا رِزْقًا حَلَالًا طَيِّبًا",
    transliteration: "Allahumma arzuqna rizqan halalan tayyiban",
    meaning: "Ya Allah! hume halal aur paak rizq ata farma."
  },
  {
    title: "36. Jannat ki Dua",
    arabic: "اللَّهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْجَنَّةِ",
    transliteration: "Allahumma aj‘alna min ahlil-jannah",
    meaning: "Ya Allah! hume jannat walon mein bana."
  },
  {
    title: "37. Dozakh se Bachne ki Dua",
    arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ",
    transliteration: "Allahumma ajirna minan-naar",
    meaning: "Ya Allah! hume dozakh ki aag se bacha."
  },
  {
    title: "38. Akhlaq ki Dua",
    arabic: "اللَّهُمَّ حَسِّنْ خُلُقِي",
    transliteration: "Allahumma hassin khuluqi",
    meaning: "Ya Allah! mere akhlaq ko behtareen bana."
  },
  {
    title: "39. Dil ki Safai ki Dua",
    arabic: "اللَّهُمَّ طَهِّرْ قَلْبِي",
    transliteration: "Allahumma tahhir qalbi",
    meaning: "Ya Allah! mere dil ko paak kar de."
  },
  {
    title: "40. Neki Par Istiqamat ki Dua",
    arabic: "اللَّهُمَّ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Allahumma thabbit qalbi ‘ala deenik",
    meaning: "Ya Allah! mere dil ko apne deen par mazboot bana."
  },
  {
    title: "41. Neend Se Bachne ki Dua",
    arabic: "اللَّهُمَّ بَارِكْ لِي فِي نَوْمِي وَيَقَظَتِي",
    transliteration: "Allahumma barik li fi nawmi wa yaqazati",
    meaning: "Ya Allah! meri neend aur jagne mein barkat farma."
  },
  {
    title: "42. Roza Iftar ki Dua",
    arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration: "Allahumma laka sumtu wa ‘ala rizqika-aftartu",
    meaning: "Ya Allah! maine tere liye roza rakha aur tere hi rizq se iftar kiya."
  },
  {
    title: "43. Sehri ki Dua",
    arabic: "نَوَيْتُ صَوْمَ غَدٍ",
    transliteration: "Nawaytu sawma ghadin",
    meaning: "Maine kal ke roza ki niyat ki."
  },
  {
    title: "44. Ilm ki Dua",
    arabic: "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    meaning: "Mere Rabb! mujhe ilm mein izafa de."
  },
  {
    title: "45. Dar ke Waqt ki Dua",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni‘mal wakeel",
    meaning: "Allah humare liye kaafi hai, aur wo behtareen kaarkun hai."
  },
  {
    title: "46. Safalta ki Dua",
    arabic: "اللَّهُمَّ يَسِّرْ لِي أَمْرِي",
    transliteration: "Allahumma yassir li amri",
    meaning: "Ya Allah! mere kaam ko asaan bana."
  },
  {
    title: "47. Zindagi ki Barkat ki Dua",
    arabic: "اللَّهُمَّ بَارِكْ لِي فِي عُمُرِي",
    transliteration: "Allahumma barik li fi umri",
    meaning: "Ya Allah! meri zindagi mein barkat ata farma."
  },
  {
    title: "48. Wazoo ke Baad ki Dua",
    arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ",
    transliteration: "Ash-hadu an la ilaha illallah",
    meaning: "Main gawahi deta hoon ke Allah ke siwa koi maabood nahi."
  },
  {
    title: "49. Qabr ki Azaab se Bachne ki Dua",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
    transliteration: "Allahumma inni a‘udhu bika min ‘adhabil-qabr",
    meaning: "Ya Allah! mujhe qabr ke azaab se bachale."
  },
  {
    title: "50. Akhri Hisaab Ki Asani ki Dua",
    arabic: "اللَّهُمَّ حَاسِبْنِي حِسَابًا يَسِيرًا",
    transliteration: "Allahumma hasibni hisaban yaseera",meaning: "Ya Allah! mera hisaab asaan bana de."
  }
];


// ✅ Render All Duas (duas.html ke liye)
function loadDuas() {
  const container = document.getElementById("duasContainer");
  if (!container) return; // agar element nahi mila to skip

  container.innerHTML = "";

  duas.forEach(dua => {
    const card = document.createElement("div");
    card.className = "dua-card";

    card.innerHTML = `      
      <h4>${dua.title}</h4>      
      <p class="arabic">${dua.arabic}</p>      
      <p class="transliteration">${dua.transliteration}</p>      
      <p class="translation">${dua.meaning}</p>      
    `;      

    container.appendChild(card);
  });
}

// ✅ Search Filter (duas.html ke liye)
const duaSearch = document.getElementById("duaSearch");
if (duaSearch) {
  duaSearch.addEventListener("input", function () {
    const term = this.value.toLowerCase();
    const container = document.getElementById("duasContainer");
    container.innerHTML = "";

    const filtered = duas.filter(d =>      
      d.title.toLowerCase().includes(term) ||      
      d.meaning.toLowerCase().includes(term) ||      
      d.transliteration.toLowerCase().includes(term)      
    );      

    if (filtered.length === 0) {      
      container.innerHTML = "<p style='text-align:center;color:red;'>No Duas found</p>";      
    } else {      
      filtered.forEach(dua => {      
        const card = document.createElement("div");      
        card.className = "dua-card";      
        card.innerHTML = `      
          <h4>${dua.title}</h4>      
          <p class="arabic">${dua.arabic}</p>      
          <p class="transliteration">${dua.transliteration}</p>      
          <p class="translation">${dua.meaning}</p>      
        `;      
        container.appendChild(card);      
      });      
    }
  });
}

// ✅ Dua of the Day (sirf index.html ke liye)
function showDuaOfDay() {
  const duaDayContainer = document.getElementById("duaOfDay");
  if (!duaDayContainer) return; // agar element exist nahi karta to skip

  const randomIndex = Math.floor(Math.random() * duas.length);
  const dua = duas[randomIndex];

  duaDayContainer.innerHTML = `
    <div class="dua-card">
      <h3>🌙 Dua of the Day</h3>
      <h4>${dua.title}</h4>
      <p class="arabic">${dua.arabic}</p>
      <p class="transliteration">${dua.transliteration}</p>
      <p class="translation">${dua.meaning}</p>
    </div>
  `;
}

// ✅ Page Load par
document.addEventListener("DOMContentLoaded", () => {
  loadDuas();        // agar duas.html hai to chalega
  showDuaOfDay();    // agar index.html hai to chalega

  // Dua of the Day har 5 min baad update ho
  if (document.getElementById("duaOfDay")) {
    setInterval(showDuaOfDay, 300000);
  }
});