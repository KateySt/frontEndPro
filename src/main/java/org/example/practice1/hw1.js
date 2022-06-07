let num = 123456;
let str = "IT School 'Hillel'";
let bool = false;

let strValType;

console.log("value: " + num + " ; " + "type: " + typeof num);
console.log("value: " + str + " ; " + "type: " + typeof str);
console.log("value: " + bool + " ; " + "type: " + typeof bool);

function printType(x) {
    strValType = '"' + "value: " + x + " ; " + "type: " + typeof x + '"';
}

printType(num);
alert(strValType);
printType(str);
alert(strValType);
printType(bool);
alert(strValType);
