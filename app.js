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
//* <-- Coin wrapper with parrallel arrays -->
// let coinType = ["Pennies", "Nickels", "Dimes", "Quarters"];
// let coinValue = [.01, .05, .10, .25];
// let coinAmount = [300, 300, 300, 300];
// let wrapperPerCoin = [50, 40, 50, 40];

// let allCoinValue = 0;

// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// });

// for (i = 0; i < coinAmount.length; i++) {
//     let totalValue = coinValue[i] * coinAmount[i];
//     let wrappersNeeded = coinAmount[i] / wrapperPerCoin[i];

//     allCoinValue += coinValue[i] * coinAmount[i];

//     let leftovers = coinAmount[i] % wrapperPerCoin[i];
//     console.log(coinType[i] + "Wrappers Needed: " + wrappersNeeded);
//     console.log("Leftover Coins: " + leftovers);
// };

// console.log(formatter.format(allCoinValue));

//? Give me the total amount of each coin;
// ex. dime = 234;
//? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

let challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'];

//* Declaring variables to add the challengData array string values to as 1. (+1)
let totalPennyAmount = 0;
let totalNickelAmount = 0;
let totalDimeAmount = 0;
let totalQuarterAmount = 0;
//* a for loop to increment through the array
//* increments the total coin amounts by 1 if met conditions
for (i = 0; i < challengeData.length; i++) {
      if (challengeData[i] == 'penny') {
        totalPennyAmount++
    } else if (challengeData[i] == 'nickel') {
        totalNickelAmount++
    } else if (challengeData[i] == 'dime') {
        totalDimeAmount++
    } else if (challengeData[i] == 'quarter') {
        totalQuarterAmount++
    } else {
        console.log("What kind of coin is this?")
    };
}
console.log("The total amount of pennies in this array is: " + totalPennyAmount);
console.log("The total amount of nickels in this array is: " + totalNickelAmount);
console.log("The total amount of dimes in this array is: " + totalDimeAmount);
console.log("The total amount of pennies in this array is: " + totalQuarterAmount);

//* Converting total coin values into USD amounts
let pennyValue = .01;
let nickelValue = .05;
let dimeValue = .10;
let quarterValue = .25;

//* Calculating the amount of dollars in coins
let penniesDollarValue = pennyValue * totalPennyAmount;
let nickelsDollarValue = nickelValue * totalNickelAmount;
let dimesDollarValue = dimeValue * totalDimeAmount;
let quarterDollarsValue = quarterValue * totalQuarterAmount;

//* Currency Converter
const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
 });

//* Displaying the total amount results
console.log("The total amount of pennies in dollars is: " + formatter.format(penniesDollarValue));
console.log("The total amount of nickels in dollars is: " + formatter.format(nickelsDollarValue));
console.log("The total amount of dimes in dollars is: " + formatter.format(dimesDollarValue));
console.log("The total amount of quarters in dollars is: " + formatter.format(quarterDollarsValue));

let totalDollarAmount = penniesDollarValue + nickelsDollarValue + dimesDollarValue + quarterDollarsValue;

//* Total amount of all coins combined
console.log("The total amount of all coins in dollars: $" + totalDollarAmount.toFixed(2));