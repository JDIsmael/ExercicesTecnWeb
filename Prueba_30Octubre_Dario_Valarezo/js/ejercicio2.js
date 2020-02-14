var nombre = prompt("ingrese su nombre:");
var edad = prompt("Ingrese su Edad:");
var bisiesto = Math.trunc(edad / 4);
document.write("Su Nombre es: " + nombre + "</br>La edad que tiene es: " + edad + "</br>Los dias que ha vivido son: " + (edad * 365 + bisiesto) + " Dias");