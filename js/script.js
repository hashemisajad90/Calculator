let display = document.querySelector('.display');

console.log("innerH" ,display.innerHTML);
console.log("innerT" ,display.innerText);
let list = document.querySelectorAll('.show-display');
let calulate = document.querySelector('.calulate');
let clearAll = document.querySelector('.clear-all');
let clearLast = document.querySelector('.clear-last');

function showList(e) {
    let text = e.target.innerText;
    if (display.innerText == 0) {
        return display.innerText = text;
    }
    return display.innerText += text;
}
function showCalulate() {
    let result = display.innerText;
    display.innerText = eval(result);
}
function showClearAll() {
    display.innerText = 0;
}
function showClearLast() {
    let lastText = display.innerText;
    if (lastText.length === 1) {
        display.innerText = 0; 
    }else{
        display.innerText = lastText.substring(0, lastText.length - 1);
    }
}
list.forEach(item => {
    item.addEventListener('click',showList);
});
calulate.addEventListener('click',showCalulate);
clearAll.addEventListener('click',showClearAll);
clearLast.addEventListener('click',showClearLast);
