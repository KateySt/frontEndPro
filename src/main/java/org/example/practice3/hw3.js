let name = window.prompt("Input your name", "Anonim");
for (let i = 0; i < 3; i++) {
    console.log("Happy birthday to you");
    if (i === 1) {
        console.log(`Happy birthday, dear ${name}`);
    }
}


let numRepeat = window.prompt("Number of repetitions", 1);
let str = ".#";
for (let i = 0; i < numRepeat - 1; i++) {
    str += ".#";
}
console.log(`${str}`);


let num = window.prompt("Input a number", 0);
while (true) {
    if (parseInt(num) === 0) {
        num = window.prompt("Invalid. You should enter a number", 0);
    } else if (parseInt(num) !== 0) {
        break;
    }
}
let sum = 0;
for (let i = 1; i < parseInt(num); i += 2) {
    sum += i;
}
console.log(`${sum} sum of all odd numbers before ${num}`);


let iter = 0;
let numBreak = 0;
while (true) {
    numBreak = Math.random();
    if (numBreak > 0.7) {
        iter++;
        break;
    }
}
console.log(`Loop was finished because of: ${numBreak}`);
console.log(`Number of iterations: ${iter}`);


for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Div by 3");
    } else if (i % 5 === 0) {
        console.log("Div by 5");
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("Div by 5 and 3");
    } else {
        console.log(i);
    }
}


function printDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
}

function getFullDate(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()));
}

let date = new Date();
date.setTime(date.getTime() + date.getTimezoneOffset() * 60000);
console.log(printDate(getFullDate(date)));



