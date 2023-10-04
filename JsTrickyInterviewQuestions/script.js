// Question -1
// (function () {
//   var a = b = 3
// })();
// console.log(typeof a);
// console.log(typeof b);
/*Output:
undefined
number
(But If we use strict mode answer is reference error: b is not defined)*/

//Question -2
// function foo() {
//     return {
//         name:'sanju'
//     }
// }
// console.log(foo());
// /* Output: {name:'sanju'} */
// function foo2() {
//     return
//     {
//         name:'sanju'
//     }
// }
// console.log(foo2());
/* Output: undefined (return jeta hbe seta sob somoi return er line theke jano start hoi noito js compiler vabe return kichu kora hoini)  */

//Question -3
// console.log(1 + 1);
// /* Output: 2 */
// console.log(1 + "2" + "2");
// /* Output: 122 (karon num+string or string+string concat hoi) */
// console.log(1 + +"2" + "2");
// /* Output: 32 kono string er age + or - dile jodi string number convert hoi(+/- type er jeta age thake string er) */
// console.log(1 + +"2" + +"2");
// /* Output: 5 */
// console.log(1 + -"1" + "2");
// /* Output: 02  */
// console.log("A" - "B" + "2");
// /* Output: NaN2 ("A"-"B"=NaN + "2" ->concat so NaN2) */
// console.log("A" - "B" + 2);
// /* Output: NaN (NaN+2->can't be add with nan with number)  */

//Question -4
// var a = 0;
// function b()
// {
//     a = 10;
//     return;
//     var a = function () { };
// }
// b();
// console.log(a);
/*
Output: 0 
because of var a=0 created a varible globally but in local scope there is also a created and for hoisting a=10 is for local scope only
*/
// var a = 0;
// function b()
// {
//     a = 10;
//     return;
//     a = function () { };
// }
// b();
// console.log(a);
/*
Output: 10 
because no a created locally just change value 
// */
// var a = 0;
// function b() {
//   a = 10;
//   a = function () {};
// }
// b();
// console.log(a);
// /*
// Output:
// ƒ () { }
// */

//Question -5
// console.log({} == {});
// output: false (karon duto akii dekhte hole alada reference allocation a6e same nicher question)
// var a = {};
// var b = {};
// console.log(a == b);
//Output: false (variable er value same hole akii hoi but object same hole akii hoi na example: a=5,b=5,a==b->true)
// var c = {};
// var d = c;
// console.log(c == d);
// Output: true (karon c ke jei object ta assign kora hoye6e otakei d er modhyeo assign kora hoye6e tai duto same)

//Question -6
// function test() {
//     function foo() {
//         return 100;
//     }
//     return foo();
//     function foo() {
//         return 10;
//     }
// }
// console.log(test());
// Output:10 (karon hoisting er jonno function foo ta last er define ta hbe jodi first foo define nao thakto tao 10 hoto karon hoisting er jonno)

//Question -7
// test();
// function test() {
//     console.log("sanju");
// }
// Output: sanju (because of function hoisting  )
// var test = function () {
//     console.log("sanju");
// }
// test();
//Output: sanju (normal case)
// test();
// var test = function () {
//     console.log("sanju");
// }
// Output: error because test is not a function when executing test() line in this line test=undefined (because of variable hoisting) -> function declaration have hoisting but function expression doesn't have hoisting

//Question -8
// console.log(true)
//Output: true
// console.log(false)
//Output: false
//But doing operation true =1 and false=0
// console.log(true + true) //2
// console.log(true + false) //1
// console.log(-true+false) //-1

// Question -9
// const ans = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Not Done");
//     }, 5000);
// })
// ans
// .finally(() => {
//     console.log("Finally");  //Finally executes garantee doesn't effect reject or resolve
// })
// .then((data) => {
//     console.log("resol:",data); //for resolve
// }, (data) => {
//     console.log("rej:", data);
// })
//Output:
// Finally
// rej:Not Done

//Question -10
// let arr = [15, 7, 3, 9, 43, 115];
// arr.sort();  //Sort array alphabatically like sort first element by 0,1,2,3..9 ,then second element by 0,1,2,3..9 going one
// console.log(arr); // [115, 15, 3, 43, 7, 9]
// actually sort Ascending order
// arr.sort((a, b) => {
//     return a - b;
// });
// console.log(arr); // [3, 7, 9, 15, 43, 115]
// arr.sort((a, b) => {
//     return b-a;
// });
// console.log(arr); // [115, 43, 15, 9, 7, 3]

//Question -11
// function hello() {
//     var a = 10;
//     function innerHello() {
//         return a;
//     }
//     return innerHello();
// }
// console.log(hello());
// Output: 10 // innerHello function return a but there are no a in innerHello function then it search on it's parent ,It is called lexical scope
// function hello() {
//     var a = 10;
//     function innerHello() {
//         return a;
//     }
//     return innerHello;
// }
// const ans = hello();
// console.log(ans);
// Output:
// ƒ innerHello() {
//     return a;
// }
// console.log(ans());
//Output: 10 // Beacuse it remember value of a (closure of hello) ,it's closures

