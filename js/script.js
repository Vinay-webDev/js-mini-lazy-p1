// sum of an array 
let array = [];

function pushValue() {
    let value = document.getElementById("input").value;
    let number = Number(value);
    array.push(number);
    console.log(array);
    console.log(typeof array[0]);
}

function sum() {
    let sum = 0;
    for ( let i = 0; i < array.length; i++ ) {
        sum += array[i];
    }
    console.log(sum);
    let text = document.getElementById("sum-text");
    text.textContent =`= ${sum}`;
}





















