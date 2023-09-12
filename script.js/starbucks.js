 let iceGreen = document.getElementById("iceGreen");
let iceRose = document.getElementById("iceRose");
let icePink = document.getElementById("icePink");
var elemento = document.getElementById("img");
iceGreen.addEventListener("click", function(){
    mainCircle.classList.add("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    elemento.setAttribute("src", "/img/verde.png");
}
/* "mouseover" */
)
iceRose.addEventListener("click", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.add("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    elemento.setAttribute("src", "/img/rosa.png");
})
icePink.addEventListener("click", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.add("main-circle-pink");
    elemento.setAttribute("src", "/img/rosa2.png");
})



