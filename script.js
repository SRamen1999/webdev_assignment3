// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById('grid');

    if (table.rows.length == 0) {
        let rowLen = document.getElementById("grid");
        let rows = table.rows;
        table.innerHTML = "<td></td>"
    }
    else {
    let row = table.insertRow(table.rows.length);

    for (let i = 0; i < table.rows[0].cells.length; i++) {
        let cell = row.insertCell(i);
        let div = document.createElement('div');
        let txt = document.createTextNode('');
        div.appendChild(txt);
        cell.appendChild(div);
    }
}
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    let rows = table.rows;

    if (table.rows.length == 0) {
        let row = table.insertRow(numRows);
    }

    for (i = 0; i < table.rows.length; i++) {
        let td = document.createElement("td");
        td.innerText = "";
        rows[i].appendChild(td);
    }
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    
    if (table.rows.length >= 1) { 
        table.deleteRow(-1);
    }
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    let rows = table.rows;

    console.log(table.rows.length);
    console.log(table.rows[0].cells.length);


    for (i = 0; i < table.rows.length; i++) {
        if (table.rows[0].cells.length < 1 || table.rows.length <= 0) {
            for (i = 0; i < table.rows.length + 15; i++) {
                removeR();
            }
        }
        else {
            rows[i].deleteCell(-1);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let table = document.getElementById("grid");
    let rows = table.rows;
    
    let colLen = table.rows[0].cells.length;

    console.log(colLen);
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}