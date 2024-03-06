function calcularPrecoPromocional() {
    var precoProduto = parseFloat(prompt("Digite o preço do produto:"));

    var desconto = precoProduto * 0.15;
    var precoPromocional = precoProduto - desconto;

    console.log("O preço promocional do produto com 15% de desconto é:", precoPromocional.toFixed(2));
}

calcularPrecoPromocional();
