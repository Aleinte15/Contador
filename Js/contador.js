function obtenerContador() {
    var contador = Number(document.getElementById("idContador").textContent);
    return contador;
}

function sumar() {
    var contador = obtenerContador();
    var nuevoContador = contador + 1;
    document.getElementById("idContador").textContent = nuevoContador;
    if (nuevoContador > 0) {
        document.getElementById("idContador").style.color = "green";
    } else if (nuevoContador == 0) {
        document.getElementById("idContador").style.color = "black";
    }
}

function restar() {
    var contador = obtenerContador();
    var nuevoContador = contador - 1;
    document.getElementById("idContador").textContent = nuevoContador;
    if (nuevoContador < 0) {
        document.getElementById("idContador").style.color = "red";
    } else if (nuevoContador == 0) {
        document.getElementById("idContador").style.color = "black";
    }
}

function reiniciar() {
    var contador = obtenerContador();
    if (contador != 0) {
        document.getElementById("idContador").textContent = "0";
        alert("El contador fue reiniciado a 0.");
        document.getElementById("idContador").style.color = "black";
    }
}
