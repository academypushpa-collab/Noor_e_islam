// Tracker items for Namaz, Quran, Hadith (Tasbih will load dynamically)
const trackerData = {
  namaz: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
  quran: ["Al-Faatiha", "Al-Baqara", "Aal-i-Imran", "An-Nisaa", "Al-Ma'idah"],
  hadith: ["Hadith 1", "Hadith 2", "Hadith 3", "Hadith 4", "Hadith 5"]
};

// Open tracker
function openTracker(type) {
  const trackerContent = document.getElementById("trackerContent");
  trackerContent.innerHTML = `<h2>📌 ${capitalize(type)} Tracker</h2>`;

  const list = document.createElement("ul");

  if(type === "tasbih") {
    // Fetch Tasbih data from tasbeeh.html
    fetch("tasbeeh.html")
      .then(res => res.text())
      .then(html => {
        // Example: extract Tasbih list from page
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        let items = [];
        doc.querySelectorAll(".tasbih-item").forEach(el => {
          items.push(el.textContent.trim());
        });
        renderTrackerList(type, items, list, trackerContent);
      }).catch(err => {
        trackerContent.innerHTML += "<p>Failed to load Tasbih data.</p>";
      });
  } else {
    renderTrackerList(type, trackerData[type], list, trackerContent);
  }
}

// Render tracker list
function renderTrackerList(type, items, list, trackerContent) {
  const saved = JSON.parse(localStorage.getItem(type)) || {};

  items.forEach(item => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = saved[item] || false;
    checkbox.addEventListener("change", () => {
      saved[item] = checkbox.checked;
      localStorage.setItem(type, JSON.stringify(saved));
    });

    const span = document.createElement("span");
    span.textContent = item;

    li.appendChild(span);
    li.appendChild(checkbox);
    list.appendChild(li);
  });

  trackerContent.appendChild(list);
}

// Capitalize first letter
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}