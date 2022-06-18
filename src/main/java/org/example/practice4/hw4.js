let array = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];

array.forEach(val => {
    if (typeof val === "number") {
        val += 3;
    }
    console.log(`${val} type ${typeof val}`);
});


let lengthArray = window.prompt("Input a number", 1);
let array2 = [];
for (let i = 0; i < lengthArray; i++) {
    array2[i] = Math.floor((Math.random()) * 10);
}
console.log(array2);

let array22 = array2.slice().reverse();
for (let i = 0; i < array22.length; i++) {
    if ((i + 1) % 3 === 0) {
        array22[i] *= 3;
    }
}
console.log(array22);


const student1 = {
    firstName: "Mely",
    lastName: "First",
    mark: 3,
};
console.log(student1);

let student2 = {...student1};
student2.firstName = "Oleg";
student2.mark = 4;
console.log(student2);

let student3 = Object.assign({}, student1);
student3.firstName = "Nina";
student3.mark = 5;
console.log(student3);

console.log((student1.mark + student2.mark + student3.mark) / 3);

for (let code in student1) {
    console.log(`${code} - ${student1[code]}`);
}
