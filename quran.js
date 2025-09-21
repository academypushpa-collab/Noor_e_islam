const surahList = document.getElementById("surahList");
const surahContent = document.getElementById("surahContent");
const searchSurah = document.getElementById("searchSurah");
const languageSelector = document.getElementById("languageSelector");

let currentLang = "none";

// 🌍 भाषा बदलने पर update
languageSelector.addEventListener("change", () => {
  currentLang = languageSelector.value;
});

// ✅ Surah List Load
async function loadSurahs() {
  try {
    let res = await fetch("https://api.alquran.cloud/v1/surah");
    let data = await res.json();
    surahList.innerHTML = "";
    data.data.forEach(surah => {
      let li = document.createElement("li");
      li.innerHTML = `<span>${surah.number}. ${surah.englishName}</span>
                      <span>${surah.englishNameTranslation}</span>`;
      li.addEventListener("click", () => loadSurahContent(surah.number));
      surahList.appendChild(li);
    });
  } catch (e) {
    surahList.innerHTML = "<p style='color:red;text-align:center;'>Error loading Surahs.</p>";
  }
}

// ✅ Surah Content Load (Arabic + Translation)
async function loadSurahContent(surahNumber) {
  surahList.style.display = "none";
  surahContent.style.display = "block";
  surahContent.innerHTML = "<p>Loading...</p>";

  try {
    // Arabic text
    let urlArabic = `https://api.alquran.cloud/v1/surah/${surahNumber}/quran-uthmani`;
    let arabicRes = await fetch(urlArabic);
    let arabicData = await arabicRes.json();

    // Translation (if selected)
    let translationData = null;
    if (currentLang !== "none") {
      try {
        let urlTrans = `https://api.alquran.cloud/v1/surah/${surahNumber}/${currentLang}`;
        let transRes = await fetch(urlTrans);
        translationData = await transRes.json();
      } catch {
        translationData = null;
      }
    }

    let html = `<button class="backBtn" onclick="goBack()">⬅ Back</button>
                <h2>${arabicData.data.englishName} - ${arabicData.data.englishNameTranslation}</h2>`;

    arabicData.data.ayahs.forEach((ayah, i) => {
      html += `<div class="ayah">
                 <div class="arabic">${ayah.text}</div>
                 ${translationData ? `<div class="translation">${translationData.data.ayahs[i].text}</div>` : ""}
               </div>`;
    });

    surahContent.innerHTML = html;
  } catch (e) {
    surahContent.innerHTML = "<p style='color:red;text-align:center;'>Error loading Surah.</p>";
  }
}

// ✅ Back Button
function goBack() {
  surahContent.style.display = "none";
  surahList.style.display = "block";
}

// ✅ Search Feature
searchSurah.addEventListener("keyup", () => {
  let filter = searchSurah.value.toLowerCase();
  let items = surahList.getElementsByTagName("li");
  Array.from(items).forEach(li => {
    let text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? "" : "none";
  });
});

// ✅ Load on start
loadSurahs();