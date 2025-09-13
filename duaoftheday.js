document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("duaOftheDay");

  function showRandomDua() {
    if (typeof duas !== "undefined" && Array.isArray(duas) && duas.length > 0) {
      // ✅ Random index
      let duaIndex = Math.floor(Math.random() * duas.length);
      let dua = duas[duaIndex];

      container.innerHTML = `
        <div class="dua-card">
          <h4>${dua.title}</h4>
          <p class="arabic">${dua.arabic}</p>
          <p class="transliteration">${dua.transliteration}</p>
          <p class="translation">${dua.translation}</p>
          <p class="reference">${dua.reference || ""}</p>
        </div>
      `;
    } else {
      container.innerHTML = `<p style="color:#666; text-align:center;">⚠️ No duas found.</p>`;
    }
  }

  // ✅ Page load hote hi ek dua dikhaye
  showRandomDua();

  // ✅ Har 5 minute (300000 ms) me dua change ho
  setInterval(showRandomDua, 300000);
});