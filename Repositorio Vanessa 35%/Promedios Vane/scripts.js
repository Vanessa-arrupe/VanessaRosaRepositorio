function prom (){
    const n1 = +document.querySelector('#cali1').value;
    const n2 = +document.querySelector('#cali2').value;
    const n3 = +document.querySelector('#cali3').value;

    const mostrar = document.querySelector('#salida');
    const fr = document. querySelector('#frase');
    const promedio= (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.30);
    // mostrar.textContent = promedio;

    if (promedio >= 6 && promedio <= 10) { //si el promedio es mayor o igual a seis y el promedio es menos o igual a 10
        mostrar.textContent = promedio + ' Bien.';
    } else if (promedio >=1 && promedio < 6){
        mostrar.textContent = promedio + ' Mejora';
    } else {
        mostrar.textContent = 'ingrese notas entre 1 y 10';
    }

    if (promedio >= 9 && promedio <= 10) {
        fr.textContent = 'Excelente desempeño.'
    } else if (promedio >= 7 && promedio <= 8){
        fr.textContent = 'Buen desempeño.'
    } else if (promedio >= 5 && promedio <= 6){
        fr.textContent = 'Puedes mejorar.'
    } else if (promedio >= 0 && promedio <= 4){
        fr.textContent = '...'
    } 
}