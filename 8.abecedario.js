function solucao(letra, palavras) {

    let contador = ""

    for (indice = 0; indice < palavras.length; indice++) {
        if (letra !== palavras[indice][0]) {
            contador++
        }
    }

    console.log(contador)

}
