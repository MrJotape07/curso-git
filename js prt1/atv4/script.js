function calcularMedia() {
    var disciplina = prompt("Digite o nome da disciplina:");
    var aluno = prompt("Digite o nome do aluno:");

    var notas = [];
    var soma = 0;

    for (var i = 0; i < 4; i++) {
        var nota = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno:"));
        notas.push(nota);
        soma += nota;
    }

    var media = soma / 4;

    console.log("Disciplina:", disciplina);
    console.log("Aluno:", aluno);
    console.log("Notas:", notas);
    console.log("Média:", media.toFixed(2));
}

calcularMedia();
