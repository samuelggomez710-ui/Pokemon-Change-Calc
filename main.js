// Make function to prepend money icons
function renderIcons(containerId, count, iconPath, className) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear old icons
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = iconPath;
    img.className = className;
    container.prepend(img);   // puts each new icon at the front
  }
}

// Make function to append pokemon
function renderPokemon(containerId, count, iconPath, className) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear old icons
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = iconPath;
    img.className = className;
    container.append(img);   // puts each new icon at the front
  }
}

// Make function to append pokemon (redacted)
//function renderPokemon (containerId, iconPath, className){
//  const container = document.getElementById(containerId);
//  container.innerHTML = "";
//  const img = document.createElement("img");
//  img.src = iconPath;
//  img.className = className;
//  container.append(img);
//  img.onerror = () => {
//    console.warn("Missing Pokemon image:", iconPath);
//    img.src = "images/pokemon/default.png";
//  };
//}

//Make functions to get values
function getPrice() {
  // Get price from input field, search through DOM by ID and turn the string into a numnber
  return Number(document.getElementById("price").value);
}
function getCash() {
  return Number(document.getElementById("cash").value);
}
function getChange() {
  // Calculate change using previous functions
  return getCash() - getPrice();
}
  // Run calculate when pressing Enter in either input box
  document.getElementById("price").addEventListener("keydown", function(event) {
    if (event.key === "Return" || event.key === "Enter") {
      displayChange();
    }
  });
  document.getElementById("cash").addEventListener("keydown", function(event) {
    if (event.key === "Return" || event.key === "Enter") {
      displayChange();
    }
  });
// Make function to display change
function displayChange() {
  // Defines change by using previous function
  let change = getChange();
  const price = getPrice();
  const cash = getCash();
  // Set up error messages
  const errorBox = document.getElementById("error-message");
    // Clear previous errors
  errorBox.textContent = ""; 
  errorBox.style.display = "none";
  // Check if inputs are empty
  if (price == "" || cash == "") {
    errorBox.textContent = "Please enter valid numbers for both fields.";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "0.5rem";
    errorBox.style.display = "block";
    return;
  }
  // Check if paid exactly
  if (price === cash) {
    errorBox.textContent = "No change needed, exact cash received!";
    errorBox.style.color = "green";
    errorBox.style.marginTop = "0.5rem";
    errorBox.style.display = "block";
    return;
  }
  // Check for negative numbers
  if (price < 0 || cash < 0) {
    errorBox.textContent = "Price/cash received must be real numbers.";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "0.5rem";
    errorBox.style.display = "block";
    return;
  }
  // Check if cart cannot be paid for
  if (cash < price) {
    errorBox.textContent = "Customer has not provided enough cash.";
    errorBox.style.color = "red";
    errorBox.style.marginTop = "0.5rem";
    errorBox.style.display = "block";
    return;
  }
  

  document.getElementById("total-change-amount").textContent = `$${change.toFixed(2)}`;
  // Update total change
  document.getElementById("total-change-amount").textContent = `$${change.toFixed(2)}`;
  // Reset counts
  document.getElementById("twenties-count").textContent = 0;
  document.getElementById("tens-count").textContent = 0;
  document.getElementById("fives-count").textContent = 0;
  document.getElementById("ones-count").textContent = 0;
  document.getElementById("quarters-count").textContent = 0;
  document.getElementById("dimes-count").textContent = 0;
  document.getElementById("nickels-count").textContent = 0;
  document.getElementById("pennies-count").textContent = 0;

  // Breakdown into bills and coins, work in cents to make easier
  let remaining = Math.round(change * 100);
  // Multiply by 100 and round to avoid floating point issues

  let twenties = Math.floor(remaining / 2000);
  // Round down to the nearest integer then divide by 2000 to get twenties
  remaining %= 2000;
  //for each 2,000 cents in remaining mark 1 twenty

  let tens = Math.floor(remaining / 1000);
  remaining %= 1000;

  let fives = Math.floor(remaining / 500);
  remaining %= 500;

  let ones = Math.floor(remaining / 100);
  remaining %= 100;

  let quarters = Math.floor(remaining / 25);
  remaining %= 25;

  let dimes = Math.floor(remaining / 10);
  remaining %= 10;

  let nickels = Math.floor(remaining / 5);
  remaining %= 5;

  let pennies = remaining;

  const diff  = cash - price; // Get difference
  const diffInt = Math.floor(diff); // Make difference an integer
  
  // Update DOM and the counts for each bill and coin in HTML
  document.getElementById("twenties-count").textContent = twenties;
  document.getElementById("tens-count").textContent = tens;
  document.getElementById("fives-count").textContent = fives;
  document.getElementById("ones-count").textContent = ones;
  document.getElementById("quarters-count").textContent = quarters;
  document.getElementById("dimes-count").textContent = dimes;
  document.getElementById("nickels-count").textContent = nickels;
  document.getElementById("pennies-count").textContent = pennies;

  renderIcons("twenties-icons", twenties, "./Images/Money/20bill.png", "bill-icon");
  renderIcons("tens-icons", tens, "./Images/Money/10bill.png", "bill-icon");
  renderIcons("fives-icons", fives, "./Images/Money/5bill.png", "bill-icon");
  renderIcons("ones-icons", ones, "./Images/Money/1bill.png", "bill-icon");
  renderIcons("quarters-icons", quarters, "./Images/Money/quarter.png", "coin-icon");
  renderIcons("dimes-icons", dimes, "./Images/Money/dime.png", "coin-icon");
  renderIcons("nickels-icons", nickels, "./Images/Money/nickel.png", "coin-icon");
  renderIcons("pennies-icons", pennies, "./Images/Money/penny.png", "coin-icon");
  renderPokemon ("pokemon-icons", 1, `./Images/pokemon/${diffInt}.png`,"pokemon-icon");
}
// "images/Money/penny.png"
//"images/Money/1bill.png
// Connect the button to the function
document.getElementById("calculate-btn").addEventListener("click", displayChange);
