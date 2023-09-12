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
console.log(1 + 1);
/* Output: 2 */
console.log(1 + "2" + "2");
/* Output: 122 (karon num+string or string+string concat hoi) */
console.log(1 + +"2" + "2");
/* Output: 32 kono string er age + or - dile jodi string number convert hoi(+/- type er jeta age thake string er) */
console.log(1 + +"2" + +"2");
/* Output: 5 */
console.log(1 + -"1" + "2");
/* Output: 02  */
console.log("A" - "B" + "2");
/* Output: NaN2 ("A"-"B"=NaN + "2" ->concat so NaN2) */
console.log("A" - "B" + 2);
/* Output: NaN (NaN+2->can't be add with nan with number)  */
