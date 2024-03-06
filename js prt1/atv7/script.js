function calcularSomatorio() {
    var somatorio = 0;

    for (var i = 0; i < 5; i++) {
        var numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
        somatorio += numero;
    }

    console.log("O somatório dos números é:", somatorio);
}

calcularSomatorio();
