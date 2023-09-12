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

