let dialog = document.getElementById('formDialog');
dialog.style.display = 'none';

dialog.addEventListener('click', (event) => {
    event.stopPropagation();
});

let openBtn = document.getElementById('openDialog');

openBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    dialog.style.display = 'block';
});

let inputs = document.getElementsByTagName("input");
let inputName = inputs.item(0);
let rexForName = /[a-zA-Z]/;
let inputTel = inputs.item(1);
let rexForTel = /^\+?[1-9]{1}[1-9]{1,3}[0-9]{7}/;
let inputEmail = inputs.item(2);
let rexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault()
    if (rexForName.test(inputName.value)) {
        console.log(`${inputName.value} is correct`);
    }
    if (rexForTel.test(inputTel.value)) {
        console.log(`${inputTel.value} is correct`);
    }
    if (rexForEmail.test(inputEmail.value)) {
        console.log(`${inputEmail.value} is correct`);
    }
});

//=======================================================================
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let x, y, even = 0;
let palette = document.getElementById("palette");
ctx.fillStyle = '#E0FFFF';
ctx.strokeStyle = '#E0FFFF';
ctx.fillRect(0, 0, 320, 320);

palette.addEventListener("click", function (event) {
    ctx.strokeStyle = event.target.style.backgroundColor;
});

window.addEventListener('click', (event) => {

    dialog.style.display = 'none';

    if (even) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        x = event.offsetX;
        y = event.offsetY;

    } else {
        x = event.offsetX;
        y = event.offsetY;
        even = 1;
    }
});
//==================================================================
let rexURL = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
let link = 'http://localhost:63342/frontEndPro/org/example/practice12/hw12.html?';
if (rexURL.test(link)) {
    console.log(link);
} else {
    console.log("This text isn`t really link.")
}