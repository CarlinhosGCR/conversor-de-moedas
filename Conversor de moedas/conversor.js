const select = document.getElementById("select")
const opcao1 = document.getElementsByClassName("opcao1")[0]
const opcao2 = document.getElementsByClassName("opcao2")[0]
const input = document.getElementsByName("Input-digitável")[0]
const imgEua = document.getElementsByClassName("estados-unidos")[0]
const imgEuro = document.getElementsByClassName("euro")[0]
const pDolar = document.getElementsByClassName("dolar")[0]
const pDolar2 = document.getElementsByClassName("dolar-2")[0]
const pEuro = document.getElementsByClassName("euro-moeda")[0]
const pEuro2 = document.getElementsByClassName("euro-moeda-2")[0]

function mudarvalores_moeda(){

    if(select.value==="6,18 €"){

        imgEua.style.display="none"
        pDolar.style.display="none"
        pDolar2.style.display="none"

        imgEuro.style.display="block"
        pEuro.style.display="block"
        pEuro2.style.display="block"

    } else{
        imgEua.style.display="block"
        pDolar.style.display="block"
        pDolar2.style.display="block"

        imgEuro.style.display="none"
        pEuro.style.display="none"
        pEuro2.style.display="none"
    }
}