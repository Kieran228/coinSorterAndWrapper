/*
//* Declared variables to store how many coins each type of coin is holding (300)
let totalPennyAmount = 300;
let totalNickelAmount = 300;
let totalDimeAmount = 300;
let totalQuarterAmount = 300;

//todo Calculate the total number of Coins
//* declared a variable equal to the total amount of coins divided by how many of each coin that goes into a single dollar.
let penniesAmount = totalPennyAmount / 100;
let nickelAmount = totalNickelAmount / 20;
let dimeAmount = totalDimeAmount / 10;
let quarterAmount = totalQuarterAmount / 4;

console.log(quarterAmount);

let total = penniesAmount + nickelAmount + dimeAmount + quarterAmount;
console.log(total);

let pennyWrapper = totalPennyAmount / 50;
let nickelWrapper = totalNickelAmount / 40;
let dimesWrapper = totalDimeAmount / 50;
let quartersWrapper = totalQuarterAmount / 40;

let leftoverPennies = totalPennyAmount % pennyWrapper;
let leftoverNickels = totalNickelAmount % nickelWrapper;
let leftoverDimes = totalDimeAmount % dimesWrapper;
let leftoverQuarters = totalQuarterAmount % quartersWrapper;

console.log(`Wrappers needed for Pennies: ${pennyWrapper}`);
console.log("Wrappers needed for Nickels:" + " " + nickelWrapper);
console.log("Wrappers needed for Dimes:" + " " + dimesWrapper);
console.log("Wrappers needed for Quarters:" + " " + quartersWrapper);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

console.log("Total amount of coins in dollars: " + " " + formatter.format(total))
*/

let coinType = ["Pennies", "Nickels", "Dimes", "Quarters"];
let coinValue = [.01, .05, .10, .25];
let coinAmount = [300, 300, 300, 300];
let wrapperPerCoin = [50, 40, 50, 40];

let allCoinValue = 0;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

for (i = 0; i < coinAmount.length; i++) {
    let totalValue = coinValue[i] * coinAmount[i];
    let wrappersNeeded = coinAmount[i] / wrapperPerCoin[i];

    allCoinValue += coinValue[i] * coinAmount[i];

    let leftovers = coinAmount[i] % wrapperPerCoin[i];
    console.log("Wrappers Needed: " + wrappersNeeded);
};

console.log(formatter.format(allCoinValue));