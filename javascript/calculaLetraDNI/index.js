var codigo = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

function calculaLetraDNI() {
    var dni = document.getElementById('numeroDni').value

    var resto = dni % 23

    alert("La letra de tu DNI es: " + codigo[resto])
}