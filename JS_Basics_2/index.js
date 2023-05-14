// console.log('shuru karte hai');

// // Object create
// let rectangle = {
//     length : 1,                      // in console => rectangle.length
//     breadth : 2,                     // in console => rectangle.breadth

//     draw : function(){               // in console => rectangle.draw()
//         console.log('drawing rectangle');
//     },

//     area : function(){               // in console => rectangle.area()
//         console.log('Area of rectangle : ' + this.length*this.breadth);
//     }
// };

// *********************************************************************************

// // Object Creation - How ? ==>
// // 1. Factory Creation
// function createRectangle(len, bre){
//     return rectangle = {
//         length : len,                      // in console => rectangleObj1.length
//         breadth : bre,                     // in console => rectangleObj1.breadth

//         draw(){                            // in console => rectangleObj1.draw()
//             console.log('drawing rectangle');
//         },

//         area(){                            // in console => rectangle.area()
//             console.log('Area of rectangle : ' + this.length*this.breadth);
//         }
//     };
// }

// let rectangleObj1 = createRectangle(4, 5);
// let rectangle2 = createRectangle(6,2);


// // 2. Constructor Function
// // it uses pascal notation -> first word of every word is capital -> NoOfStudents
// // constructor function -> prop/methods -> initialise/define
// function Rectangle(len, bre){
//     this.length = len,
//     this.breadth = bre,

//     this.draw = function(){
//         console.log("drawing rectangle");
//     }
// }

// // object creation using constructor
// let rectangleobject = new Rectangle(4,6);

// // Dynamic nature of object
// rectangleobject.color = "yellow";
// console.log(rectangleobject);

// delete rectangleobject.color;
// console.log(rectangleobject);


// *****************************************************************************

// Types in JS
// 1. primitive types
// let a = 10;
// let b= a;
// a++;
// console.log(a);                 // output => 11
// console.log(b);                 // ouyput => 10

// 2. Reference
// let c = {value : 10};
// let d = c;
// c.value++;
// console.log(c.value);           // output => 11
// console.log(d.value);           // output => 11

// Note => 1. primitive are copied by their value
//         2. references are copied by their address / references

// other example (for function)
// // 1. primitive
// let x=10;
// function inc(z){
//     z++;
// }
// inc(x);
// console.log(x);                 // output => 10 (scope)(for primitive -> copy value)

// // 2. reference
// let y = {value : 10};
// function inc(z){
//     z.value++;
// }
// inc(y);
// console.log(y.value);               // output => 11 (for reference -> copy address)