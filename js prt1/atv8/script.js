function converterIdadeParaDias() {
    var anos = parseInt(prompt("Digite a idade em anos:"));
    var meses = parseInt(prompt("Digite a idade em meses:"));
    var dias = parseInt(prompt("Digite a idade em dias:"));

    var idadeEmDias = (anos * 365) + (meses * 30) + dias;

    console.log("A idade expressa apenas em dias é:", idadeEmDias);
}

converterIdadeParaDias();
