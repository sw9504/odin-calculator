function add (a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (op,a,b) {

}

function display (e){
    const btn = e.target.attributes['key-op'].value;
    const p = document.querySelector("p");

    if (btn === 'clear') p.textContent = "";

    else if (btn === 'delete') 
        p.textContent = p.textContent.slice(0,p.textContent.length-1);

    else if (parseInt(btn) >= 0 || parseInt(btn) <= 9)
        p.textContent += btn;
    
}

const keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach(key => {
    key.addEventListener("click", display);
});