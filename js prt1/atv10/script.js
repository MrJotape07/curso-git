function converterTempoParaSegundos() {
    var horas = parseInt(prompt("Digite o número de horas:"));
    var minutos = parseInt(prompt("Digite o número de minutos:"));
    var segundos = parseInt(prompt("Digite o número de segundos:"));

    var tempoEmSegundos = (horas * 3600) + (minutos * 60) + segundos;

    console.log("O tempo expresso em segundos é:", tempoEmSegundos);
}

converterTempoParaSegundos();

