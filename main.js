// Creación variables (no cambian, entonces constantes)
// Localización de los elementos en HTML mediante su Id
const input = document.getElementById('pantalla');
const resolver = document.getElementById('resolver');
const reset = document.getElementById('btn_reset');
const uno = document.getElementById('btn_uno');
const dos = document.getElementById('btn_dos');
const tres = document.getElementById('btn_tres');
const cuatro = document.getElementById('btn_cuatro');
const cinco = document.getElementById('btn_cinco');
const seis = document.getElementById('btn_seis');
const siete = document.getElementById('btn_siete');
const ocho = document.getElementById('btn_ocho');
const nueve = document.getElementById('btn_nueve');
const cero = document.getElementById('btn_cero');
const sumar = document.getElementById('btn_sumar');
const restar = document.getElementById('btn_restar'); 
const multiplicar = document.getElementById('btn_multiplicar'); 
const dividir = document.getElementById('btn_dividir'); 
let sumaTotal = 0;
let cifras = [];
let operacion = null; // crear la variable de operación

//Eventos de click
btn_uno.addEventListener('click', function(){
    input.value += 1;
})
btn_dos.addEventListener('click', function(){
    input.value += 2;
})
btn_tres.addEventListener('click', function(){
    input.value += 3;
})
btn_cuatro.addEventListener('click', function(){
    input.value += 4;
})
btn_cinco.addEventListener('click', function(){
    input.value += 5;
})
btn_seis.addEventListener('click', function(){
    input.value += 6;
})
btn_siete.addEventListener('click', function(){
    input.value += 7;
})
btn_ocho.addEventListener('click', function(){
    input.value += 8;
})
btn_nueve.addEventListener('click', function(){
    input.value += 9;
})
btn_cero.addEventListener('click', function(){
    input.value += 0;
})


sumar.addEventListener('click', function(){
    cifras.push(Number(input.value));
    input.value = null;
    operacion = "suma"; // asignar el tipo de operación
})
restar.addEventListener('click', function(){
    cifras.push(Number(input.value));
    input.value = null;
    operacion = "resta"; // asignar el tipo de operación
})
multiplicar.addEventListener('click', function(){
    cifras.push(Number(input.value));
    input.value = null;
    operacion = "multiplicacion"; // asignar el tipo de operación
})
dividir.addEventListener('click', function(){
    cifras.push(Number(input.value));
    input.value = null;
    operacion = "division"; // asignar el tipo de operación
})
resolver.addEventListener('click', function(){
    cifras.push(Number(input.value));
    // bucle
    sumaTotal = cifras[0]; // asignar el primer valor a la suma total
    cifras.forEach(function(cifra, index){
        if (index > 0) { // ignorar el primer valor
            switch (operacion) { // usar un switch para realizar la operación adecuada
                case "suma":
                    sumaTotal += cifra;
                    break;
                case "resta":
                    sumaTotal -= cifra;
                    break;
                case "multiplicacion":
                    sumaTotal *= cifra;
                    break;
                case "division":
                    sumaTotal /= cifra;
                    break;
            }
        }
    })

    input.value = sumaTotal;
    operacion = null; 
})
reset.addEventListener('click', function(){
    input.value = null;
    cifras = [];
    operacion = null;
})
