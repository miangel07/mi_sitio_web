let boxSlider = document.getElementById("boxSlider")

let arrowRight = document.getElementById("arrowRight")
let arrowLeft = document.getElementById("arrowLeft")


arrowRight.addEventListener("click", function () {
    if (boxSlider.classList.contains("slider-img1")) {
        boxSlider.classList.remove("slider-img1")
        boxSlider.classList.add("slider-img2")

    }
    else if (boxSlider.classList.contains("slider-img2")) {
        boxSlider.classList.remove("slider-img2")
        boxSlider.classList.add("slider-img3")

    }
    else if (boxSlider.classList.contains("slider-img3")) {
        boxSlider.classList.remove("slider-img3")
        boxSlider.classList.add("slider-img4")

    }
})

arrowLeft.addEventListener("click", function () {
    if (boxSlider.classList.contains("slider-img4")) {
        boxSlider.classList.remove("slider-img4")
        boxSlider.classList.add("slider-img3")

    }
    else if (boxSlider.classList.contains("slider-img3")) {
        boxSlider.classList.remove("slider-img3")
        boxSlider.classList.add("slider-img2")

    }
    else if (boxSlider.classList.contains("slider-img2")) {
        boxSlider.classList.remove("slider-img2")
        boxSlider.classList.add("slider-img1")

    }
})

/* para que se desplace de forma automatica */


setInterval(function(){
    if (boxSlider.classList.contains("slider-img1")) {
        boxSlider.classList.remove("slider-img1")
        boxSlider.classList.add("slider-img2")

    }
    else if (boxSlider.classList.contains("slider-img2")) {
        boxSlider.classList.remove("slider-img2")
        boxSlider.classList.add("slider-img3")

    }
    else if (boxSlider.classList.contains("slider-img3")) {
        boxSlider.classList.remove("slider-img3")
        boxSlider.classList.add("slider-img4")

    }else{
        boxSlider.classList.remove("slider-img4")
        boxSlider.classList.add("slider-img1")
    }

},5000)