function embaralharPalavra(string) {
    const letrasOrdenadas = string.split("")
    const letrasEmbaralhadas = []
    
    while(letrasOrdenadas.length) {
        const indiceSorteado = parseInt(Math.random() * letrasOrdenadas.length)
        const letraSorteada = letrasOrdenadas.splice(indiceSorteado, 1)[0]
        letrasEmbaralhadas.push(letraSorteada)
    }

    return letrasEmbaralhadas.join('')
}

console.log(embaralharPalavra("javascript"))