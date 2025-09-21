const hadithListDiv = document.getElementById("hadithList");
const searchHadith = document.getElementById("searchHadith");
const languageSelector = document.getElementById("languageSelector");

let currentLang = "en";

// 🌍 भाषा बदलने पर
languageSelector.addEventListener("change", () => {
  currentLang = languageSelector.value;
  displayHadiths(hadithData);
});

// 🔍 सर्च फीचर
searchHadith.addEventListener("keyup", () => {
  let filter = searchHadith.value.toLowerCase();
  let filtered = hadithData.filter(h =>
    h.translations.en.toLowerCase().includes(filter) ||
    h.translations.ur.toLowerCase().includes(filter) ||
    h.translations.hi.toLowerCase().includes(filter)
  );
  displayHadiths(filtered);
});

// 📌 हदीस दिखाओ
function displayHadiths(data) {
  hadithListDiv.innerHTML = "";
  data.forEach(h => {
    let card = document.createElement("div");
    card.className = "hadith-card";
    card.innerHTML = `
      <div class="hadith-arabic">${h.arabic}</div>
      <div class="hadith-translation">${h.translations[currentLang] || h.translations.en}</div>
      <div class="hadith-ref">${h.reference}</div>
    `;
    hadithListDiv.appendChild(card);
  });
}

// ✅ लोड करो
displayHadiths(hadithData);