let boxProductos= document.getElementById("boxProductos")

let boxProducto= document.createElement("div")

boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto")

let boxImagen = document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class","box-imagen")

let imagenProducto=document.createElement("img")
boxImagen.appendChild(imagenProducto)
imagenProducto.setAttribute("src","img/car.webp")
imagenProducto.setAttribute("class","imagen-producto")

let infoProducto=document.createElement("div")
boxProducto.appendChild(infoProducto)
infoProducto.setAttribute("class","box-info-producto")

let marcaProducto= document.createElement("label")
infoProducto.appendChild(marcaProducto)
let nodoMarcaProducto=document.createTextNode("mazda")
marcaProducto.appendChild(nodoMarcaProducto)

let modeloProducto= document.createElement("label")
infoProducto.appendChild(modeloProducto)
let nodoMarcaProducto2=document.createTextNode(" mazda modelo cx-5 ")
modeloProducto.appendChild(nodoMarcaProducto2)


let precioProducto= document.createElement("label")
let nodoMarcaProducto3=document.createTextNode("$50.000.000")
infoProducto.appendChild(nodoMarcaProducto3);

let yearProducto=document.createElement("label")
infoProducto.appendChild(yearProducto);
let yearProducto1=document.createTextNode("año 2020")
yearProducto.appendChild(yearProducto1)

let kilometro=document.createElement("label");
infoProducto.appendChild(kilometro)
let kilometrostxt=document.createTextNode("20.000")
kilometro.appendChild(kilometrostxt)
