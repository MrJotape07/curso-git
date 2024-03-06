function converterSegundosParaTempo() {
    var segundosTotal = parseInt(prompt("Digite o número de segundos:"));

    var horas = Math.floor(segundosTotal / 3600);
    var segundosRestantes = segundosTotal % 3600;

    var minutos = Math.floor(segundosRestantes / 60);

    var segundos = segundosRestantes % 60;

    console.log("O tempo expresso em horas, minutos e segundos é:");
    console.log("Horas:", horas);
    console.log("Minutos:", minutos);
    console.log("Segundos:", segundos);
}

converterSegundosParaTempo();

