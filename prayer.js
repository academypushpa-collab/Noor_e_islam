// Prayer Times with Auto Notifications + Daily Auto Refresh
document.addEventListener("DOMContentLoaded", () => {
  const prayerTimesContainer = document.getElementById("prayerTimesContainer");
  const cityName = document.getElementById("cityName");

  let prayerTimes = {};

  // 🌍 Get user location and load times
  function loadPrayerTimes() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          // 🔹 Fetch timings by coordinates
          const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`);
          const data = await res.json();

          if (data.code === 200) {
            prayerTimes = data.data.timings;

            // ✅ सिर्फ़ 5 main prayers दिखाएँ
            let html = "<ul>";
            ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].forEach(prayer => {
              html += `<li><strong>${prayer}</strong>: ${prayerTimes[prayer]}</li>`;
            });
            html += "</ul>";

            prayerTimesContainer.innerHTML = html;

            // ✅ Location info
            cityName.textContent = `📍 Location: Lat ${lat.toFixed(2)}, Lon ${lon.toFixed(2)} (${data.data.meta.timezone})`;
          } else {
            prayerTimesContainer.textContent = "⚠️ Prayer times not available.";
          }
        } catch (e) {
          prayerTimesContainer.textContent = "❌ Error loading prayer times.";
          console.error(e);
        }
      }, () => {
        prayerTimesContainer.textContent = "❌ Location access denied.";
      });
    } else {
      prayerTimesContainer.textContent = "❌ Geolocation not supported.";
    }
  }

  // 🔔 Enable Notifications
  const notifyBtn = document.getElementById("enableNotifications");
  notifyBtn.addEventListener("click", () => {
    if (Notification.permission === "granted") {
      scheduleNotifications();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          scheduleNotifications();
        }
      });
    }
  });

  // ⏰ Function to schedule prayer notifications
  function scheduleNotifications() {
    if (!prayerTimes || Object.keys(prayerTimes).length === 0) {
      alert("⚠️ Prayer times not loaded yet.");
      return;
    }

    ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].forEach(prayer => {
      let timeStr = prayerTimes[prayer]; // "05:12" format
      let [hours, minutes] = timeStr.split(":").map(Number);

      let now = new Date();
      let prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

      // 5 minutes before prayer
      prayerTime.setMinutes(prayerTime.getMinutes() - 5);

      let diff = prayerTime - now;

      if (diff > 0) {
        setTimeout(() => {
          new Notification(`🕌 ${prayer} Prayer Reminder`, {
            body: `${prayer} prayer will start in 5 minutes.`,
            icon: "https://img.icons8.com/color/96/mosque.png"
          });
        }, diff);
      }
    });

    alert("✅ Prayer notifications scheduled for today!");
  }

  // 🌙 Auto refresh at midnight
  function scheduleMidnightRefresh() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 1, 0); // 00:01 AM next day
    let diff = tomorrow - now;

    setTimeout(() => {
      loadPrayerTimes();   // reload prayer times
      scheduleNotifications(); // re-schedule notifications
      scheduleMidnightRefresh(); // schedule again for next day
    }, diff);
  }

  // First load
  loadPrayerTimes();
  scheduleMidnightRefresh();
});