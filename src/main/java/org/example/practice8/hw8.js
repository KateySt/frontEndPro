let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function (a = 3, b = 3, c = 3,) {
        console.log({aSide: this.aSide = a, bSide: this.bSide = b, cSide: this.cSide = c});
    },
    getPerimeter: function () {
        return this.aSide + this.bSide + this.cSide;
    },
    isEqualSides: function () {
        return ((this.aSide === this.bSide) && (this.aSide === this.cSide) && (this.bSide === this.cSide));
    },
}

triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true

//----------------------------------------------------------------

const isNumber = () => {
    while (true) {
        let num = prompt("input number :", 1);
        num = parseFloat(num);
        if (typeof num === "number" && isFinite(num)) {
            return num;
        }
    }
}

let calculator = {
    x: 5,
    y: 2,
    read: function () {
        this.x = isNumber();
        this.y = isNumber();
        console.log(this.x, this.y);
    },
    sum: function () {
        return parseInt(this.x) + parseInt(this.y);
    },
    multi: function () {
        return this.x * this.y;
    },
    diff: function () {
        return this.x - this.y;
    },
    div: function () {
        return this.x / this.y;
    }
}

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.multi());
console.log(calculator.diff()); // 3
console.log(calculator.div());


//-------------------------------------------------------

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, [...Array(2)].map((val) => '')); // Kyiv
format.apply(country.name, [...Array(2)].map((val) => '')); // undefined

//--------------------------------------------------------------
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();//undefined
/*
Так как, областью видимости переменной var - является её настоящий контекст выполнения. JavaScript поднимает, в нашем случае повторное объявление переменной, text пред ее выводом (по умолчанию var text;//undefined), а инициализируется переменная после ее вызова. Значение 'outside' меняется на undefined.
var text;
text = 'outside';
function logIt(){
		var text;
    console.log(text);
    text = 'inside';
};
*/