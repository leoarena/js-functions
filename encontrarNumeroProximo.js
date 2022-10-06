function encontrarNumeroProximo(numero, arrayDeNumeros) {
    let numeroMaisProximo = arrayDeNumeros[0]
    let distanciaNumeroMaisProximo = Math.abs(numero - numeroMaisProximo)
    
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        console.log(`Mais Próximo: ${numeroMaisProximo}`)
        
        let numeroAtual = arrayDeNumeros[i]
        let distanciaAtual = Math.abs(numero - numeroAtual)
        
        if (distanciaAtual < distanciaNumeroMaisProximo) {
            numeroMaisProximo = numeroAtual
            distanciaNumeroMaisProximo = distanciaAtual
        }

        console.log(`Atual: ${numeroAtual}`)
        console.log(`Resultado: ${numeroMaisProximo}`)
        console.log('------')
    }
    return numeroMaisProximo
}

console.log(encontrarNumeroProximo(4, [20, 10, 1, 12, 3, 5, 30]))
// console.log(encontrarNumeroProximo(100, [101, 102, 103, 99]))