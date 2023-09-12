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
function foo() {
    return {
        name:'sanju'
    }
}
console.log(foo());
/* Output: {name:'sanju'} */
function foo2() {
    return
    {
        name:'sanju'
    }
}
console.log(foo2());
/* Output: undefined (return jeta hbe seta sob somoi return er line theke jano start hoi noito js compiler vabe return kichu kora hoini)  */