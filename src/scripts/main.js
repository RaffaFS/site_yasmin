const btnSobre = document.querySelector('#btnSobre')
const btnSalgados = document.querySelector('#btnSalgados')
const btnBebidas = document.querySelector('#btnBebidas')
const btnDoces = document.querySelector('#btnDoces')

const sobre = document.querySelector('#sobre')
const salgados = document.querySelector('#salgados')
const bebidas = document.querySelector('#bebidas')
const doces = document.querySelector('#doces')

const carrinho = document.querySelector('#carrinho')
const obs = document.querySelector('#obs')

const btnAdd = document.querySelectorAll(".adicionar")

const cidade = document.querySelector("#cidade")
const bairro = document.querySelector("#bairro")
const rua = document.querySelector("#rua")
const numero = document.querySelector("#numero")
const complemento = document.querySelector("#complemento")

const btnEnviar = document.querySelector('#btnEnviar')

btnSobre.addEventListener('click', showSobre)
btnSalgados.addEventListener('click', showSalgados)
btnBebidas.addEventListener('click', showBebidas)
btnDoces.addEventListener('click', showDoces)

btnAdd.forEach((btn) => {
    btn.addEventListener('click', adicionar)
})

btnEnviar.addEventListener('click', registrar)
btnEnviar.addEventListener('click', enviar)

function showSobre(){
    btnSobre.classList.remove('hiddenBorder')
    btnSalgados.classList.add('hiddenBorder')
    btnBebidas.classList.add('hiddenBorder')
    btnDoces.classList.add('hiddenBorder')

    sobre.classList.remove('hidden')
    salgados.classList.add('hidden')
    bebidas.classList.add('hidden')
    doces.classList.add('hidden')

    infos.classList.add('hidden')
}
function showSalgados(){
    btnSobre.classList.add('hiddenBorder')
    btnSalgados.classList.remove('hiddenBorder')
    btnBebidas.classList.add('hiddenBorder')
    btnDoces.classList.add('hiddenBorder')

    sobre.classList.add('hidden')
    salgados.classList.remove('hidden')
    bebidas.classList.add('hidden')
    doces.classList.add('hidden')

    infos.classList.remove('hidden')
}
function showBebidas(){
    btnSobre.classList.add('hiddenBorder')
    btnSalgados.classList.add('hiddenBorder')
    btnBebidas.classList.remove('hiddenBorder')
    btnDoces.classList.add('hiddenBorder')

    sobre.classList.add('hidden')
    salgados.classList.add('hidden')
    bebidas.classList.remove('hidden')
    doces.classList.add('hidden')

    infos.classList.remove('hidden')
}
function showDoces(){
    btnSobre.classList.add('hiddenBorder')
    btnSalgados.classList.add('hiddenBorder')
    btnBebidas.classList.add('hiddenBorder')
    btnDoces.classList.remove('hiddenBorder')

    sobre.classList.add('hidden')
    salgados.classList.add('hidden')
    bebidas.classList.add('hidden')
    doces.classList.remove('hidden')

    infos.classList.remove('hidden')
}

let lista = ""

function adicionar(){
    const item = event.target.dataset.item;
    carrinho.innerHTML += `, \n ${item}`
    lista = carrinho.innerHTML
    return lista
}

let observ = ""

function registrar(){
    observ = obs.innerHTML
    return observ
}

function enviar(){
    observ = obs.innerHTML
    const a1 = cidade.value
    const a2 = bairro.value
    const a3 = rua.value
    const a4 = numero.value 
    const a5 = complemento.value
    const whatsappURL = `https://wa.me/5547991974121/?text=Meu pedido é: ${lista} // ${observ} // para o endereço: ${a1} - ${a2} - ${a3} - ${a4} - ${a5}`
    window.open(whatsappURL, '_blank')
}

// Pensar em no futuro incluir um completador de endereço automático por uma API de CEP
// Pensar em mudar o estilo de carrinho com arrays e melhorar a estrutura de mensagem no whats
// dar algum tipo de confirmação ou sinal que o item foi adicionado