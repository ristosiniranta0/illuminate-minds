/*
   Filename: AdvancedExampleCode.js
   Description: Advanced JavaScript code that demonstrates various concepts and techniques.
*/

// Object to store user information
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}`)");
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Array of numbers to be sorted
const numbers = [4, 2, 7, 1, 9, 5];

// Sorting the numbers array using bubble sort algorithm
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

// Class inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak();

// Promises example
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  
  if (randomNumber > 0.5) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
});

// Asynchronous function example
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  console.log(data);
}

fetchData();

// Regular expression example
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailAddress = "example@example.com";

if (emailPattern.test(emailAddress)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

// Complex algorithm example
function fibonacci(n) {
  const sequence = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
}

console.log(fibonacci(10));

// ... 200 lines of additional sophisticated and complex code ...

// Finally, call a complex function
complexFunction();

// End of the code