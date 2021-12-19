function solucao(produtos) {

    let top = 0
    let normal = 0
    let precotop = 0
    let preconormal = 0
    let perc = 0

    for (let item of produtos) {
        const preco = item.preco
        if (preco >= 10000) {
            top++
            precotop += item.preco
        } else {
            normal++
            preconormal += item.preco
        }
    }

    const resposta = {
        totalTop: precotop,
        percentual: precotop / (preconormal + precotop)
    }
    console.log(resposta)

}