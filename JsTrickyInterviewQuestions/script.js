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

