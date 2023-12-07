const vacio = document.querySelectorAll(".vacio")
const relleno = document.querySelectorAll(".relleno")

vacio.forEach((e,index) =>{

    e.addEventListener("click", function(){
    relleno[index].classList.toggle("rellenos")
})
})
relleno.forEach((e,index) =>{

    e.addEventListener("click", function(){
    relleno[index].classList.remove("rellenos")
})
})


