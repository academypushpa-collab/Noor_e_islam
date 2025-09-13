// Load stories based on language
let selectedLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
  loadLanguages();
  loadStories();

  document.getElementById("languageSelect").addEventListener("change", (e) => {
    selectedLanguage = e.target.value;
    loadStories();
  });

  document.getElementById("searchInput").addEventListener("input", loadStories);
});

function loadLanguages() {
  const select = document.getElementById("languageSelect");
  select.innerHTML = "";

  const languages = Object.keys(storiesData);
  languages.forEach(lang => {
    let option = document.createElement("option");
    option.value = lang;
    option.textContent = getLanguageName(lang);
    if (lang === selectedLanguage) option.selected = true;
    select.appendChild(option);
  });
}

function loadStories() {
  const container = document.getElementById("storiesContainer");
  container.innerHTML = "";

  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const stories = storiesData[selectedLanguage];

  stories
    .filter(story => story.title.toLowerCase().includes(searchValue))
    .forEach(story => {
      let card = document.createElement("div");
      card.classList.add("story-card");

      let title = document.createElement("div");
      title.classList.add("story-title");
      title.textContent = story.title;

      let shortText = document.createElement("div");
      shortText.classList.add("story-short");
      shortText.textContent = story.short;

      let fullText = document.createElement("div");
      fullText.classList.add("story-full");
      fullText.textContent = story.full;

      let btn = document.createElement("button");
      btn.classList.add("learn-more");
      btn.textContent = "Learn More";
      btn.addEventListener("click", () => {
        if (fullText.style.display === "none" || fullText.style.display === "") {
          fullText.style.display = "block";
          btn.textContent = "Show Less";
        } else {
          fullText.style.display = "none";
          btn.textContent = "Learn More";
        }
      });

      card.appendChild(title);
      card.appendChild(shortText);
      card.appendChild(fullText);
      card.appendChild(btn);

      container.appendChild(card);
    });
}

function getLanguageName(code) {
  const langs = {
    en: "English",
    ur: "Urdu",
    hi: "Hindi",
    ar: "Arabic",
    bn: "Bengali",
    fr: "French",
    id: "Indonesian",
    tr: "Turkish"
  };
  return langs[code] || code;
}