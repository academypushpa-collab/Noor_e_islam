const tafseerText = document.getElementById("tafseerText");
const languageSelector = document.getElementById("languageSelector");
const tafseerTitle = document.getElementById("tafseerTitle");

// Default Surah Ayah
const surahAyah = "1:1"; 

// ✅ Load Tafseer from API
async function loadTafseer(lang = "en") {
  try {
    // Quran.com Tafseer API (Ibn Kathir ID = 131)
    const res = await fetch(`https://api.quran.com/v4/tafsirs/131/by_ayah/${surahAyah}`);
    const data = await res.json();

    let tafseerTextRaw = data?.tafsir?.text || tafseerBackup[surahAyah].en;

    // If user wants other language, translate
    if (lang !== "en") {
      tafseerTextRaw = await translateText(tafseerTextRaw, lang);
    }

    tafseerText.innerText = tafseerTextRaw;

  } catch (err) {
    console.error("API failed, using backup.", err);
    tafseerText.innerText = tafseerBackup[surahAyah][lang] || tafseerBackup[surahAyah].en;
  }
}

// ✅ Translator API (LibreTranslate Free)
async function translateText(text, targetLang) {
  try {
    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({ q: text, source: "en", target: targetLang }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    return data.translatedText;
  } catch (err) {
    console.error("Translation failed", err);
    return text; // fallback original
  }
}

// ✅ Download Text
function downloadText(filename, text) {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
}

// ✅ Download PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) {
    alert("Please add jsPDF library for PDF download.");
    return;
  }
  const doc = new jsPDF();
  doc.text(tafseerText.innerText, 10, 10);
  doc.save("tafseer.pdf");
});

// ✅ Listen Tafseer
document.getElementById("listenBtn").addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(tafseerText.innerText);
  utterance.lang = languageSelector.value;
  speechSynthesis.speak(utterance);
});

// ✅ Download Text Btn
document.getElementById("downloadBtn").addEventListener("click", () => {
  downloadText("tafseer.txt", tafseerText.innerText);
});

// ✅ Language Change
languageSelector.addEventListener("change", () => {
  loadTafseer(languageSelector.value);
});

// First Load
loadTafseer("en");