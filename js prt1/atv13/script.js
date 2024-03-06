function calcularNovoSalario() {
    var salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));

    var aumento = salarioAtual * 0.275;
    var novoSalario = salarioAtual + aumento;

    console.log("O novo salário do funcionário com 27,50% de aumento é:", novoSalario.toFixed(2));
}

calcularNovoSalario();

