function contador(){
    let num = +document.querySelector('#segundos').value;
    setTimeout(finalizar, num * 1000);
}

function finalizar(){
    document.querySelector('#salida').textContent = 'ON';
    // alert('Tiempo cumplido');
    let alarma = document.querySelector('#alarma');
    alarma.play();
}

function reiniciar(){
    location.reload();
}