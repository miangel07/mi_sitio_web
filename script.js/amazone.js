let puntaje5 = document.getElementById('puntaje5');
let puntaje4 = document.getElementById('puntaje4');
let puntaje3 = document.getElementById('puntaje3');
let puntaje2 = document.getElementById('puntaje2');
let puntaje1 = document.getElementById('puntaje1');

let btnGraficar = document.getElementById('Graficar')

btnGraficar.addEventListener('click', function(){
 let   val5 = parseInt(puntaje5.value);
 let   val4 = parseInt(puntaje4.value);
 let   val3 = parseInt(puntaje3.value);
 let   val2 = parseInt(puntaje2.value);
 let   val1 = parseInt(puntaje1.value);

   let  sumaTotal = (val5+val4+val3+val2+val1);

   let  por5 = (val5*100)/sumaTotal;
   let  por4 = (val4*100)/sumaTotal;
   let  por3 = (val3*100)/sumaTotal;
   let  por2 = (val2*100)/sumaTotal;
   let  por1 = (val1*100)/sumaTotal;

    alert(por1);
});