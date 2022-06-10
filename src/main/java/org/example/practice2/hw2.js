const num = 12;
console.log('Number (' + num + ') in binary : ' + num.toString(2));
console.log('Number (' + num + ') in hexadecimal : ' + num.toString(16));

let resultNum = window.prompt("Input number", 1);
alert(`${resultNum}` + ' + 2 = ' + (parseInt(resultNum) + 2)
    + '\n' + `${resultNum}` + ' * 2 = ' + (parseInt(resultNum) * 2)
    + '\n' + `${resultNum}` + ' - 2 = ' + (parseInt(resultNum) - 2)
    + '\n' + `${resultNum}` + ' / 2 = ' + (parseInt(resultNum) / 2));
console.log('Length ' + resultNum.length);
//alert(`${resultNum}`+' * 2 = '+(parseInt(resultNum) * 2 ));
//alert(`${resultNum}`+' - 2 = '+(parseInt(resultNum) - 2 ));
//alert(`${resultNum}`+' / 2 = '+(parseInt(resultNum) / 2 ));

let number = 0.51000002;
console.log('Rounding a number to two decimal places : ' + parseFloat(number.toFixed(2)) + 2);

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
console.log('Line str_two starts on line str with ' + str.indexOf(str_two));
console.log('Line str upper case : ' + str.toUpperCase());

let a = 1, b = 2, c = 3, d = 3;
console.log('Logical operator example OR : ' + (a >= c || b < c || c > d));
console.log('Logical operator example AND : ' + (a <= b && b < c && c === d));

console.log((parseInt(resultNum)) == (parseInt(resultNum)));
console.log((parseInt(resultNum)) === (parseInt(resultNum)));
console.log(new Number((parseInt(resultNum))) == (parseInt(resultNum)));
console.log(new Number((parseInt(resultNum))) === (parseInt(resultNum)));

if (parseInt(resultNum) === 1) {
    resultNum = null;
}
console.log(resultNum ?? 'You didn\'t enter a number');