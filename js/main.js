"use strict";

//Parte 1
const imagen = document.querySelector("#imagen");
let cant= 0;

const añadir = (op) =>{
    if(op == 0){
        imagen.classList.remove("border");
    }else if(op == 1){
        imagen.classList.add("border");
    }
}

imagen.onclick = function(){
    if(cant == 0){
        cant = 1;
    }else if(cant == 1){
        cant = 0;
    }
    añadir(cant);
}


// Parte 2



const btn = document.getElementById("btnllevar");


btn.onclick = function(){

    const cantS1 = parseInt(document.getElementById("sticker-1").value);
    const cantS2 = parseInt(document.getElementById("sticker-2").value);
    const cantS3 = parseInt(document.getElementById("sticker-3").value);
    const agregar = document.querySelector(".mensajes");

    let suma = parseInt(cantS1 + cantS2 + cantS3);

    if(suma <= 10){
        const h3 = document.createElement("h3");
        console.log(agregar);
        h3.className ="mensaje-correct";
        h3.textContent = `Llevas ${suma} stickers`; 
        console.log(agregar);
        agregar.appendChild(h3);
        console.log(agregar);
        
    }else if(suma >= 10){
        const h3 = document.createElement("h3");
        console.log(agregar);
        h3.className="mensaje-error";
        h3.textContent = `Llevas demasiados stickers`;
        agregar.appendChild(h3);
        console.log(agregar);
    }
    
}

//parte 3

const select = document.querySelector("#select3");
const btnE = document.getElementById("btnVerificar");
const padre = document.getElementById("mensajes");


    select.onclick = function(){
        const selet1 = document.getElementById("select1").value;
        const selet2 = document.getElementById("select2").value;
        const selet3 = document.getElementById("select3").value;
        const cadena = selet1 + selet2 + selet3;
        validar(cadena);
}


const validar = (cadena) =>{
    console.log(cadena);
    
if(cadena === "911"){
    const p = document.createElement("p");
    p.className = "mensaje";
    p.textContent = "Password 1 correcto";
    padre.appendChild(p);
}else if(cadena === "714"){
    const p = document.createElement("p");
    p.className = "mensaje";
    padre.appendChild(p);
}else{
    const p = document.createElement("p");
    p.className = "mensaje";
    p.textContent = "Password incorrecto";
    padre.appendChild(p);
}
}

btnE.onclick = function(){
validar();
}
