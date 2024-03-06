function calcularNovoValorBoleto() {
    var valorBoleto = parseFloat(prompt("Digite o valor do boleto:"));
    var diasAtraso = parseInt(prompt("Digite a quantidade de dias em atraso:"));

    var taxaPorDia = 0.0125; 
    var novoValor = valorBoleto + (valorBoleto * taxaPorDia * diasAtraso);

    console.log("O novo valor do boleto com a taxa de 1,25% ao dia é:", novoValor.toFixed(2));
}

calcularNovoValorBoleto();

