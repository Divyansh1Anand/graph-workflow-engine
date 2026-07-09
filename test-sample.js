// 1. Normal Function Declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// 2. Function stored in a variable (Function Expression)
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (modern way to store function in variable)
const square = (x) => x * x;

// 3. Class with methods
class Calculator {
  constructor(name) {
    this.name = name;
  }

  // Method inside class (this is actually a function expression under the hood)
  add(a, b) {
    return a + b;
  }

  // Another method
  subtract(a, b) {
    return a - b;
  }

  // Method using function stored in variable
  calculate(operation, a, b) {
    return operation(a, b);
  }
}

// Usage
console.log("=== Normal Function Declaration ===");
console.log(greet("Aether"));

console.log("\n=== Function stored in variable ===");
console.log("Multiply:", multiply(5, 3));
console.log("Square:", square(7));

console.log("\n=== Using Class ===");
const calc = new Calculator("MyCalc");

console.log("Add:", calc.add(10, 5));
console.log("Subtract:", calc.subtract(20, 8));

// Passing function stored in variable into class method
console.log("Calculate Multiply:", calc.calculate(multiply, 6, 4));

// Storing a function declaration inside a variable (after declaration)
const sayHi = greet;   // assigning normal function declaration to variable
console.log("\nFunction assigned to variable:", sayHi("Delulu"));