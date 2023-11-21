/* alert("Tienda de Automoviles") */

class automovil {
  constructor(marca, modelo, precio, year, kilometrajes, ciudad, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.year = year;
    this.kilometrajes = kilometrajes;
    this.ciudad = ciudad;
    this.imagen = imagen;
  }
}

/* Instanciando la clase automivil */
let objAuto = new automovil(
  "Toyota",
  "Supra Mk04",
  2000000,
  1999,
  12560,
  "pitalito",
  "img/toyota.webp"
);

let objAuto2 = new automovil(
  "Toyota",
  "3 2.0 Touring",
  1400000,
  2014,
  5000,
  "neiva",
  "img/toyota2.webp"
);

let objAuto3 = new automovil(
  "Toyota",
  "Skiline GT-r34",
  200000000,
  2010,
  4000,
  "Ibague",
  "img/toyota3.webp"
);
let objAuto4 = new automovil(
  "Toyota",
  "3 2.0 Touring",
  88000000,
  2010,
  5000,
  "Ibague",
  "img/toyota4.webp"
);
let objAuto5 = new automovil(
  "Mazda",
  "CX-9 2.5 Grand Touring",
  15000000,
  2010,
  6000,
  "Ibague",
  "img/mazda1.webp"
);
let objAuto6 = new automovil(
  "Mazda",
  "Mazda 3 2.0 Touring",
  1600000000,
  2010,
  8000,
  "Ibague",
  "img/mazda2.webp"
);
let objAuto7 = new automovil(
  "Mazda",
  "3 2.0 Touring",
  1900000000,
  2011,
  9000,
  "Ibague",
  "img/mazda3.webp"
);let objAuto8 = new automovil(
  "Mazda",
  "2 1.5 Touring",
  200000000,
  2015,
  7000,
  "Ibague",
  "img/mazda4.webp"
);
/*  */
/* let boxProductos = document.getElementById("boxProductos"); */

/*  */
function cargarAuto(automoviles) {
  let boxProducto = document.createElement("div");
  boxProductos.appendChild(boxProducto);
  boxProducto.setAttribute("class", "box-producto");

  /* Contenedor que contiene la imagen */
  let boxImagen = document.createElement("div");
  boxProducto.appendChild(boxImagen);
  boxImagen.setAttribute("class", "box-imagen");

  /* imagen creada */
  let imagenPro = document.createElement("img");
  boxImagen.appendChild(imagenPro);
  imagenPro.setAttribute("src", automoviles.imagen);
  imagenPro.setAttribute("class", "box-imagen");

  /* contenedor para la infomacion */
  let infoProducto = document.createElement("div");
  boxProducto.appendChild(infoProducto);
  infoProducto.setAttribute("class", "box-info-producto");

  /* marca de del producto */
  let marcaProducto = document.createElement("label");
  infoProducto.appendChild(marcaProducto);
  let nodoMarcaPdto = document.createTextNode(automoviles.marca + " ");
  marcaProducto.appendChild(nodoMarcaPdto);
  marcaProducto.setAttribute("class", "marca-producto");

  /* Modelo del producto */
  let modeloProducto = document.createElement("label");
  infoProducto.appendChild(modeloProducto);
  let nodoModeloPdto = document.createTextNode(automoviles.modelo + " ");
  modeloProducto.appendChild(nodoModeloPdto);
  modeloProducto.setAttribute("class", "modelo-producto");

  /* precio del producto */
  let precioProducto = document.createElement("label");
  infoProducto.appendChild(precioProducto);
  let nodoprecioPdto = document.createTextNode(automoviles.precio + " ");
  precioProducto.appendChild(nodoprecioPdto);
  precioProducto.setAttribute("class", "precio-producto");

  /* Año */
  let yearProducto = document.createElement("label");
  infoProducto.appendChild(yearProducto);
  let nodoyeatPdto = document.createTextNode(automoviles.year + " · ");
  yearProducto.appendChild(nodoyeatPdto);
  yearProducto.setAttribute("class", "anyo-producto");

  /* Kilometraje */
  let kmPdto = document.createElement("label");
  infoProducto.appendChild(kmPdto);
  let nodoKmPdto = document.createTextNode(automoviles.kilometrajes + " ");
  kmPdto.appendChild(nodoKmPdto);
  kmPdto.setAttribute("class", "kilometraje");

  /* ciudad del producto */
  let cityPdto = document.createElement("label");
  infoProducto.appendChild(cityPdto);
  let nodoCityPdto = document.createTextNode(automoviles.ciudad);
  cityPdto.appendChild(nodoCityPdto);
  cityPdto.setAttribute("class", "ciudad");
}

let boxProductos = document.getElementById("boxProductos")

cargarAuto(objAuto);
cargarAuto(objAuto2);
cargarAuto(objAuto3);
cargarAuto(objAuto4);
cargarAuto(objAuto5);
cargarAuto(objAuto6);
cargarAuto(objAuto7);
cargarAuto(objAuto8);



let inputBusqueda = document.getElementById("inputBusqueda");


window.addEventListener("keydown", (event) =>{
    let inputBusqueda = document.getElementById("inputBusqueda").value 
    if(event.key == "Enter"){
   boxProductos.innerHTML="";
   let inputBusquedaAux= inputBusqueda.toLowerCase();
   if(inputBusquedaAux == "toyota"){
    cargarAuto(objAuto);
    cargarAuto(objAuto2);
    cargarAuto(objAuto3);
    cargarAuto(objAuto4);
   }
   else if(inputBusquedaAux == "mazda"){
    cargarAuto(objAuto5);
    cargarAuto(objAuto6);
    cargarAuto(objAuto7);
    cargarAuto(objAuto8);
   }
   else{
    alert("no se encontro Auto")
   }
    }
});
