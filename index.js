/****** A. Part 1: Coding Questions ******/

//Q1
const string = "123";
const number = +string + 7;
console.log("Q1 Result:", number);

//Q2
const a = 0;
if (!a) {
  console.log("Q2 Result:", "Invalid");
}

//Q3
console.log("Q3 Result:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

//Q4
const arr = [1, 2, 3, 4, 5];
const result = arr.filter((num, index) => {
  return num % 2 == 0;
});
console.log("Q4 Result:", result);

//Q5
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log("Q5 Answer:", newArr);

//Q6
console.log("Q6 Answer:");
const dayNo = 2;
switch (dayNo) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Wrong Input");
    break;
}

//Q7
const arr3 = ["a", "ab", "abc"];
const result1 = arr3.map((num, index) => {
  for (let i = 0; i < arr3.length; i++) {
    return num.length;
  }
});
console.log("Q7 Answer:", result1);

//Q8
const num = 15;
function calculate() {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Q8 Aswer: Divisible by both");
  }
}
calculate();

//Q9
const n = 5;
const square = (n) => n ** 2;
console.log("Q9 Answer:", square(n));

//Q10
const person = { name: "John", age: 25 };
function getPersonInfo(person) {
  const { name, age } = person;
  return `Q10 Answer: ${name} is ${age} years old`;
}
console.log(getPersonInfo(person));

//Q11
const [n1, n2, n3, n4, n5] = [1, 2, 3, 4, 5];
function sum(n1, n2, n3, n4, n5) {
  return n1 + n2 + n3 + n4 + n5;
}
console.log("Q11 Answer:", sum(n1, n2, n3, n4, n5));

//Q12
function getSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
getSuccess().then((result) => {
  console.log("Q12 Answer:", result);
});

//Q13
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log("Q13 Anwser:", findLargest([1, 3, 7, 2, 4]));

//Q14
function getKeys(obj) {
  return Object.keys(obj);
}
const person1 = {
  name: "John",
  age: 30,
};
console.log("Q14 Anwser:", getKeys(person1));

//Q15
const string1 = "The quick brown fox";
const arr4 = string1.split(" ");
console.log("Q15 Anwser:", arr4);



/****** B. Part 2: Essay Questions ******/

//Q1
// forEach is an array method used to execute a function for each element, while for...of is a loop used to iterate over iterable values. 
// I use forEach for simple iterations and for...of when I need more control, such as using break or continue.

//Q2
// Hoisting is a JavaScript behavior where variable and function declarations are processed before code execution. 
// TDZ is the period when let and const variables cannot be accessed before initialization, and trying to access them causes a ReferenceError.

//Q3
// == compares two values after converting their types if necessary, while === compares both the value and the data type without performing type conversion.

//Q4
// try-catch is used to handle errors in JavaScript. The try block contains the code that may cause an error, while the catch block handles that error. 
// It is important in async operations because it helps handle rejected Promises when using async/await.

//Q5
// Type conversion happens when the developer manually changes a value from one data type to another, 
// while type coercion happens when JavaScript automatically converts a value from one type to another during an operation.