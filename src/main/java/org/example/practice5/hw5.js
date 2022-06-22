const array = [...Array(15)].map(() => Math.floor(Math.random() * 20));
console.log(array);

const array2 = array.filter(a => (a % 3));
console.log(array2);

const seven = array.find(a => (a > 7));
console.log((seven === undefined) ? "all elements are smaller 7" : seven);

const array4 = array.map((a) => a * 2);
console.log(array4);

const array5 = array.reduce((previousValue, currentValue) =>
    currentValue % 2 ? previousValue : previousValue + currentValue);
console.log(array5);

const elFerst = array.shift();
console.log(elFerst);
const elLast = array.pop();
console.log(elLast);

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

const arr = arrayOne.filter(a => arrayTwo.includes(a));
console.log(arr);


