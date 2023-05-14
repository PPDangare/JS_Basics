// ============================ Functions =====================================

// //function call or invoke
// run();

// //function declaration
// function run() {
//     console.log('running');
// }


// ------------------------ Function Assignment ==> -----------------------------
// // 1. Named function assignment =>
// let stand = function walk() {
//     console.log('walking');
// };

// stand();

// let jump = stand;
// jump();

// // 2. Anonymous function assignment =>
// let stand2 = function() {
//     console.log('walking');
// };

// stand2();
// --------------------------------------------------------------------------

// let x = 1;
// x = 'a';

// console.log(x);
// --------------------------------------------------------------------------

// Arguments => it is an object in JS engine (it stores the all arguments)
// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// let ans = sum(1,2,2,3);
// console.log(ans);                                    // output => 8 (1+2+2+3)

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,3,4,5));


// ------------------------ Rest Operator (...) =>------------------------------

// function sum(...args) {                              // Sare aruments "args" Array me store honge
//     console.log(args);
// }

// sum(1,2,3,4,5,6);                                    // output => [1,2,3,4,5,6]

// function sum(num, value, ...args) {                  // first arg. "num" me aur second arg. "value" me store hoga baki ke sare rest arguments "args" Array me store honge
//     console.log(args);
// }

// sum(1,2,3,4,5,6);                                    // output => [3,4,5,6]  ("1" "num" me aur "2" "value me store hoga")


// ------------------------- Default Parameters => ----------------------------------
// function interest(p,r=6,y=9) {
//     return p*r*y/100;
// }

//console.log(interest(1000));                                  // output => 540 (1000*6*9/100)
//console.log(interest(1000,10));                               // output => 9000 (1000*10*9/100)
//console.log(interest(1000,undefined, 8));                     // output => 480 (1000*6*8/100)


// --------------------------- GETTER SETTER => ----------------------------------

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
// };
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());                                // output => Love Bubber
// But, issue -> this method is read only ==> therefore we use "getter-Setter" =>

// getter -> access properties
// setter -> change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);
// console.log(person.fullName);                                    // output => Love Bubber

// person.fullName = 'Rahul kumar';
// console.log(person.fullName);                                    // output => Rahul Kumar


// ----------------------- Try & Catch Block ----------------------------------


// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);                                // output => alert me => You have not sent a string (written in setter)



// --------------------------- Scope ----------------------------

// {
//     let a = 5;
// }
// console.log(a);                      // output => error

// {
//     var a = 5;
// }
// console.log(a);                      // output => 5 ("var" keyword ka scope function ke andar hi hota hai agar function menahi hai to puri file uska scope hota hai)

// function walk() {
//     var a = 5;
// }
// console.log(a);                      // output => error (beacause "var" keyword ka scope function ke andar hi hota hai)

// for(let i = 0; i<10; i++) {

// }
// console.log(i);                      // output => error (beacause yaha let keyword use kiya hai var hota to output = 10)

// if(true) {
//     var a = 5;
// }
// console.log(a);                      // output => 5


// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }                                    // (kuch bhi error nahi daga beacause "const" ka scope function ke andar hota hai)
 
