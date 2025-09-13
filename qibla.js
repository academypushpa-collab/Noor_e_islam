// Convert degrees to radians
function toRadians(deg) {
  return deg * Math.PI / 180;
}

// Convert radians to degrees
function toDegrees(rad) {
  return rad * 180 / Math.PI;
}

// ✅ Calculate Qibla bearing from current location
function calculateQibla(lat, lon) {
  const kaabaLat = 21.4225 * Math.PI / 180; // Kaaba latitude
  const kaabaLon = 39.8262 * Math.PI / 180; // Kaaba longitude

  const userLat = lat * Math.PI / 180;
  const userLon = lon * Math.PI / 180;

  const dLon = kaabaLon - userLon;

  const y = Math.sin(dLon);
  const x =
    Math.cos(userLat) * Math.tan(kaabaLat) -
    Math.sin(userLat) * Math.cos(dLon);

  let bearing = Math.atan2(y, x);
  bearing = (toDegrees(bearing) + 360) % 360;
  return bearing;
}

// ✅ Draw Compass with Needle
function drawCompass(bearing, heading) {
  const canvas = document.getElementById("compass");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Outer Circle
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, 2 * Math.PI);
  ctx.strokeStyle = "#198754";
  ctx.lineWidth = 4;
  ctx.stroke();

  // ✅ Correct rotation angle
  let angle = (bearing - heading + 360) % 360;

  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(toRadians(angle));

  // Needle
  ctx.beginPath();
  ctx.moveTo(0, -80);
  ctx.lineTo(6, 0);
  ctx.lineTo(-6, 0);
  ctx.closePath();
  ctx.fillStyle = "#198754";
  ctx.fill();

  ctx.restore();

  // Center dot
  ctx.beginPath();
  ctx.arc(150, 150, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

// ✅ Get Location & Setup Compass
navigator.geolocation.getCurrentPosition(pos => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  const bearing = calculateQibla(lat, lon);

  document.getElementById("location").textContent =
    `Your Location: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;

  // Listen to orientation
  window.addEventListener("deviceorientationabsolute", e => {
    let heading = e.alpha;

    if (heading !== null) {
      if (typeof e.webkitCompassHeading !== "undefined") {
        // iOS
        heading = e.webkitCompassHeading;
      } else {
        // Android → flip angle
        heading = 360 - heading;
      }
      drawCompass(bearing, heading);
    }
  });

}, err => {
  alert("Location access required for Qibla Direction!");
});