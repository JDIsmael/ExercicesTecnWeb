function muestraMensaje() {
    alert("Gracias por pinchar");
}

function resalta(elemento) {
    switch (elemento.style.borderColor) {
        case 'silver':
        case 'silver silver silver silver':
        case '#c0c0c0':
            elemento.style.borderColor = 'black';
            break;
        case 'black':
        case 'black black black black':
        case '#000000':
            elemento.style.borderColor = 'silver';
            break;
    }
}