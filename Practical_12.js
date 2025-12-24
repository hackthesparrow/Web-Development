
//   CONDITIONAL STATEMENTS

let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

let marks = 78;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Grade: B/C");
}

//   SWITCH CASE

let day = 2;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Weekend");
}

//   FOR LOOP

console.log("\nFor Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//   WHILE LOOP

console.log("\nWhile Loop:");
let x = 1;
while (x <= 5) {
    console.log("Count: " + x);
    x++;
}

//   DO...WHILE LOOP

console.log("\nDo While Loop:");
let y = 1;
do {
    console.log("Value: " + y);
    y++;
} while (y <= 5);

//   ARRAY LOOPING

console.log("\nArray Loop:");
let fruits = ["Apple", "Banana", "Mango"];
for (let item of fruits) {
    console.log(item);
}

//   FUNCTION + LOOP

function printTable(num) {
    console.log(`\nTable of ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

printTable(5);
