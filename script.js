//alert("Hola este es mi Javascript");



var miElemento = document.getElementById('Logo');


function CambiarLogo() {

   miElemento.textContent = 'ANDRES';


}


function VolverLogo() {

   miElemento.textContent = 'JESU';
}

miElemento.addEventListener('mouseover', CambiarLogo);

miElemento.addEventListener('mouseout', VolverLogo);

setTimeout(CambiarLogo, 8000);
setTimeout(VolverLogo, 8000);


var mirar = document.querySelector("#contenedor-modal");
var borroso = document.querySelector("main");


function mostrar() {

   mirar.style.display = 'block';
   borroso.style.filter = "blur(8px)";

 }

document.getElementById('correo').addEventListener('click', mostrar);


var quitar = document.querySelector("#contenedor-modal");
var quitarr = document.querySelector("main")

function ocultarf() {

   quitar.style.display = 'none';
   quitarr.style.filter = "none";


 }

 document.getElementById('ocultar').addEventListener('click', ocultarf);


 











