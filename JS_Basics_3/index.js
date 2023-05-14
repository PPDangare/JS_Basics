// In-built Objects And Arrrays =>
// A] In-built objects =>

// 1. Math =>
// console.log(Math.PI);
// console.log(Math.round(1.8));   // etc.

// 2. String =>
// let lastName = 'Babbar' ;                        // this is a primitive type string

// let firstName = new String('Love');              // this is a string object

// let message = "this is my first message";
// console.log(message);

// let words = message.split(' ');                 // space se split hota hai
// console.log(words);

// *****************************************************************************

// template literals => (esase jaisa code me he vise ka vaise likhega (with space/with new line))

// let message = 
// `Hello ${lastName},                             // use of ( `  ` )

// Thanks for the Opportunity

// Regards,
// Babbar`;

// ********************************************************************************

// Date and time =>
// let date = new Date();
// console.log(date);                                  // it displays current date and time

// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);
// let date3 = new Date(1998, 11, 20, 7);
// console.log(date3);

// date3.setFullYear(1947);                            // for changing the year
// date3.setMonth(8);                                  // for changing the month
// console.log(date3);

// console.log(date3.getMonth());                      // for getting month
// console.log(date3.getMilliseconds());

// *************************************************************************************


// *********************************************************************************************************
// ============================================ Arrays ======================================================
// *********************************************************************************************************


// we can write all this code in console also
// let numbers = [1,3,5,7];                            // array creation
// console.log(numbers);

// // ------------------------ Insertion ===>-----------------------------
// // 1. At End => (push)
// numbers.push(9);
// console.log(numbers);

// // 2. At Begin => (unshift)
// numbers.unshift(8);
// console.log(numbers);

// // 3. At Middle => (splice)
// numbers.splice(2, 0, 'a', 'b', 'c');
// console.log(numbers);



// // ------------------------- Searching ===> --------------------------------
// console.log(numbers.indexOf(5));                         // gives index of 5
// console.log(numbers.indexOf(6));                         // gives output = -1 (beacause 6 is not present)

// //we want to check if a number exist in an array =>
// if(numbers.indexOf(4) != -1)
//     console.log("present");                             // but it is not best practice

// console.log(numbers.includes(7));                       // best practice

// console.log(numbers.indexOf(4, 2) );                    // gives -1 beacause after 2nd index there is not 4(element)


// let courses = [                                         // Array = courses
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

//console.log(courses);

// console.log( courses.indexOf( {no:1, naam:'Love'} ) );                         // it will not give index, it gives -1 (beacause it is object not a primitive type)
// console.log( courses.includes( {no:1, naam:'Love'} ) );                        // similarly it will not give true, it will give false



// therefore for objects => we can search by "find()" method (beacause here we cant use "indexof / includes" method) ==>
// function(course) {
//     return course.naam === 'Love';
// }                                                                           // difficult
// console.log(course);                                                       

// let course =  courses.find(course => course.naam === 'love');               // easy ( => above code in one line )
// console.log(course);


// ------------------------------ Removing the ele ==> -----------------------------------
// let numbers = [1,2,3,4,5,6,7];

// //end -->
// numbers.pop();

// //beginning -->
// numbers.shift();

// //middle -->
// numbers.splice(2, 1);                                       // 2nd index se 1 ele. delete hoga

// // console.log(numbers);

// ------------------------- Emptying an Array ==> ------------------------------
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];                                // not a best practice
// numbers.splice(0,numbers.length);            // best practice but little bit difficult
// numbers.length = 0;                          // best practice and easy also (mostly use)

// console.log(numbers);
// console.log(numbers2);

// ------------------------- combining and slicing of array -----------------------------

// 1. combining of array ==>
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);                                   // output => [1,2,3,4,5,6]

// 2. slicing (breaking) of array ==>
// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();                              // isase original array ki copy ban jayegi => output => [10,20,30,40,50,60,70,80]
// //let sliced = marks.slice(2);                           // output => [30,40,50,60,70,80]
// // let sliced = marks.slice(2,6);                        // output => [30,40,50,60]
// console.log(sliced);


// --------------------------- Spread Operator ---------------------------------

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first, ...second];                                // output => [1,2,3,4,5,6]

// let combined = [...first,'a', false, ...second ,'b', true];          // output => [1,2,3,a,false,4,5,6,b,true]
// console.log(combined);

// //copy kaise create karu =>
// let another = [...combined];                                        // ie. another = [1,2,3,4,5,6] 

// ------------------------------- Iterating an array --------------------------------

// let arr = [10,20,30,40,50];
// for-of loop =>
// // for(let value of arr) {
// //     console.log(value);
// // }

// forEach loop =>
// arr.forEach(number => console.log(number));

// ----------------------------- Joining array ------------------------------------
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');                            // you can use "let" keyword instead of "const"
// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// ------------------------------ Sorting of array --------------------------

// let numbers = [50,10,40,20,30];
// numbers.sort();                                             // Ascending order me karata hai
// console.log(numbers);                                       // output => [10,20,30,40,50]

// numbers.reverse();                                          // reverse the array
// console.log(numbers);                                       // output => [50,40,30,20,10]


// ---------------------------- Filtering an array ------------------------------
// let numbers = [1,2,-1,-4];
// let filtered =  numbers.filter(value => value >= 0);
// console.log(filtered);                                       // output => [1,2]

// --------------------------- Mapping of array ------------------------------
// let numbers = [7,8,9,10];
// console.log(numbers);
// let items = numbers.map(value => 'student_no' + value);
// console.log(items);


// --------------------------- chaining ----------------------
// chaning above code =>
// let numbers = [1,2,-6,-9];
// let items = number.filter(value => value >= 0).map(num => {value: num});

// console.log(items);


// --------------------------- sorting -------------------------
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });
// console.log(a);


// ------------------------ Reducing an array --------------------------------

// let arr = [1,2,3,4];
// let total = 0;
// for(let value of arr) 
//     total = total + value;
// console.log(total);                          // output => 10

// we have one other way -> By reducing array =>
let arr = [-1,-2,-3,-4];
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("PRINTING TOTAL SUM:")
console.log(totalSum);