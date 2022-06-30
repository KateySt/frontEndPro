const frameworks = ["AngularJS", "jQuery"];
console.log(frameworks);

frameworks.unshift("Backbone.js");
console.log(frameworks);

frameworks.push("ReactJS", "Vue.js");
console.log(frameworks);

frameworks.splice(2, 0, 'CommonJS');
console.log(frameworks);

const f = frameworks.splice(frameworks.indexOf("jQuery"), 1);
console.log(`Это здесь лишнее ${f}`);
console.log(frameworks);

//---------------------------------------------------

function removeNegativeElements(array) {
    return array.filter(val => (val >= 0 | (typeof val === "string")));
}

let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3,0, 'value'];
let result1 = removeNegativeElements([-9, -21, -12]); // []
let result2 = removeNegativeElements(['-102', 102]); // ['-102', 102]

console.log(result);
console.log(result1);
console.log(result2);

//---------------------------------------------------

function getStringElements(array) {
    return array.filter(val => (typeof val === "string"));
}

let arr = [1, true, 42, "red", 64, "green", "web", new Date(), -898, false]
let result3 = getStringElements(arr);

console.log(result3);
//--------------------------------------------------------------------------

const array = [...Array(10)].map(() => Math.floor(Math.random() * 10));
console.log(array);

function r(arr, sum = 0) {
    if (!arr.length) {
        return sum;
    }
    return arr.length ? r(arr, sum + arr.pop()) : sum;
}

console.log(r(array));

//------------------------------------------------------------------------
const array2 = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
let sum = 0;

function sumTen(arr, ten = 10, n = 0) {
    if (!arr.length) {
        return n;
    }
    let t = arr.shift();

    return sumTen(arr, 10, (t === ten ? n += t : n));
}

sum = sumTen(array2, 10);
console.log(sum);

//----------------------------------------------------------------

const array3 = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
let arrayFive = [];

function biggerFive(arr, bigger = 5, n = []) {
    if (!arr.length) {
        return n;
    }
    let t = arr.shift();
    if (t > bigger) {
        n.push(t);
    }
    return biggerFive(arr, 5, n);
}

arrayFive = biggerFive(array3, 5);
console.log(arrayFive);