const teaPlease = {
    message: 'Wanna some tea instead of coffee?'
}

const coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        let start = function (){console.log(this.message)};
        setTimeout(start.call(teaPlease),3000);//2
        //let start =  ()=> {console.log(this.message)};
        //setTimeout(start.call(teaPlease),3000);//1
        //setTimeout(()=>console.log(`${this.message} `),3000); //1
    },
}

//coffeeMachine.start(); // 'Your coffee is ready!'//1
coffeeMachine.start(); // 'Wanna some tea instead of coffee?'//2
//-----------------------------------------------------------------
function concatStr(string1, separator, string2) {
    console.log(string1 + separator + string2);
}

const checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'

const hello = concatStr.bind(undefined, 'Hello', ' ');

const finalResult = hello('John'); // 'Hello John'
const finalResult1 = hello('Matt'); // 'Hello Matt'
const finalResult2 = hello(); // 'Hello undefined'
//----------------------------------------------------------

function showNumbersR(startNum, endNum, time) {
    let start = startNum;
    setTimeout(() => {
        console.log(start);
    }, time);
    startNum++;
    return startNum <= endNum ? showNumbers(startNum, endNum, time) : endNum;
}

showNumbersR(5, 10, 500); // 5 6 7 8 9 10

function showNumbers(startNum, endNum, time) {
    const interval = setInterval(() => {
        console.log(startNum++)
    }, time);
    setTimeout(() => clearInterval(interval),
        (endNum - startNum + 1) * time);

}

//showNumbers(5, 10, 500); // 5 6 7 8 9 10
//---------------------------------------------------------------------------

function addBase(base) {
    return function (num) {
        return base + num;
    };
}

let addOne = addBase(1);
alert(addOne(5) + addOne(3));
/*
Результат данной программы 10, потому что в переменную addOn записывается силка на "внутренности" функции addBase, а уже после выполняются обе операции с значением base по умолчанию равным 1.
addOne(5)//+1=6;
addOne(3)//+1=4;
finish 6+4===10;
*/
