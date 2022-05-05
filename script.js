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


const calcAge2 = function (birthyear) {
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
console.log(yearsUntilRetirement(1994, "Sam"));