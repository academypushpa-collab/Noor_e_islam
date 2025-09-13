const saveBtn = document.getElementById("saveAccount");
const logoutBtn = document.getElementById("logout");
const upgradeBtn = document.getElementById("upgradeBtn");

const authSection = document.getElementById("authSection");
const profileSection = document.getElementById("profileSection");

const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const subscriptionStatus = document.getElementById("subscriptionStatus");

const premiumButtons = document.querySelectorAll(".premium-lock");

// Modal Elements
const premiumModal = document.getElementById("premiumModal");
const closeModal = document.getElementById("closeModal");
const goPremium = document.getElementById("goPremium");

// ✅ Load saved account if exists
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("userAccount"));
  if (user) {
    showProfile(user);
  } else {
    showAuth();
  }
});

// ✅ Save Account
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const userData = { name, email, subscription: "Free" };
    localStorage.setItem("userAccount", JSON.stringify(userData));
    showProfile(userData);
  });
}

// ✅ Show Profile
function showProfile(user) {
  authSection.style.display = "none";
  profileSection.style.display = "block";
  displayName.textContent = user.name;
  displayEmail.textContent = user.email;
  subscriptionStatus.textContent = user.subscription;

  // Badge update
  subscriptionStatus.className = "badge " + user.subscription;

  // Premium features lock/unlock
  if (user.subscription === "Premium") {
    premiumButtons.forEach(btn => {
      btn.textContent = "✅ " + btn.dataset.feature;
      btn.classList.remove("locked");
      btn.classList.add("unlocked");
      btn.disabled = false;
      btn.onclick = () => alert("🎉 Accessing: " + btn.dataset.feature);
    });
    upgradeBtn.style.display = "none"; // Hide upgrade button
  } else {
    premiumButtons.forEach(btn => {
      btn.textContent = "🔒 " + btn.dataset.feature;
      btn.classList.remove("unlocked");
      btn.classList.add("locked");
      btn.disabled = false;
      btn.onclick = () => {
        premiumModal.style.display = "flex"; // Show modal
      };
    });
    upgradeBtn.style.display = "inline-block";
  }
}

// ✅ Show Auth
function showAuth() {
  authSection.style.display = "block";
  profileSection.style.display = "none";
}

// ✅ Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userAccount");
    showAuth();
  });
}

// ✅ Upgrade to Premium
if (upgradeBtn) {
  upgradeBtn.addEventListener("click", () => {
    upgradeAccount();
  });
}

// ✅ Modal Actions
if (closeModal) {
  closeModal.onclick = () => (premiumModal.style.display = "none");
}
if (goPremium) {
  goPremium.onclick = () => {
    upgradeAccount();
    premiumModal.style.display = "none";
  };
}

// ✅ Function to upgrade account
function upgradeAccount() {
  let user = JSON.parse(localStorage.getItem("userAccount"));
  if (user) {
    user.subscription = "Premium";
    localStorage.setItem("userAccount", JSON.stringify(user));
    showProfile(user);
    alert("🌟 Congratulations! You are now a Premium Member.");
  }
}