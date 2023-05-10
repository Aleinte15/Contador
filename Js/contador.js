function obtenerContador() {
    var contador = Number(document.getElementById("idContador").textContent);
    return contador;
}

function sumar() {
    var contador = obtenerContador();
    var nuevoContador = contador + 1;
    document.getElementById("idContador").textContent = nuevoContador;
}

function restar() {
    var contador = obtenerContador();
    if (contador > 0) {
        var nuevoContador = contador - 1;
        document.getElementById("idContador").textContent = nuevoContador;
    } else {
        alert("El contador es 0.");
    }
}

function reiniciar() {
    var contador = obtenerContador();
    if (contador > 0) {
        document.getElementById("idContador").textContent = "0";
        alert("El contador fue reiniciado a 0.");
    }
}
