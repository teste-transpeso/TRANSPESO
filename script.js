function ganhaCor(id){
    let elemento = document.getElementById(id)
    elemento.style.fontSize = '10pt';
    elemento.style.transition = '0.3s';
    elemento.style.filter = "grayscale(0%)"
    elemento.style.width = "300px"
     
     
     console.log(elemento)
}
function perdeCor(id){
    let elemento = document.getElementById(id)
    elemento.style.fontSize = '13pt';
     elemento.style.filter = "grayscale(100%)"
     elemento.style.width = "270px"
     console.log(elemento)
}

function movimento(){
    let h1 = document.getElementById("teste")
    h1.style.marginTop = ("0px")
}
