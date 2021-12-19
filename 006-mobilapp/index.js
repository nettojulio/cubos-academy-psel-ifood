function solucao(tempo, distancia) {

    let t = tempo
    let d = distancia
    let vtempo = ""
    let vdistancia = ""
    let valor = ""

    if (t < 5) {
        vtempo = 600
        vdistancia = 0
    } else if (t < 61) {
        vtempo = t * 100
        vdistancia = d * 50
    } else if (t > 60 && d < 100) {
        vdistancia = d * 200
        vtempo = 0
    } else if (t > 60 && d >= 100) {
        vdistancia = d * 150
        vtempo = 0
    }

    valor = vtempo + vdistancia

    console.log(valor)

}