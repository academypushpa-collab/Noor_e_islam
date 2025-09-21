// ===============================  
// Calendar Loader (Gregorian + Hijri)  
// ===============================  
async function loadCalendar(month, year) {  
  const monthLabel = document.getElementById("monthLabel");  
  const calendarBody = document.getElementById("calendarBody");  
  const monthNames = [  
    "January","February","March","April","May","June",  
    "July","August","September","October","November","December"  
  ];  

  // 🔥 Get whole Hijri calendar of the month  
  let hijriData = [];  
  try {  
    let res = await fetch(`https://api.aladhan.com/v1/gToHCalendar/${month+1}/${year}`);  
    let data = await res.json();  
    hijriData = data.data;  
  } catch {  
    hijriData = [];  
  }  

  // ✅ Month Header (Gregorian + Hijri)  
  if (hijriData.length > 0) {  
    let hijriHeader = hijriData[0].hijri;  
    monthLabel.innerHTML = `${monthNames[month]} ${year} /   
      <span style="color:#198754;">${hijriHeader.month.en} ${hijriHeader.year}</span>`;  
  } else {  
    monthLabel.innerHTML = `${monthNames[month]} ${year}`;  
  }  

  // ✅ Generate Calendar Grid  
  if (calendarBody) {  
    calendarBody.innerHTML = "";  
    let firstDay = new Date(year, month).getDay();  
    let daysInMonth = new Date(year, month + 1, 0).getDate();  

    let today = new Date();  
    let todayDate = today.getDate();  
    let todayMonth = today.getMonth();  
    let todayYear = today.getFullYear();  

    let date = 1;  
    for (let i = 0; i < 6; i++) {  
      let row = document.createElement("tr");  

      for (let j = 0; j < 7; j++) {  
        let cell = document.createElement("td");  

        if (i === 0 && j < firstDay) {  
          cell.textContent = "";  
        } else if (date > daysInMonth) {  
          cell.textContent = "";  
        } else {  
          // ✅ Hijri data for this date  
          let hijriDay = "--";  
          let hijriMonth = "";  
          if (hijriData.length > 0 && hijriData[date - 1]) {  
            hijriDay = hijriData[date - 1].hijri.day;  
            hijriMonth = hijriData[date - 1].hijri.month.en;  
          }  

          // ✅ Highlight today  
          if (date === todayDate && month === todayMonth && year === todayYear) {  
            cell.innerHTML = `${date}<br><small style="color:#198754;">${hijriDay} ${hijriMonth}</small>`;  
            cell.classList.add("today");  
          } else {  
            cell.innerHTML = `${date}<br><small style="color:#666;">${hijriDay}</small>`;  
          }  

          date++;  
        }  
        row.appendChild(cell);  
      }  
      calendarBody.appendChild(row);  
    }  
  }  
}  

// ===============================  
// Navigation  
// ===============================  
let currentMonth = new Date().getMonth();  
let currentYear = new Date().getFullYear();  
if (document.getElementById("calendarBody")) {  
  loadCalendar(currentMonth, currentYear);  
}  

if (document.getElementById("prevMonth")) {  
  document.getElementById("prevMonth").addEventListener("click", () => {  
    currentMonth--;  
    if (currentMonth < 0) {  
      currentMonth = 11;  
      currentYear--;  
    }  
    loadCalendar(currentMonth, currentYear);  
  });  
}  

if (document.getElementById("nextMonth")) {  
  document.getElementById("nextMonth").addEventListener("click", () => {  
    currentMonth++;  
    if (currentMonth > 11) {  
      currentMonth = 0;  
      currentYear++;  
    }  
    loadCalendar(currentMonth, currentYear);  
  });  
}  

// ===============================  
// Show Today's Full Date (ONLY in Today Card)  
// ===============================  
async function loadTodayDate() {  
  let today = new Date();  
  let gDate = today.toLocaleDateString("en-GB", {  
    weekday: "long", year: "numeric", month: "long", day: "numeric"  
  });  

  try {  
    let res = await fetch(`https://api.aladhan.com/v1/gToHCalendar/${today.getMonth()+1}/${today.getFullYear()}`);  
    let data = await res.json();  
    let gDay = today.getDate();  
    let hijriData = data.data.find(d => parseInt(d.gregorian.day) === gDay);  

    if (hijriData) {  
      let hijri = hijriData.hijri.day + " " +  
                  hijriData.hijri.month.en + " " +  
                  hijriData.hijri.year + " AH";  

      // ✅ Only Today card update  
      document.getElementById("todayDate").innerHTML =  
        `${gDate} <br><span style='color:#198754;'>${hijri}</span>`;  

    } else {  
      document.getElementById("todayDate").textContent = gDate;  
    }  
  } catch (e) {  
    document.getElementById("todayDate").textContent = gDate;  
  }  
}  

// ===============================  
// Upcoming Festival (from festival.js)  
// ===============================  
async function loadUpcomingFestival() {  
  if (typeof festivals === "undefined") return;  

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
    notifyBox.innerHTML = `🔔 Upcoming: <b>${upcoming.name}</b> — ${upcoming.daysLeft} din baaki hain 🔔`;  
  } else {  
    notifyBox.style.display = "none";      
  }  
}  

// ===============================  
// Helper: Days Between  
// ===============================  
function daysBetween(date1, date2) {  
  const oneDay = 24 * 60 * 60 * 1000;  
  return Math.ceil((date2 - date1) / oneDay);  
}  

// ===============================  
// Run after page load  
// ===============================  
document.addEventListener("DOMContentLoaded", () => {  
  loadTodayDate();   // ✅ Only Today card me date show karega  
  loadUpcomingFestival();  
});