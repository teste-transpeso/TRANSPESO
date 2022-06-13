function ganhaCor(id){
    let elemento = document.getElementById(id)
    elemento.style.transition = '0.3s';
    elemento.style.filter = "grayscale(0%)"
     elemento.setAttribute('width','430px')
     
     console.log(elemento)
}
function perdeCor(id){
    let elemento = document.getElementById(id)
     elemento.style.filter = "grayscale(100%)"
     elemento.setAttribute('width','400px')
     console.log(elemento)
}

function movimento(){
    let h1 = document.getElementById("teste")
    h1.style.marginTop = ("0px")
}
