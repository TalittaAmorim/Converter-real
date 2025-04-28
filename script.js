let inputdolar =  document.querySelector("#dolar")
let inputreal = document.querySelector("#real")
let api = 'https://economia.awesomeapi.com.br/json/last/:moedas'

inputdolar.value = 1000

inputreal.addEventListener("keyup", () => {
    inputreal.value = formatarNumero(inputreal.value)
})

inputdolar.addEventListener("blur", () => {
    inputdolar.value = formatarNumero(inputdolar.value)
})





function formatarNumero(valor){
    let valorFixado = fixarValor(valor)
    let options = {
        useGrouping: true,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(valorFixado)
}


function fixarValor(valor){
    if (!valor) return 0;
    let valorFixado = valor.replace(",",".")
    valorFixado = +valorFixado
    return isNaN(valorFixado)? 0 : valorFixado
}


asyc

function converter (type){
    if(type == "usd-to-brl"){

    }
    if(type == "brl-to-usd"){

    }
}