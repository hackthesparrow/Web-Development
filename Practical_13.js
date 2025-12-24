
function greet() {
    console.log("Hello Harshh!");
}
greet();
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));


function getGrade(marks) {
    if (marks >= 90) return "A+";
    else if (marks >= 75) return "A";
    else return "B / C";
}
console.log("Grade:", getGrade(82));


const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(5, 4));




console.log("\n=== var, let, const Scope  ===");


var a = 10;
if (true) {
    var a = 20;
    console.log("Inside block (var):", a);
}
console.log("Outside block (var):", a);


let b = 30;
if (true) {
    let b = 40;
    console.log("Inside block (let):", b);
}
console.log("Outside block (let):", b);


const PI = 3.14;

console.log("Constant PI:", PI);



console.log("\nBlock Scope Example:");

if (true) {
    var city = "Delhi";
    let state = "UP";
    const country = "India";

    console.log("Inside block:", city, state, country);
}

console.log("Outside block (var city):", city);





function scopeTest() {
    var x = 1;
    let y = 2;
    const z = 3;

    console.log("\nInside function:", x, y, z);
}
scopeTest();


