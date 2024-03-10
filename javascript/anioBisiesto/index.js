var anyo = 2021
var contador = 0

for (i = 0; i < anyo; i = i + 4) {
    var primeraCondicion = i % 4
    var segundaCondicion = i % 100
    var terceraCondicion = i % 400
    if (((primeraCondicion == 0) && (segundaCondicion != 0)) || (terceraCondicion == 0)) {
        contador = contador + 1
        console.log("Año: " + i)
    }

}

document.getElementById('resultado').innerText = "Hasta 2021 ha habido " + contador + "años bisiestos"
console.log("Hasta 2021 ha habido " + contador + "años bisiestos")



