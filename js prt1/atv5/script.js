function exibirTabuada() {
    var numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

    console.log("Tabuada do", numero + ":");

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

exibirTabuada();
