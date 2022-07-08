const DISPLAY_LIMIT = 18;
let dotFlag = 0;
let firstIn = 1;
let num = "", op = '';

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
    let res = 0;
    switch(op){
        case 'add':
            res=add(a,b);
        break;

        case 'subs':
            res=substract(a,b);
        break;

        case 'multiply':
            res=multiply(a,b);
        break;

        case 'divide':
            res=divide(a,b);
        break;

        default:
    }

    return res;
}

function clearText () {
    const p = document.querySelector("p");
    p.textContent = "";
    dotFlag = 0;    
}


function display (e){
    const btn = e.target.attributes['key-op'].value;
    const p = document.querySelector("p");
    
    if( btn === 'lol') return;

    if (btn === 'clear'){
        p.textContent = "";
        num = "";
        dotFlag = 0;
        num = op = '';
        firstIn = 1;    
        return;
    } 

    else if (btn === 'delete'){
        if (p.textContent[p.textContent.length-1] === '.') dotFlag = 0;
        p.textContent = p.textContent.slice(0,p.textContent.length-1);
        return;
    } 

    else if ((  parseInt(btn) >= 0 || parseInt(btn) <= 9) &&
                p.textContent.length < DISPLAY_LIMIT) {
        p.textContent += btn;
        return;
    }

    else if (btn === 'dot' && dotFlag === 0){
        p.textContent += '.';
        dotFlag = 1;
        return;
    }

    else {
        
        if(firstIn === 1 && btn !== 'equal') {
            op = btn;
            num = parseFloat(p.textContent);
            clearText();
            firstIn = 0;
        }
        else if (firstIn === 0 || btn === 'equal') {
            num = operate(op,num,parseFloat(p.textContent));
            p.textContent = num;
            firstIn = 1;
        }

        console.log(num);
    }
}

const keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach(key => {
    key.addEventListener("click", display);
});