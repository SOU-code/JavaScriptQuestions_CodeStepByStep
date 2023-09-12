// Question -1
(function () {
  var a = b = 3
})();
console.log(typeof a);
console.log(typeof b);
/*Output:
undefined
number
(But If we use strict mode answer is reference error: b is not defined)*/