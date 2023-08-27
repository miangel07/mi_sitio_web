let iceGreen = document.getElementById("iceGreen");
let iceRose = document.getElementById("iceRose");
let icePink = document.getElementById("icePink");
let mainImg = document.getElementById("mainImg");
iceGreen.addEventListener("click", function(){
    mainCircle.classList.add("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    mainImg.setAttribute("src","/img/verde.png");
}
)
iceRose.addEventListener("click", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.add("main-circle-rose");
    mainCircle.classList.remove("main-circle-pink");
    mainImg.setAttribute("src","/img/rosa.png");
})
icePink.addEventListener("click", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.remove("main-circle-rose");
    mainCircle.classList.add("main-circle-pink");
    mainImg.setAttribute("src","/img/rosa2.png");
})

