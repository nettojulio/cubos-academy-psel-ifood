function solucao(obj) {

    let obje = [obj]

    let temIngresso = obje[0].temIngresso
    let idade = obje[0].idade
    let temCarteirinha = obje[0].temCarteirinha
    let censura = obje[0].censura
    let estaComPais = obje[0].estaComPais

    let a = "ACESSO NEGADO"
    let m = "MEIA"
    let i = "INTEIRA"

    if (obje[0].temIngresso === false || obje[0].idade < obje[0].censura && obje[0].estaComPais === false) {
        console.log(a)
    } else if (obje[0].idade < 18 || obje[0].temCarteirinha === true) {
        console.log(m)
    } else {
        console.log(i)
    }

}