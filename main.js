// Declare the 151 pokemon
const pokemon = {
  1: "bulbasaur",
  2: "ivysaur",
  3: "venusaur",
  4: "charmander",
  5: "charmeleon",
  6: "charizard",
  7: "squirtle",
  8: "wartortle",
  9: "blastoise",
  10: "caterpie",
  11: "metapod",
  12: "butterfree",
  13: "weedle",
  14: "kakuna",
  15: "beedrill",
  16: "pidgey",
  17: "pidgeotto",
  18: "pidgeot",
  19: "rattata",
  20: "raticate",
  21: "spearow",
  22: "fearow",
  23: "ekans",
  24: "arbok",
  25: "pikachu",
  26: "raichu",
  27: "sandshrew",
  28: "sandslash",
  29: "nidoran♀",
  30: "nidorina",
  31: "nidoqueen",
  32: "nidoran♂",
  33: "nidorino",
  34: "nidoking",
  35: "clefairy",
  36: "clefable",
  37: "vulpix",
  38: "ninetales",
  39: "jigglypuff",
  40: "wigglytuff",
  41: "zubat",
  42: "golbat",
  43: "oddish",
  44: "gloom",
  45: "vileplume",
  46: "paras",
  47: "parasect",
  48: "venonat",
  49: "venomoth",
  50: "diglett",
  51: "dugtrio",
  52: "meowth",
  53: "persian",
  54: "psyduck",
  55: "golduck",
  56: "mankey",
  57: "primeape",
  58: "growlithe",
  59: "arcanine",
  60: "poliwag",
  61: "poliwhirl",
  62: "poliwrath",
  63: "abra",
  64: "kadabra",
  65: "alakazam",
  66: "machop",
  67: "machoke",
  68: "machamp",
  69: "bellsprout",
  70: "weepinbell",
  71: "victreebel",
  72: "tentacool",
  73: "tentacruel",
  74: "geodude",
  75: "graveler",
  76: "golem",
  77: "ponyta",
  78: "rapidash",
  79: "slowpoke",
  80: "slowbro",
  81: "magnemite",
  82: "magneton",
  83: "farfetchd",
  84: "doduo",
  85: "dodrio",
  86: "seel",
  87: "dewgong",
  88: "grimer",
  89: "muk",
  90: "shellder",
  91: "cloyster",
  92: "gastly",
  93: "haunter",
  94: "gengar",
  95: "onix",
  96: "drowzee",
  97: "hypno",
  98: "krabby",
  99: "kingler",
  100: "voltorb",
  101: "electrode",
  102: "exeggcute",
  103: "exeggutor",
  104: "cubone",
  105: "marowak",
  106: "hitmonlee",
  107: "hitmonchan",
  108: "lickitung",
  109: "koffing",
  110: "weezing",
  111: "rhyhorn",
  112: "rhydon",
  113: "chansey",
  114: "tangela",
  115: "kangaskhan",
  116: "horsea",
  117: "seadra",
  118: "goldeen",
  119: "seaking",
  120: "staryu",
  121: "starmie",
  122: "mr. mime",
  123: "scyther",
  124: "jynx",
  125: "electabuzz",
  126: "magmar",
  127: "pinsir",
  128: "tauros",
  129: "magikarp",
  130: "gyarados",
  131: "lapras",
  132: "ditto",
  133: "eevee",
  134: "vaporeon",
  135: "jolteon",
  136: "flareon",
  137: "porygon",
  138: "omanyte",
  139: "omastar",
  140: "kabuto",
  141: "kabutops",
  142: "aerodactyl",
  143: "snorlax",
  144: "articuno",
  145: "zapdos",
  146: "moltres",
  147: "dratini",
  148: "dragonair",
  149: "dragonite",
  150: "mewtwo",
  151: "mew"
};

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
