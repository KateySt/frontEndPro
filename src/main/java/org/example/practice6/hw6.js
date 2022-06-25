function fillArray(length, value) {
    return [...Array(length)].map(() => value);
}

const array1 = fillArray(10, 'qwerty');
console.log(array1);


const array = [0, 1, 2, null, undefined, 'qwerty', false];

function filterArray(array, ...args) {
    return array.filter(a => (!args.includes(a)));
}

const result = filterArray(array, false, undefined, '', 0, null);
console.log(result);


function calcSum(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
}

const sum1 = calcSum(0);
const sum2 = calcSum(1, 2, 3);
const sum3 = calcSum(5, 0, 10, 1, 5);
const sum4 = calcSum(-5, 0,3.7, 11);

console.log(sum1, sum2, sum3,sum4);


function createPipe(string) {
    console.log("===== '" + string + "' ===== ");
}
createPipe('some text you like');


function printText(x) {
    return (func) => func(x);
}

const str = printText("some text you like");
str(alert);
str(console.log);