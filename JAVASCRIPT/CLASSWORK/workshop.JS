//WORLSHOP SESSION BY AS SINGH SIR

// const arr=[1,2,34,5,6,"abc",undefined,null,false];
// const arr2 = new Array(5);
// console.log(arr2);
//1.merging two arrays in js using for loop.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [];
// for (let i = 0; i < array1.length; i++) {
//   mergedArray.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//   mergedArray.push(array2[i]);
// }

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//2.merging two arrays in js using concat.
// const start=[1,2,3,4,5];
// const end=[7,8,9];
// const newArray=start.concat(end);
// console.log(newArray);

//console.log(arr2.length);
//console.log(arr2[0]);


//finding arrays index in js uisng for loop basic code
// const myArray = ["apple", "banana", "orange", "grape"];
// const searchValue = "orange";
// let foundIndex = -1;

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === searchValue) {
//     foundIndex = i; 
//     break;
//   }
// }

// if (foundIndex !== -1) {
//   console.log(The value "${searchValue}" is found at index: ${foundIndex});
// } else {
//   console.log(The value "${searchValue}" was not found in the array.);
// }


//finding the element of arrays in js:-
//push,pop,shift,unshift in java...
// let arr = [1, 2, 3];
// arr.unshift(0, -1); 

// let arr = [1, 2, 3];
// let firstElement = arr.shift(); 

// let arr = [1, 2, 3];
// let lastElement = arr.pop(); 

// let arr = [1, 2, 3];
// arr.push(4, 5); 

// console.log(arr);

// Arrow function to add two numbers
// const addNumbers = (num1, num2) => num1 + num2;
// const calculateAndDisplaySum = (a, b) => {const sum = addNumbers(a, b);
//   console.log(sum is: ${sum});
// };
// calculateAndDisplaySum(5, 10); 

//arrow function for the sorted arrays.



//using map in js:
// const start=[1,2,3,4,5,6];
// const double=start.map((n)=>n*2);
// const double=start.map(function(value){
//     return value*2;
// const double=start.map(function(value){
//     return value%2==0;
//checking even and odd
// const double = start.filter(n => n % 2 === 0).map(n => n * 2);
// const double = start.filter(n => n % 2 === 0);
// console.log(double);
// ----------------------------//


//FIRST EVEN:
// const start=[1,2,3,4,5,6];
// const firstEven=start.find((num)=>num%2==0);
// console.log(firstEven);


//FUNCTION CALLING THE ANOTHER FUNCTION.
// function calc(calculate,a,b){
//     console.log(calculate(a,b));
// }

// function add(a,b){
//     return a+b;
// }
// function mul(a,b){
//     return a*b;
// }

// calc(add,4,5);
// calc(mul,4,5);


///////----------------------/////////////
// const arr=[1,2,34,5,6];
// const isEven=(num)=>{
//     return num%2==0;
// };
// const firstEven=arr.find(isEven);
// console.log(firstEven);



//---------------------//
// const arr=[1,2,34,5,6];
// const isEven=(num)=>{
//     return num%2==0;
// };
// const fisrtEven=arr.find(isEven);
// for(let i=0;i<fisrtEven.length;i++){
//     if(check(fisrtEven[i])){
//         return arr[i];
//     }
// }
// const evenArray=arr.filter(isEven);
// console.log(evenArray);

//---------------------------------------------------------/////////////////////////
//what is map?
//map is a higher-order function in JavaScript that allows you to transform each,
//  element of an array by applying a specified function to each element.
//  It creates a new array with the results of calling the provided function
//  on every element in the original array.
// Example of using map:
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); 
// Output: [1, 4, 9, 16, 25]
// In this example, the map function takes each number from the numbers array,
// squares it, and returns a new array squaredNumbers containing the squared values.


////////---------------------------------------------------------------------//////////


//make an array of size 10,return arrray of only prime numbers.
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const isPrime=(num)=>{
//     if(num<=1) return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0) return false;
//     }
//     return true;
// };
// const primeArr=arr.filter(isPrime);
// console.log(primeArr);


console.log(listItem);
//by id
// const listItem=document.getElementsByClassName("title");
//by class
// const items = document.getElementsByClassName("list-Item");
//by tag name
// const paras = document.getElementsByTagName("p");
//by using query selector.
// const heading = document.querySelector("h1"); // first match
// const allParas = document.querySelectorAll("p"); // all matches
