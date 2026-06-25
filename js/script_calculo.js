/**
 * GASOLINA = 20%
 * ETANOL = 15%
 * BICOMBUSTÍVEL = 10%
 * HÍBRIDO = 8%
 * ELÉTRICO = 2%
 * MAIS DE 20 ANOS = ISENTO
 */

const calcularIPVA = (valor, combustivel, idade) => {

    let valorIPVA = 0.0

    if(idade > 20){
        return "Isento"
    }

    if(combustivel == "gasolina"){
        valorIPVA = valor * 0.20

    }else if(combustivel == "etanol"){
        valorIPVA = valor * 0.15

    }else if(combustivel == "bicombustivel"){
        valorIPVA = valor * 0.10

    }else if(combustivel == "hibrido"){
        valorIPVA = valor * 0.08

    }else if(combustivel == "eletrico"){
        valorIPVA = valor * 0.02
    }

    return valorIPVA
}

export { calcularIPVA }