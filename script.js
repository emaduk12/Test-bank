// Simulated user data — change this when you want to update
const user = {
  name: "Ali Hassan",
  balance: 100.00
};

// Display on page
document.getElementById("userName").textContent = user.name;
document.getElementById("userBalance").textContent = user.balance.toFixed(2);
