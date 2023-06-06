
let box = document.getElementById("box");
let box2 = document.getElementById("box2");

box.addEventListener("click", function() {
    if (box.classList.contains("box")) {
        box.classList.add("box2");
        box.classList.remove("box");
    }
    else {
        box2.classList.remove("box");
        box2.classList.add("box2");  
    }
});

 