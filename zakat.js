document.getElementById("zakatForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let wealth = parseFloat(document.getElementById("wealth").value) || 0;
  let liabilities = parseFloat(document.getElementById("liabilities").value) || 0;
  let currency = document.getElementById("currency").value;
  let nisabType = document.getElementById("nisabType").value;

  let netWealth = wealth - liabilities;

  // Nisab Values (approx in currency) → You can update with live API later
  let nisabGold = 85 * 6000;   // 85g gold * ₹6000 per gram
  let nisabSilver = 595 * 70;  // 595g silver * ₹70 per gram

  let nisab = nisabType === "gold" ? nisabGold : nisabSilver;

  let resultBox = document.getElementById("result");

  if (netWealth >= nisab) {
    let zakat = netWealth * 0.025;
    resultBox.innerHTML = `✅ Your Zakat: <strong>${currency} ${zakat.toFixed(2)}</strong> (2.5% of your net wealth)`;
    resultBox.style.color = "green";
  } else {
    resultBox.innerHTML = `ℹ Your wealth is below Nisab. Zakat is not obligatory.`;
    resultBox.style.color = "red";
  }
});