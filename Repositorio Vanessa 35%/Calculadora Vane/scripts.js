function suma(){
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = n1 + n2;
}

function resta(){
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = n1 - n2;
}

function multi(){
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = n1 * n2;
}

function divis(){
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = n1 / n2;
}

function poten(){//para la potenciación se usa "**" así lo dice javaScript
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = n1 ** n2;
}

function root(){//solo para el primer input
    let n1 = +document.getElementById('num').value;
    let n2 = +document.getElementById('num2').value;   
    let out = document.getElementById('salida');

    out.textContent = Math.sqrt (num.value);
}

function ce(){
    document.getElementById('num').value=' ';
    document.getElementById('num2').value=' ';   
    let out = document.getElementById('salida');
    out.textContent='';
}

//Math.pow (num1,num2); potenciación