// Question -12
//How to do that if const a=foo(6),then a(10) returns 16 and similar like a(21) returns 27
// function foo(a) {
//     return (b) => {
//         console.log(a + b);
//     }
// }
// const ans = foo(6);
// ans(10);
// ans(21);
// Because of closure

// Question -13
// console.log(!!10 + 20);
//Output: 21 (karon !10=false->1 and !!10=!false=true->1 s0,1+20=21)

//Question -14
// let x = 0;
// console.log(x++);
// Output: 0 (post increment ,x become 1 after x++ line)

//Question -15
// const obj = {
//     a: "One",
//     b: "Two",
//     a: "Three"
// };
// console.log(obj);
// Output: {a:"three",b:"Two"} (because of a reassign value change but position same)

//Question -16
// function a(...args) {
//     console.log(args);
//     console.log(typeof(args));
// }
// a(123);
//Output: [123] & Object (karon rest operator(...) gives us array which are type of object)

//Question -17
// console.log(typeof (NaN));
//Output: number

//Question -18
//How to cut array length
// const data = [4, 3, 5, 2, 7, 0, 8];
// data.length = 4;
// console.log(data);
//Output: [4,3,5,2] (jodi amra data.length=n set kori tobe data value 0->n index porjonto hoi max length of array)

//Question -19
//Sum and multiplication of array items by reduce method
// const data = [4, 3, 5, 2, 7, 1, 8];
// const sum = data.reduce((x, y) => x + y,0);
// console.log(sum);
// const multi = data.reduce((x, y) => x * y,1);
// console.log(multi);
// Output: 30 & 6720 (array1.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue) it is callback function which saves accumulator after every operation for each element and first time accumulator is the innitial value)

//Question -20
//Remove same elements and make it qnique
// const data = [1, 2, 4, 5, 2, 5, 1, 4, 7];
// const unique = new Set(data); // convert into set for making it unique
// console.log([...unique]); // Make it as array to set by rest operator
//Output: [1, 2, 4, 5, 7]

//Question -21
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);
// Output: false flase , because when we comapre arrays the we compare memory location,that is differnt

//Ouestion -22
// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);
// Output: true true , because here b is not differnt array we assigned a into b

//Ouestion -23
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);
// Output: true true , because here we checking value of element value not any object/array

//Question -24
// let z = [1, 2, 3, 4];
// let a = { name: "sanju" };
// console.warn(...z);
// Output: 1 2 3 4 ,beacuse when we used ...before array then array disructured then elements came outside

//Question -25
// console.log(typeof NaN)
// Output: number

// Question -26
// let data = 10 - -10;
// console.log(data);
//Output: 20

//Ouestion -27
// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set)
//Output: (1,2,3,4)

//Ouestion -28
// let data = { name: "sanju" };
// console.log(delete data.name);
// console.log(data);
// Output: true {} ,because delete operation performed so return true

// Ouestion -29
// let data = { name: "sanju" };
// console.warn(delete data);
// Output: false beacuse there was an error on delete object we can delete only by key

//Question -30
// const data = ["sanju", "ani", "pati"];
// const [y] = data;
// const [a, b] = data;
// const [p, q, r] = data;
// console.log(y);
// console.log(a, b);
// console.log(p, q, r);
//Output: sanju / sanju ani / sanju ani pati

//Question -31
// const data = ["sanju", "ani", "pati"];
// const [,y] = data;
// const [,, b] = data;
// const [, q, r] = data;
// console.log(y);
// console.log(b);
// console.log(q, r);
//Output: ani /pati /ani pati

//Question -32
// How to get object key value without . operator
// const data = { name: "sanju", age: 24, role: "Web D" };
// const { age } = data;
// const { name } = data;
// const { role } = data;
// console.log(role);
// console.log(age);
// console.log(name);
// Output: Web D / 24 /sanju

//Question -33
//Marge 2 object
// let data = { name: "Sanju", age: 24 };
// let info = { city: "burdwan" };
// data = { ...data, ...info };
// console.log(data);
//Ouput: {name: 'Sanju', age: 24, city: 'burdwan'}

//Question -34
// let data = { name: "Sanju", age: 24 };
// let info = { city: "burdwan" };
// data = { data, ...info };
// console.log(data);
//Ouput: {{name: 'Sanju', age: 24}, city: 'burdwan'}

//Question -35
// let data = { name: "Sanju", age: 24 };
// let info = { city: "burdwan",age:45 };
// data = { ...data, ...info };
// console.log(data);
//Ouput: {name: 'Sanju', age: 45, city: 'burdwan'}

