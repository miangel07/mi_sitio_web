let inpuntBusqueda = document.getElementById("inputBusqueda");
let btnGraficar = document.getElementById("btnGraficar");
let boxEstrellas= document.getElementById("boxEstrellas");

btnGraficar.addEventListener("click", function(){
    let calificacion = inpuntBusqueda.value;
   if(calificacion >= 0 && calificacion <=0.1){

   }
   let boxEstrella= document.createElement("i");
   boxEstrellas.appendChild(boxEstrella);
   boxEstrella.setAttribute("class","fa-solid fa-star");
});