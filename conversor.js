//Mapeamento do input de seleção//
const select = document.getElementById("select")

//Mapeamento do input digitável com o parágrafo da moeda de origem//
const pReal = document.getElementsByClassName("real-2")[0]
const input = document.getElementsByName("Input-digitável")[0]

//Mapeamento das imagens e parágrafos que mudam com a seleção do usuário//
const imgEua = document.getElementsByClassName("estados-unidos")[0]
const imgEuro = document.getElementsByClassName("euro")[0]
const pDolar = document.getElementsByClassName("dolar")[0]
const pDolar2 = document.getElementsByClassName("dolar-2")[0]
const pEuro = document.getElementsByClassName("euro-moeda")[0]
const pEuro2 = document.getElementsByClassName("euro-moeda-2")[0]

//mapeamento do botão//
const button = document.getElementById("button")

//Função para mudar elemento da DOM quando o usuário selecionar modedas diferentes//
function mudarvalores_moeda() {

    if (select.value === "6,18 €") {

        imgEua.style.display = "none"
        pDolar.style.display = "none"
        pDolar2.style.display = "none"

        imgEuro.style.display = "block"
        pEuro.style.display = "block"
        pEuro2.style.display = "block"

    } else {
        imgEua.style.display = "block"
        pDolar.style.display = "block"
        pDolar2.style.display = "block"

        imgEuro.style.display = "none"
        pEuro.style.display = "none"
        pEuro2.style.display = "none"
    }
}

//Função para quadno o usuário digitar no input para mudar o parágrafo//
input.addEventListener("input", () => {

    const valor = input.value;
    pReal.textContent = `${valor}`

})

//Função para quando não houver nada digitado voltar ao value do placeholder//
input.addEventListener("blur", () => {
    if (input.value === "") {
        pReal.textContent = "R$ 10.000,00";
    }
});

//Função para converter os valores//
button.addEventListener("click", ()=>{
 
if( select.value=== "6,18 €"){
pEuro2.textContent =`${(input.value / 6.18).toFixed(6)}`
  }else{ 
    pDolar2.textContent = `${(input.value / 6).toFixed(6)}`
  } 
})



