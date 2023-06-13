
let contenedorGrande= document.getElementById("contenedorGrande");
let contenedor =document.getElementById("contenedor");

contenedorGrande.addEventListener("click",function(){
if(contenedor.classList.contains("contenedor-1")){
contenedor.classList.add("contenedor-2");
contenedor.classList.remove("contenedor-1");
contenedor.classList.add("main-box-off");
contenedor.classList.remove("main-box-on");
}
else{
    contenedor.classList.remove("contenedor-2")
    contenedor.classList.add("contenedor-1")
    contenedorGrande.classList.remove("main-box-on");
    contenedorGrande.classList.add("main-box-off");
}
})



 