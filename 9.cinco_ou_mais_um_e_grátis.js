function solucao(precos) {

    let qntditens = 0
    let menor = precos[0]
    let total = 0
    let desconto = 0
    let totalfinal = total - desconto

    for (let itens = 0; itens < precos.length; itens++) {
        qntditens++
    }

    for (let itens = 1; itens < precos.length; itens++) {
        if (precos[itens] < menor) {
            menor = precos[itens]
        }
    }

    if (qntditens > 4) {
        desconto = menor
    } else {
        desconto = 0
    }

    for (let itens = 0; itens < precos.length; itens++) {
        total = total + precos[itens]
    }

    console.log(total - desconto)

}