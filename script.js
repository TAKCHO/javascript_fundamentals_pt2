'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive");


// // const interface = 'Audio';  -  wont work
// // const private = 534;   - wont work


// --

// function logger() {
//     console.log("My name is Tako ");
// }

// // calling / running / invoking function

// logger();
// logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23')

// ---

/* Function Declaration */

// function calcAgel(birthyear) {
//     const age = 2022 - birthyear;
//     return age;
// }
// const age1 = calcAgel(1997);

// console.log(age1);


// /* Function expression */

// const calcAge2 = function (birthyear) {
//     return 2022 - birthyear;
// }

// const age2 = calcAge2(1997);

// console.log(age1, age2);


/* ---  Arrow Function-- */


/* const calcAge2 = function (birthyear) {
    return 2022 - birthyear;
}

// Arrow Function
const calcAge3 = birthyear => 2022 - birthyear;
const age3 = calcAge3(1997)
console.log(age3);


const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2022 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years;`
}


console.log(yearsUntilRetirement(1996, "John"));
console.log(yearsUntilRetirement(1994, "Sam")); */


// ------

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} piceces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

/* Reviewing Functions */

/* const calcAge = function (birthyear) {
    return 2022 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


}

console.log(yearsUntilRetirement(1997, "tako"));
console.log(yearsUntilRetirement(1950, "tako")); */

/* Challange */

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ( ${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ( ${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No teams wins`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 144);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); */

/* arrays */
/* const friend1 = "Michael";
const freidn2 = "George";
const friend3 = "John";

const friends = ["Michael", "George", "John"]
console.log(friends);

const y = new Array(1991, 1984, 2007, 2022);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "tako"
const tako = [firstName, "Giorgobiani", 2022 - 1997, "student", friends];
console.log(tako);


// Exercise
const calcAge = function (birthyear) {
    return 2022 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages); */



/* // arrays methods

const friends = ["Michael", "George", "John"]

// Add elements
const newLenght = friends.push("Bob");
console.log(friends);
console.log(newLenght);

friends.unshift("Bob");
console.log(friends);

// Remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("George"));
console.log(friends.indexOf("Tako"));


friends.push(23);
console.log(friends.includes("George"));
console.log(friends.includes("Tako"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}

 */

/* Challenge 2 */

/* const bill = 100;
const calcTip = bill * 0.15;
if (bill >= 50 && bill <= 300) {
    console.log(`The tip is ${calcTip}`);
} else {
    console.log(`The tip is 20 % and is ${bill * 0.2}`);
}
 */
// another way to do it
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const newBill = [125, 555, 44];
const tips = [calcTip(newBill[0]), calcTip(newBill[1]), calcTip(newBill[2])];

const totals = [newBill[0] + tips[0], newBill[1] + tips[1], newBill[2] + tips[2]];

console.log(newBill, tips);