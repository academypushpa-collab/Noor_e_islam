// ===========================  
// Festival List  
// ===========================  
const festivals = [  
  { name: "Shab-e-Meraj", date: "2025-01-27" },  
  { name: "Shab-e-Barat", date: "2025-02-14" },  
  { name: "Start of Ramadan", date: "2025-03-01" },  
  { name: "Jumatul Wida", date: "2025-03-28" },  
  { name: "Shab-e-Qadr (21st)", date: "2025-03-30" },  
  { name: "Shab-e-Qadr (23rd)", date: "2025-04-01" },  
  { name: "Shab-e-Qadr (27th)", date: "2025-04-05" },  
  { name: "Eid al-Fitr", date: "2025-03-31" },  
  { name: "Shab-e-Miraj-un-Nabi", date: "2025-04-10" },  
  { name: "Urs of Khwaja Moinuddin Chishti", date: "2025-04-15" },  
  { name: "Eid-e-Ghadeer", date: "2025-04-20" },  
  { name: "Urs of Hazrat Ali (RA)", date: "2025-04-25" },  
  { name: "Youm-e-Ali", date: "2025-04-29" },  
  { name: "Eid al-Adha", date: "2025-06-07" },  
  { name: "Hajj Day (Yaum Arafah)", date: "2025-06-06" },  
  { name: "Islamic New Year (1 Muharram)", date: "2025-07-27" },  
  { name: "Day of Ashura (10 Muharram)", date: "2025-08-05" },  
  { name: "Chehlum (Arbaeen)", date: "2025-09-14" },  
  { name: "Eid Milad-un-Nabi", date: "2025-09-05" },  
  { name: "Urs of Khwaja Nizamuddin Auliya", date: "2025-09-25" },  
  { name: "Lailat-ul-Raghaib", date: "2025-10-10" },  
  { name: "Urs of Hazrat Khwaja Banda Nawaz", date: "2025-10-15" },  
  { name: "Urs of Hazrat Khwaja Garib Nawaz", date: "2025-10-20" },  
  { name: "Urs of Imam Abu Hanifa", date: "2025-10-25" },  
  { name: "Shab-e-Mubarak", date: "2025-11-01" },  
  { name: "Urs of Hazrat Data Ganj Bakhsh", date: "2025-11-05" },  
  { name: "Urs of Hazrat Shah Jalal", date: "2025-11-10" },  
  { name: "Urs of Hazrat Khwaja Sirajuddin", date: "2025-11-15" },  
  { name: "Urs of Hazrat Baba Farid", date: "2025-11-20" },  
  { name: "Urs of Hazrat Lal Shahbaz Qalandar", date: "2025-11-25" },  
  { name: "Shab-e-Khutba", date: "2025-12-01" },  
  { name: "Urs of Hazrat Amir Khusro", date: "2025-12-05" },  
  { name: "Urs of Hazrat Haji Ali", date: "2025-12-10" },  
  { name: "Urs of Hazrat Khwaja Hamiduddin", date: "2025-12-15" },  
  { name: "Urs of Hazrat Khwaja Qutbuddin Bakhtiar", date: "2025-12-20" },  
  { name: "Urs of Hazrat Khwaja Qazi Hamiduddin", date: "2025-12-25" },  
  { name: "Shab-e-Noor", date: "2025-12-30" }  
];  

// -----------------------------  
// Utility Functions  
// -----------------------------  
function daysBetween(today, festivalDate) {  
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());  
  const f = new Date(festivalDate);  
  const diffTime = f - t;  
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
}  

// -----------------------------  
// Show upcoming festival summary (header)  
// -----------------------------  
function showFestivalSummary() {  
  const notifyBox = document.getElementById("festivalNotify");  
  if (!notifyBox) return;  

  const today = new Date();  
  let upcoming = null;  

  for (let fest of festivals) {  
    const daysLeft = daysBetween(today, new Date(fest.date));  
    if (daysLeft >= 0) {  
      upcoming = { ...fest, daysLeft };  
      break;  
    }  
  }  

  if (upcoming) {  
    notifyBox.style.display = "block";    
    let highlight = upcoming.daysLeft <= 7 ? " 🔔" : "";  
    notifyBox.innerHTML = `🔔 Upcoming: <b>${upcoming.name}</b> — ${upcoming.daysLeft} din baaki hain ${highlight}`;  
  } else {  
    notifyBox.style.display = "none";      
  }  
}  

// -----------------------------  
// Show full festival list (Festivals page)  
// -----------------------------  
function loadFestivals() {  
  const listDiv = document.getElementById("festivalList");  
  if (!listDiv) return;  

  listDiv.innerHTML = "";   

  const today = new Date();  

  festivals.forEach(fest => {  
    const daysLeft = daysBetween(today, new Date(fest.date));  
    const item = document.createElement("div");  
    item.className = "festival-item";  
    item.style.padding = "8px";  
    item.style.borderBottom = "1px solid #eee";  

    // 🔔 Highlight if within 7 days  
    let highlight = daysLeft >= 0 && daysLeft <= 7 ? " 🔔" : "";  

    item.innerHTML = `📅 <strong>${fest.name}</strong> — ${fest.date} (${daysLeft} din baaki hain) ${highlight}`;  
    listDiv.appendChild(item);  
  });  
}  

// -----------------------------  
// Run after page load  
// -----------------------------  
document.addEventListener("DOMContentLoaded", () => {  
  showFestivalSummary();  
  loadFestivals();  
});