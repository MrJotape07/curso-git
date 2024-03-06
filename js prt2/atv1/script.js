var contador = 0;
for (var i = 1; i <= 50; i += 2) {
    if (contador === 30) {
        break;
    }
    console.log(i);
    contador++;
}
