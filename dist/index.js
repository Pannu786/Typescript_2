"use strict";
let numbers = [1, 2, '3'];
let numbers2 = [1, 2, 3];
let numbers3 = [];
let numbers4 = [];
numbers4.forEach((n) => n.toExponential);
let user = [69, '69'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map