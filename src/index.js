

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let apodo = document.getElementById("apodo");
let edad = document.getElementById("edad");
let correo = document.getElementById("correo");


let botton = document.getElementById("botton");


let nameP = document.getElementById("nameP");
let apellidoP = document.getElementById("apellidoP");
let usuarioP = document.getElementById("usuarioP");
let edadP = document.getElementById("edadP");
let correoP = document.getElementById("correoP");


botton.addEventListener("click" , function () {
    
    nameP.innerHTML = nombre.value;
    apellidoP.innerHTML = apellido.value;
    usuarioP.innerHTML = apodo.value;
    edadP.innerHTML = edad.value;
    correoP.innerHTML = correo.value;

})

































