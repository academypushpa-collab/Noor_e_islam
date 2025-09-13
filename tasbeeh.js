// ✅ 15 Full Azkaar
const azkaar = {
  SubhanAllah: `سُبْحَانَ اللّٰهِ <br><span class='trans'>Subhan Allah</span> <br><small>महिमा और प्रशंसा अल्लाह के लिए है।</small>`,
  Alhamdulillah: `الْـحَـمْـدُ للهِ <br><span class='trans'>Alhamdu Lillah</span> <br><small>सारी प्रशंसा अल्लाह के लिए है।</small>`,
  AllahuAkbar: `اَللّٰهُ أَكْبَرُ <br><span class='trans'>Allahu Akbar</span> <br><small>अल्लाह सबसे बड़ा है।</small>`,
  Astaghfirullah: `أَسْتَغْفِرُ اللّٰهَ <br><span class='trans'>Astaghfirullah</span> <br><small>मैं अल्लाह से माफी चाहता हूँ।</small>`,
  Kalima: `لَا إِلٰهَ إِلَّا اللّٰهُ <br><span class='trans'>La ilaha illallah</span> <br><small>अल्लाह के सिवा कोई माबूद नहीं।</small>`,
  DaroodSharif: `اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ <br><span class='trans'>Allahumma Salli Ala Muhammad</span> <br><small>ऐ अल्लाह! मुहम्मद ﷺ पर रहमत भेज।</small>`,
  Hasbunallah: `حَسْبُنَا اللّٰهُ <br><span class='trans'>Hasbunallahu</span> <br><small>अल्लाह हमारे लिए काफ़ी है।</small>`,
  AyatulKursi: `اَللّٰهُ لَا إِلٰهَ إِلَّا هُوَ الْـحَيُّ الْقَيُّومُ <br><span class='trans'>Ayatul Kursi</span>`,
  LaHawla: `لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ <br><span class='trans'>La hawla wa la quwwata illa billah</span>`,
  Rabbighfirli: `رَبِّ اغْفِرْ لِي <br><span class='trans'>Rabbighfir li</span> <br><small>ऐ मेरे रब! मुझे माफ़ कर।</small>`,
  Bismillah: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ <br><span class='trans'>Bismillahir Rahmanir Rahim</span>`,
  Innalillahi: `إِنَّا لِلّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ <br><span class='trans'>Inna lillahi wa inna ilayhi raji'un</span>`,
  ShukranAllah: `شُكْرًا لِلّٰهِ <br><span class='trans'>Shukran Allah</span>`,
  Tawakkaltu: `تَوَكَّلْتُ عَلَى اللّٰهِ <br><span class='trans'>Tawakkaltu 'alallah</span>`,
  YaHayyu: `يَا حَيُّ يَا قَيُّومُ <br><span class='trans'>Ya Hayyu Ya Qayyum</span>`
};

// ✅ Populate select box
const selectBox = document.getElementById("tasbih-selection");
Object.keys(azkaar).forEach(key => {
  let option = document.createElement("option");
  option.value = key;
  option.textContent = key;
  selectBox.appendChild(option);
});

// ✅ Counter logic
let tasbihCounter = 0;
const targetDisplay = document.getElementById("tasbih-target-display");
const progressBar = document.getElementById("progress-bar");

document.getElementById("tasbih-btn").addEventListener("click", () => {
  tasbihCounter++;
  document.getElementById("tasbih-counter").textContent = tasbihCounter;

  // Update progress
  let target = parseInt(targetDisplay.textContent);
  let progress = Math.min((tasbihCounter / target) * 100, 100);
  progressBar.style.width = progress + "%";

  // Target completed
  if (tasbihCounter >= target) {
    alert("🎯 Target पूरा हो गया! MashaAllah");
  }
});

// ✅ Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
  tasbihCounter = 0;
  document.getElementById("tasbih-counter").textContent = 0;
  document.getElementById("tasbih-selection").value = "SubhanAllah";
  document.getElementById("tasbih-text-display").innerHTML = azkaar["SubhanAllah"];
  progressBar.style.width = "0%";
});

// ✅ Target input change
document.getElementById("tasbih-target-input").addEventListener("change", e => {
  targetDisplay.textContent = e.target.value;
  progressBar.style.width = "0%";
  tasbihCounter = 0;
  document.getElementById("tasbih-counter").textContent = 0;
});

// ✅ Change Zikr
selectBox.addEventListener("change", e => {
  let text = e.target.value;
  document.getElementById("tasbih-text-display").innerHTML = azkaar[text];
});

// ✅ Initial Load
selectBox.value = "SubhanAllah";
document.getElementById("tasbih-text-display").innerHTML = azkaar["SubhanAllah"];