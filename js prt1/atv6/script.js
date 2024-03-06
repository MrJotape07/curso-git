function lerNomeESalario() {
    var nome = prompt("Digite o nome do funcionário:");
    var salario = parseFloat(prompt("Digite o salário do funcionário:"));

    console.log("Nome do funcionário:", nome);
    console.log("Salário do funcionário:", salario.toFixed(2));
    console.log("Mensagem: O funcionário", nome, "tem um salário de R$", salario.toFixed(2));
}

lerNomeESalario();