//Question -36
// const name = "sanju";
// console.log(name());
//Output: Error name is not a function

//Question -37
// const result = false || {} || null;
// console.log(result);
// Output: {} becase there use or || operator when is expression get first true value it is set to it's value {} it the first true value

//Question -38
// const result = null || false || '';
// console.log(result);
// Output: '' ->empty string because there use or || operator when is expression get first true value or last false value it is set to it's value '' it the first false value no true value

//Question -39
// const result = [] || 0 || true;
// console.log(result);
// Output: [] because first true value is []

//Question -40
// console.log(Promise.resolve(5));
//Output: Promise {<fulfilled>: 5}

//Question -41
// what this method will do
// JSON.parse();
// Output: Parse JASON to a Javascript vlue

//Question -42
// let name = "souvik";
// function getName() {
//     console.log(name);
//     let name = "sanju";
// }
// getName();
//Output:can't access name before initatialazation becasue of hoisting

//Question -43
// let name = "souvik";
// function getName() {
//     console.log(name);
// }
// getName();
// Output: souvik

// Question -44
// console.log(`${(x => x)("I Love")} to program`);
// Output: I Love to program

// Question -45
// How output should be 6
// function sumValues(x, y, z) {
//   console.log(x + y + z);
// }
// A.sumValues([...1, 2, 3]);
// B.sumValues([...[1, 2, 3]]);
// C.sumValues(...[1, 2, 3]);
// D.sumValues([1, 2, 3]);
// Output: C

//Question -46
// const name = "sanju";
// console.log(!typeof name === "object");
// console.log(!typeof name === 'string');
// Output: false/false ->left to right->!string=="object"-> false==="object"->false

// Questionv-47
// const name = "Sanju";
// const age = 24;
// console.log(isNaN(name));
// console.log(isNaN(age));
// Output: true / false -> isNaN check where as it is a not a number or number

//Question -48
// let person = { name: "anil" };
// Object.seal(person);
// // person.age=24; //can't be added after seal ->error
// // delete person.name; //can't be deleteed after seal->error
// person.name = "sanju"; //but i can modify
// console.log(person); //Output:{name: 'sanju'}

//Question -49
// Delete first Element
// const a = [2, 0, 9, 8];
// a.shift();
// console.log(a); // [0,9,8]
// add First position
// a.unshift(89);
// console.log(a); // [89,0,9,8]

//Question -50
//Delete last element
// const a = [2, 0, 9, 8];
// a.pop();
// console.log(a); // [2,0,9]
//Add last Index
// a.push(16);
// console.log(a); // [2,0,9,16]

//Question -51
//Check odd or even
// let a = 31;
// if (a % 2) {
//     console.log("Odd");
// }
// else {
//     console.log("Even");
// }

//Question -52
// let data = {
//     name: "sanju"
// }
// delete data.name;
// console.log(data); //Output: {}

// Question -53
// Convert Data to boolean false value
// let data = "true";
// console.log(!data);
// console.log(typeof !data);

//Question -54
// Convert Data to boolean true value
// let data = "true";
// console.log(!!data);
// console.log(typeof !!data);

//Question -55
// Map vs forEach
//The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array

//Question -56
// let data = ["anil", "peter", "bruce"];
// delete data[1];
// console.log(data); //['anil', empty, 'bruce']
// console.log(data.length); //3

//Question -57
// marge two arrays
// let a = [1, 2, 3,4];
// let b = [4, 5, 6];
// let c = [...a, ...b]; //in array there are same element but in object not same key  present
// console.log(c); //Output: [1, 2, 3,4, 4, 5, 6]

//Question -58
// let c = 3 ** 3;
// console.log(c); //Output: 27

//Question -59
// let a = 2;
// setTimeout(() => {
//     console.log(a);
// }, 0)
// a = 100;
//Output: 100

//Question -60
// let a = 2;
// let A = 30;
// console.log(A); //Output: 30

//Question -61
// let A10 = 'like';
// let 10A = 'okey'; //SyntaxError: Unexpected strict mode reserved word

//Question -62
// let a = "like";
// let b = `like`;
// console.log(a === b); //true

//Question -63
// let a = 1;
// let c = 2;
// console.log(--c === a); //Output: true

//Question -64
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); //Output: false { true === --c ->true === 1 -> false }

//Question -65
// console.log(a);
// var a; //Output: undefined (because of hoisting)

//Question -66
// console.log(b); //output: error b not defined

//Question -67
// console.log([[[[]]]]); //[[[[]]]]

//Question -68
//How to find OS name
// console.log(navigator.platform);

//Question -69
// let for= 100; //Error: syntax unexpected token error

//Question -70
// function fruits() {
//     console.log(name);
//     console.log(city);
//     var name = "sanju";
//     let city = "burdwan";
// }
// fruits();
//Output: undefined /error -> hoisting