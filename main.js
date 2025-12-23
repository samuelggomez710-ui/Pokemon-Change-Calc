// Declare the 151 pokemon
const pokemon151 = [
  { number: 1, name: "bulbasaur" },
  { number: 2, name: "ivysaur" },
  { number: 3, name: "venusaur" },
  { number: 4, name: "charmander" },
  { number: 5, name: "charmeleon" },
  { number: 6, name: "charizard" },
  { number: 7, name: "squirtle" },
  { number: 8, name: "wartortle" },
  { number: 9, name: "blastoise" },
  { number: 10, name: "caterpie" },
  { number: 11, name: "metapod" },
  { number: 12, name: "butterfree" },
  { number: 13, name: "weedle" },
  { number: 14, name: "kakuna" },
  { number: 15, name: "beedrill" },
  { number: 16, name: "pidgey" },
  { number: 17, name: "pidgeotto" },
  { number: 18, name: "pidgeot" },
  { number: 19, name: "rattata" },
  { number: 20, name: "raticate" },
  { number: 21, name: "spearow" },
  { number: 22, name: "fearow" },
  { number: 23, name: "ekans" },
  { number: 24, name: "arbok" },
  { number: 25, name: "pikachu" },
  { number: 26, name: "raichu" },
  { number: 27, name: "sandshrew" },
  { number: 28, name: "sandslash" },
  { number: 29, name: "nidoran♀" },
  { number: 30, name: "nidorina" },
  { number: 31, name: "nidoqueen" },
  { number: 32, name: "nidoran♂" },
  { number: 33, name: "nidorino" },
  { number: 34, name: "nidoking" },
  { number: 35, name: "clefairy" },
  { number: 36, name: "clefable" },
  { number: 37, name: "vulpix" },
  { number: 38, name: "ninetales" },
  { number: 39, name: "jigglypuff" },
  { number: 40, name: "wigglytuff" },
  { number: 41, name: "zubat" },
  { number: 42, name: "golbat" },
  { number: 43, name: "oddish" },
  { number: 44, name: "gloom" },
  { number: 45, name: "vileplume" },
  { number: 46, name: "paras" },
  { number: 47, name: "parasect" },
  { number: 48, name: "venonat" },
  { number: 49, name: "venomoth" },
  { number: 50, name: "diglett" },
  { number: 51, name: "dugtrio" },
  { number: 52, name: "meowth" },
  { number: 53, name: "persian" },
  { number: 54, name: "psyduck" },
  { number: 55, name: "golduck" },
  { number: 56, name: "mankey" },
  { number: 57, name: "primeape" },
  { number: 58, name: "growlithe" },
  { number: 59, name: "arcanine" },
  { number: 60, name: "poliwag" },
  { number: 61, name: "poliwhirl" },
  { number: 62, name: "poliwrath" },
  { number: 63, name: "abra" },
  { number: 64, name: "kadabra" },
  { number: 65, name: "alakazam" },
  { number: 66, name: "machop" },
  { number: 67, name: "machoke" },
  { number: 68, name: "machamp" },
  { number: 69, name: "bellsprout" },
  { number: 70, name: "weepinbell" },
  { number: 71, name: "victreebel" },
  { number: 72, name: "tentacool" },
  { number: 73, name: "tentacruel" },
  { number: 74, name: "geodude" },
  { number: 75, name: "graveler" },
  { number: 76, name: "golem" },
  { number: 77, name: "ponyta" },
  { number: 78, name: "rapidash" },
  { number: 79, name: "slowpoke" },
  { number: 80, name: "slowbro" },
  { number: 81, name: "magnemite" },
  { number: 82, name: "magneton" },
  { number: 83, name: "farfetch’d" },
  { number: 84, name: "doduo" },
  { number: 85, name: "dodrio" },
  { number: 86, name: "seel" },
  { number: 87, name: "dewgong" },
  { number: 88, name: "grimer" },
  { number: 89, name: "muk" },
  { number: 90, name: "shellder" },
  { number: 91, name: "cloyster" },
  { number: 92, name: "gastly" },
  { number: 93, name: "haunter" },
  { number: 94, name: "gengar" },
  { number: 95, name: "onix" },
  { number: 96, name: "drowzee" },
  { number: 97, name: "hypno" },
  { number: 98, name: "krabby" },
  { number: 99, name: "kingler" },
  { number: 100, name: "voltorb" },
  { number: 101, name: "electrode" },
  { number: 102, name: "exeggcute" },
  { number: 103, name: "exeggutor" },
  { number: 104, name: "cubone" },
  { number: 105, name: "marowak" },
  { number: 106, name: "hitmonlee" },
  { number: 107, name: "hitmonchan" },
  { number: 108, name: "lickitung" },
  { number: 109, name: "koffing" },
  { number: 110, name: "weezing" },
  { number: 111, name: "rhyhorn" },
  { number: 112, name: "rhydon" },
  { number: 113, name: "chansey" },
  { number: 114, name: "tangela" },
  { number: 115, name: "kangaskhan" },
  { number: 116, name: "horsea" },
  { number: 117, name: "seadra" },
  { number: 118, name: "goldeen" },
  { number: 119, name: "seaking" },
  { number: 120, name: "staryu" },
  { number: 121, name: "starmie" },
  { number: 122, name: "mr. mime" },
  { number: 123, name: "scyther" },
  { number: 124, name: "jynx" },
  { number: 125, name: "electabuzz" },
  { number: 126, name: "magmar" },
  { number: 127, name: "pinsir" },
  { number: 128, name: "tauros" },
  { number: 129, name: "magikarp" },
  { number: 130, name: "gyarados" },
  { number: 131, name: "lapras" },
  { number: 132, name: "ditto" },
  { number: 133, name: "eevee" },
  { number: 134, name: "vaporeon" },
  { number: 135, name: "jolteon" },
  { number: 136, name: "flareon" },
  { number: 137, name: "porygon" },
  { number: 138, name: "omanyte" },
  { number: 139, name: "omastar" },
  { number: 140, name: "kabuto" },
  { number: 141, name: "kabutops" },
  { number: 142, name: "aerodactyl" },
  { number: 143, name: "snorlax" },
  { number: 144, name: "articuno" },
  { number: 145, name: "zapdos" },
  { number: 146, name: "moltres" },
  { number: 147, name: "dratini" },
  { number: 148, name: "dragonair" },
  { number: 149, name: "dragonite" },
  { number: 150, name: "mewtwo" },
  { number: 151, name: "mew" }
];
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

// Connect the button to the function
document.getElementById("calculate-btn").addEventListener("click", displayChange);

// Use for pokedex entry: https://pokemondb.net/pokedex/eevee
