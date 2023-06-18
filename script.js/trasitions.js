
let contenedorGrande= document.getElementById("contenedorGrande");
let contenedor =document.getElementById("contenedor");
let noche =document.getElementById("noche");

contenedorGrande.addEventListener("click",function(){
if(contenedor.classList.contains("contenedor-1")){
contenedor.classList.add("contenedor-2");
contenedor.classList.remove("contenedor-1");
contenedorGrande.classList.add("main-box-on");
contenedorGrande.classList.remove("main-box-off");
noche.classList.add("noche");
noche.classList.remove("dia")

}
else{
    contenedor.classList.remove("contenedor-2")
    contenedor.classList.add("contenedor-1")
    contenedorGrande.classList.remove("main-box-on");
    contenedorGrande.classList.add("main-box-off");
    noche.classList.remove("noche");
    noche.classList.add("dia");
 
}
})



 