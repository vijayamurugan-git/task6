
const items = [
  { name: "Chips", price: 20 },
  { name: "Chocolate", price: 35 },
  { name: "Cold Drink", price: 40 },
  { name: "Biscuits", price: 15 },
  { name: "Juice", price: 50 }
]
function displayMenu() {
  console.log("===== VENDING MACHINE MENU =====");
  for (let i = 0; i < items.length; i++) {
    console.log((i + 1) + ". " + items[i].name + " - Rs." + items[i].price);
  }
  console.log("================================");
}

function isValidItem(itemNumber) {
  return Number.isInteger(itemNumber) && itemNumber >= 1 && itemNumber <= items.length;
}
function isValidAmount(amount) {
  return !isNaN(amount) && isFinite(amount) && amount >= 0;
}

function askNumber(message) {
  const input = prompt(message);
  if (input === null || input.trim() === "") {
    return NaN;
  }
  return Number(input);
}

function calculateChange(amount, price) {
  if (amount < price) {
    return -1;
  }
  return amount - price;
}
function dispenseItem(itemName) {
  console.log("Preparing your " + itemName + "...");
  for (let i = 3; i >= 1; i--) {
    console.log(i + "...");
  }
  console.log("Your " + itemName + " is ready! Please collect it.");
  alert("Your " + itemName + " is ready!");
}

function printPattern(itemNumber) {
  console.log("Pattern for item " + itemNumber + ":");
  for (let row = 1; row <= itemNumber; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += col + " ";
    }
    console.log(line.trim());
  }
}
function processPurchase() {
  displayMenu();

  const itemNumber = askNumber("Enter the item number (1-" + items.length + "):");
  if (!isValidItem(itemNumber)) {
    alert("Invalid item number. Please choose a number from 1 to " + items.length + ".");
    return false;
  }

  const selected = items[itemNumber - 1];
  const amount = askNumber(selected.name + " costs Rs." + selected.price + ". Enter the amount you have:");
  if (!isValidAmount(amount)) {
    alert("Invalid amount. Please enter a number that is 0 or more.");
    return false;
  }

  const change = calculateChange(amount, selected.price);

  if (change === -1) {
    const shortBy = selected.price - amount;
    alert("Insufficient balance. You need Rs." + shortBy + " more for " + selected.name + ".");
    return false;
  }

  if (change === 0) {
    alert("You selected " + selected.name + ". Exact amount paid, so no change to return.");
  } else {
    alert("You selected " + selected.name + ". Change returned: Rs." + change);
  }

  dispenseItem(selected.name);
  printPattern(itemNumber);
  return true;
}
function startVendingMachine() {
  alert("Welcome to the Vending Machine!");
  let again = true;
  while (again) {
    processPurchase();
    again = confirm("Would you like to make another purchase?");
  }
  console.log("Thank you for visiting. Goodbye!");
  alert("Thank you for visiting. Goodbye!");
}

startVendingMachine();