function calcularNovoValorMatricula() {
    var valorMatricula = parseFloat(prompt("Digite o valor da matrícula do curso:"));

    var desconto = valorMatricula * 0.20;
    var novoValor = valorMatricula - desconto;

    console.log("O novo valor da matrícula do curso com 20% de desconto é:", novoValor.toFixed(2));
}

calcularNovoValorMatricula();

