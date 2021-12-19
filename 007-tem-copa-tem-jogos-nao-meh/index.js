function solucao(ano) {

    let copa = 2018
    let olimpiada = 2020
    let temcopa = ((ano - copa) % 4)
    let temolimpiada = ((ano - olimpiada) % 4)

    if (temcopa === 0) {
        console.log("COPA")
    } else if (temolimpiada === 0) {
        console.log("JOGOS")
    } else {
        console.log("MEH")
    }
}