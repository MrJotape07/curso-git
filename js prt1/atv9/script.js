function converterIdadeParaAnosMesesDias() {
    var idadeEmDias = parseInt(prompt("Digite a idade em dias:"));

    var anos = Math.floor(idadeEmDias / 365);
    var diasRestantes = idadeEmDias % 365;

    var meses = Math.floor(diasRestantes / 30);
    diasRestantes %= 30;

    console.log("A idade expressa em anos, meses e dias é:");
    console.log("Anos:", anos);
    console.log("Meses:", meses);
    console.log("Dias:", diasRestantes);
}

converterIdadeParaAnosMesesDias();
