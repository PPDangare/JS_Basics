// console.log('namaste dunia version 2');

// let a=true;
// console.log(a);

// const num=12;
// // num=13;    // it gives an error 
// console.log(num);

// let lastname = 3;
// console.log(lastname);

// lastname=true;
// console.log(lastname);

// *************************************************************************

// // operators
// // arithmatic operator
// console.log(2+3);
// console.log(12/5);

// // assignment operator
// let a=5;
// console.log(++a);
// console.log(a++);
// console.log(a--);

// //comparison operator
// console.log(2 > 3);
// console.log(3 >= 3);
// console.log(3 === 3);

// // ternary operator
// let age = 20;
// let status = (age>=18)? 'Yes vote' : 'No vote';
// console.log(status);

// // bitwise operator
// console.log(2&3);
// console.log(2|3);

// **************************************************************************

// // control statements
// // ef-else statement
// let marks=98;
// if(marks>=90){
//     console.log('A');
// }
// else if(marks>=80){
//     console.log('B');
// }
// else if(marks>=70){
//     console.log('C');
// }
// else if(marks>=60){
//     console.log('D');
// }
// else{
//     console.log('E');
// }

// switch statement
// let num = 2;
// switch(num){
//     case 1:
//         console.log('A');
//         break;
//     case 2:
//         console.log('B');
//         break;
//     case 3:
//         console.log('C');
//         break;
//     default:
//         console.log(D);
// }

// **************************************************************

// loops
// for loop =>
// for(let i=0;i<5;i++){
//     console.log("babber" + i);
// }

// while loop =>
// let i=0;
// while(i<5){
//     console.log("babber" + i);
//     i++;
// }

// do-while loop =>
// let i=0;
// do{
//     console.log("babber" + i);
//     i++;
// }while(i<5);


// for-in and for-of loop =>
// let rectangle = {
//     length : 2,
//     breadth : 4
// };

// for-in loop =>
// for(let key in rectangle){
//     console.log(key);
// }

// for(let key in rectangle){
//     // keys are reflected through kay variable
//     // values are reflected through rectangle[key] 
//     console.log(key, rectangle[key]);
// }

// for-of loop =>
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// ***********************************************************************

// let rectangle = {
//     length : 2,
//     breadth : 4
// };

// // 1)
// if("color" in rectangle){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }

// // 2)
// if("length" in rectangle){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }

// **************************************************************************

// Object Cloning => 1.Iteration  2.Assign  3.Spread
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value : 100};

// // 1. Iteration =>
// let dest = {};              // empty object

// for(let key in src){
//     dest[key] = src[key];
// }

// // 2. Assign =>
// let dest = Object.assign({},src);
// console.log(dest);
// let dest2 = Object.assign({},src,src2);                          // multiple object clone / copy
// console.log(dest2);

// // 3. Spread =>
// let dest = {... src};
// console.log(dest);