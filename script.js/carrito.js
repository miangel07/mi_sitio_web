let boxPlus=document.getElementById("boxPlus");
let boxMinus=document.getElementById("boxMinus");
let boxUnidades=document.getElementById("boxUnidades");
boxPlus.addEventListener("click",function(){
    let auxUnidades= parseInt(boxUnidades.innerHTML)
    if(auxUnidades <=9){
        document.getElementById("boxUnidades").innerHTML=(auxUnidades + 1 ).toString()
    }
    
});
boxMinus.addEventListener("click",function(){
let auxUnidades2=parseInt(boxUnidades.innerHTML)
if(auxUnidades2 >0){
    document.getElementById("boxUnidades").innerHTML=(auxUnidades2 - 1).toString()
}
});