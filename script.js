let contar = () => {
    let txt1 = document.getElementById('txtnum1') //Let pois elas precisam apenas ficar aqui fora
    let txt2 = document.getElementById('txtnum2')
    let txt3 = document.getElementById('txtnum3')
    var res = document.getElementById('res')

    if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente.')
        res.innerHTML = 'Impossivel contar :('
    } else {
        let inicio = Number(txt1.value)
        let fim = Number(txt2.value)
        let pulos = Number(txt3.value)
        var cont = ''
        res.innerHTML = 'Contando...</br>'

        if (pulos <= 0) {
            alert('Pulos inválidos, por favor verifique.')
            res.innerHTML = 'Impossivel contar :('
        } else {
            if (inicio < fim) {
                for (cont = inicio; cont <= fim; cont = cont + pulos) { //crescente
                    res.innerHTML += `${cont} ➞ `
                }
            } else {
                for (cont = inicio; cont >= fim; cont = cont - pulos) { //descrescente
                    res.innerHTML += `${cont} ➞ `
                }
            }
            res.innerHTML += '&#127937'
        }
    }
}
// Não é pura pois interage com o HTML, fora do escopo dela.
