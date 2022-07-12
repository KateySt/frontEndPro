let div = document.getElementById("main");
let divF = document.getElementById("footer");
divF.replaceWith(div);
div.after(divF);

let p = div.lastElementChild;
p.setAttribute("class", "p-last-child");

//====================================

let divSL = document.getElementById("streetlight");
let pSL = divSL.children;
let i = 0;
let colour = '';
let n = 0;
setInterval(() => {

    switch (i) {
        case 0:
            colour = '#eb4e4e';
            break;
        case 1:
            colour = '#ffa534';
            break;
        case 2:
            colour = '#85cd00';
            break;
    }

    if (i === 0) {
        pSL.item(2).setAttribute("style", "background-color:black;");
    } else {
        n = i - 1;
        pSL.item(n).setAttribute("style", "background-color:black;");
    }

    pSL.item(i).setAttribute("style", `background-color:${colour};`);

    if (i === 2) {
        i = -1;
    }
    i++;
}, 3000);

//=======================================

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function createTable(elAfter,array){

    let table = document.createElement("table");

    for (let i = 0; i < array.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < array[i].length; j++) {

            let td = document.createElement('td');
            tr.appendChild(td);

            td.append(array[i][j]);
        }
        table.appendChild(tr);
    }
    elAfter.appendChild(table);
}

createTable(document.getElementById("table"),array);



