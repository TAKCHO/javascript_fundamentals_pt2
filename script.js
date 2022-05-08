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
/* const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const newBill = [125, 555, 44];
const tips = [calcTip(newBill[0]), calcTip(newBill[1]), calcTip(newBill[2])];

const totals = [newBill[0] + tips[0], newBill[1] + tips[1], newBill[2] + tips[2]];

console.log(newBill, tips); */


// introduction to objects

// const jonasArray = [
//     "Jonas",
//     "Giorgo",
//     2022 - 1997,
//     "teacher",
//     ["Michael", "Peter", "Steven"]
// ];
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Giorgo",
    age: 2022 - 1997,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);


const interestedIN = prompt("What do you want to know about Jonas? Choose between firstNAme, lastName, age, job and friends");

if (jonas[interestedIN]) {
    console.log(jonas[interestedIN]);
} else {
    console.log("Wronf request!,Choose between firstNAme, lastName, age, job and friends")
}

jonas.location = "Georgia";
jonas["twitter"] = "@tako"
console.log(jonas);

// Challenge

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`); */


/* object methods  */

/* const jonas = {
    firstName: "Jonas",
    lastName: "Giorgo",
    birthyear: 1997,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthyear) {
    //     return 2022 - birthyear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthyear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthyear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he
        has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas["calcAge"](1997));

/* Challenge */
// "jonas is a 46 year old teacher, and he has a friver's license"

// console.log(jonas.getSummary());
//


// Coding Challenge 3

/* const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than
${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than
${mark.fullName}'s BMI (${mark.bmi})`);
} */

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");


// for loop keeps running while condition is TRUE
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonas = [
    "Jonas",
    "Giorgo",
    2022 - 1997,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);


    // filling types array
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2010];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break
//  only strings
console.log('--- ONLY STRING ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;

    console.log(jonas[i], typeof jonas[i]);
}


// break with numbers
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;

    console.log(jonas[i], typeof jonas[i]);
} */

// FOR LOOP

// const jonas = [
//     "Jonas",
//     "Giorgo",
//     2022 - 1997,
//     "teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// // 0, 1, ...., 4
// // 4, 3, ...., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }


// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------------Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// }

/* While loop */


/* For loop */
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} */


/* While loop */
/* let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
} */

/* Challenge 4 */


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage[2, 3, 6]);
console.log(calcAverage(totals));