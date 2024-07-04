const resultado = document.querySelector("#resultado")
const cep = document.querySelector("#cep")
const botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
.then((resposta)=>{
    return resposta.json()
})
.then((dados)=>{
    console.log(dados)
    resultado.innerHTML = `
    <p>Endereço: ${dados.logradouro}</p>
    <p>Complemento: ${dados.complemento}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>Estado: ${dados.uf}</p>
    `
})

.catch((error)=>{
    console.log("Deu erro", error)
})
})
