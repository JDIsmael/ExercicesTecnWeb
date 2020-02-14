//Definiendo Fecha
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth() + 1; //January is 0!
var mm1 = hoy.getMonth() + 1;
var yyyy = hoy.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

hoy = dd + "/" + mm + "/" + yyyy;
//Fin
var actual = yyyy, mm1, dd
function getDayNumber(baseDate, targetDate, daysInCycle) {
    var startOfBaseDate = new Date(baseDate).setHours(0, 0, 0, 0);
    var startOfTargetDate = new Date(targetDate).setHours(0, 0, 0, 0);
    var differenceInDays = Math.round((startOfTargetDate - startOfBaseDate) / 864e5);
    return ((differenceInDays % daysInCycle + daysInCycle) % daysInCycle) + 1;
}
var diact = getDayNumber(new Date(2019, 3, 21), new Date(yyyy, mm1, dd), 6)
document.getElementById("fecha").innerHTML = hoy + " Correspondiente a día " + diact;
if (diact < 6) {
  diasig = diact + 1
} else {
  diasig = diact - 5
}
document.getElementById("dia").innerHTML = diasig
//Definir Materias de Día
var d1 ={
  h1: "Inglés",
  h2: "x2",
  h3: "Español",
  h4: "Informatica",
  h5: "x2",
  h6: "Química",
  h7: "Biología"
}
var d2 ={
  h1: "Matematicas",
  h2: "Religión",
  h3: "Español",
  h4: "x2",
  h5: "Física",
  h6: "Química",
  h7: "x2"
}
var d3 ={
  h1: "Edu. Física",
  h2: "x2",
  h3: "Estadistica/Geometria",
  h4: "x2",
  h5: "Física",
  h6: "Inglés",
  h7: "x2"
}
var d4 ={
  h1: "Dir. Curso",
  h2: "Investigación",
  h3: "Matematicas",
  h4: "Física",
  h5: "x2",
  h6: "Inglés",
  h7: "x2"
}
var d5 ={
  h1: "Sociales/Catedra",
  h2: "x2",
  h3: "Música",
  h4: "x2",
  h5: "Filosofía",
  h6: "Matematicas",
  h7: "x2"
}
var d6 ={
  h1: "Español",
  h2: "Historia de Colombia",
  h3: "Filosofía",
  h4: "Etica",
  h5: "Química",
  h6: "Inglés",
  h7: "x2"
}
switch (diact) {
  case 1:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d1.h1
    document.getElementById("c1l2").innerHTML = d1.h2
    document.getElementById("c1l3").innerHTML = d1.h3
    document.getElementById("c1l4").innerHTML = d1.h4
    document.getElementById("c1l5").innerHTML = d1.h5
    document.getElementById("c1l6").innerHTML = d1.h6
    document.getElementById("c1l7").innerHTML = d1.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d2.h1
    document.getElementById("c2l2").innerHTML = d2.h2
    document.getElementById("c2l3").innerHTML = d2.h3
    document.getElementById("c2l4").innerHTML = d2.h4
    document.getElementById("c2l5").innerHTML = d2.h5
    document.getElementById("c2l6").innerHTML = d2.h6
    document.getElementById("c2l7").innerHTML = d2.h7

    break;
  case 2:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d2.h1
    document.getElementById("c1l2").innerHTML = d2.h2
    document.getElementById("c1l3").innerHTML = d2.h3
    document.getElementById("c1l4").innerHTML = d2.h4
    document.getElementById("c1l5").innerHTML = d2.h5
    document.getElementById("c1l6").innerHTML = d2.h6
    document.getElementById("c1l7").innerHTML = d2.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d3.h1
    document.getElementById("c2l2").innerHTML = d3.h2
    document.getElementById("c2l3").innerHTML = d3.h3
    document.getElementById("c2l4").innerHTML = d3.h4
    document.getElementById("c2l5").innerHTML = d3.h5
    document.getElementById("c2l6").innerHTML = d3.h6
    document.getElementById("c2l7").innerHTML = d3.h7
    break;
  case 3:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d3.h1
    document.getElementById("c1l2").innerHTML = d3.h2
    document.getElementById("c1l3").innerHTML = d3.h3
    document.getElementById("c1l4").innerHTML = d3.h4
    document.getElementById("c1l5").innerHTML = d3.h5
    document.getElementById("c1l6").innerHTML = d3.h6
    document.getElementById("c1l7").innerHTML = d3.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d4.h1
    document.getElementById("c2l2").innerHTML = d4.h2
    document.getElementById("c2l3").innerHTML = d4.h3
    document.getElementById("c2l4").innerHTML = d4.h4
    document.getElementById("c2l5").innerHTML = d4.h5
    document.getElementById("c2l6").innerHTML = d4.h6
    document.getElementById("c2l7").innerHTML = d4.h7
    break;
  case 4:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d4.h1
    document.getElementById("c1l2").innerHTML = d4.h2
    document.getElementById("c1l3").innerHTML = d4.h3
    document.getElementById("c1l4").innerHTML = d4.h4
    document.getElementById("c1l5").innerHTML = d4.h5
    document.getElementById("c1l6").innerHTML = d4.h6
    document.getElementById("c1l7").innerHTML = d4.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d5.h1
    document.getElementById("c2l2").innerHTML = d5.h2
    document.getElementById("c2l3").innerHTML = d5.h3
    document.getElementById("c2l4").innerHTML = d5.h4
    document.getElementById("c2l5").innerHTML = d5.h5
    document.getElementById("c2l6").innerHTML = d5.h6
    document.getElementById("c2l7").innerHTML = d5.h7
    break;
  case 5:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d5.h1
    document.getElementById("c1l2").innerHTML = d5.h2
    document.getElementById("c1l3").innerHTML = d5.h3
    document.getElementById("c1l4").innerHTML = d5.h4
    document.getElementById("c1l5").innerHTML = d5.h5
    document.getElementById("c1l6").innerHTML = d5.h6
    document.getElementById("c1l7").innerHTML = d5.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d6.h1
    document.getElementById("c2l2").innerHTML = d6.h2
    document.getElementById("c2l3").innerHTML = d6.h3
    document.getElementById("c2l4").innerHTML = d6.h4
    document.getElementById("c2l5").innerHTML = d6.h5
    document.getElementById("c2l6").innerHTML = d6.h6
    document.getElementById("c2l7").innerHTML = d6.h7
    break;
  case 6:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = d6.h1
    document.getElementById("c1l2").innerHTML = d6.h2
    document.getElementById("c1l3").innerHTML = d6.h3
    document.getElementById("c1l4").innerHTML = d6.h4
    document.getElementById("c1l5").innerHTML = d6.h5
    document.getElementById("c1l6").innerHTML = d6.h6
    document.getElementById("c1l7").innerHTML = d6.h7
    document.getElementById("2").innerHTML = "Día " + diasig
    document.getElementById("c2l1").innerHTML = d1.h1
    document.getElementById("c2l2").innerHTML = d1.h2
    document.getElementById("c2l3").innerHTML = d1.h3
    document.getElementById("c2l4").innerHTML = d1.h4
    document.getElementById("c2l5").innerHTML = d1.h5
    document.getElementById("c2l6").innerHTML = d1.h6
    document.getElementById("c2l7").innerHTML = d1.h7
    break;
  default:
    let dano = "DAÑO"
    document.getElementById("1").innerHTML = dano
    document.getElementById("2").innerHTML = dano
    document.getElementById("c1l1").innerHTML = dano
    document.getElementById("c1l2").innerHTML = dano
    document.getElementById("c1l3").innerHTML = dano
    document.getElementById("c1l4").innerHTML = dano
    document.getElementById("c1l5").innerHTML = dano
    document.getElementById("c1l6").innerHTML = dano
    document.getElementById("c1l7").innerHTML = dano
    document.getElementById("c2l1").innerHTML = dano
    document.getElementById("c2l2").innerHTML = dano
    document.getElementById("c2l3").innerHTML = dano
    document.getElementById("c2l4").innerHTML = dano
    document.getElementById("c2l5").innerHTML = dano
    document.getElementById("c2l6").innerHTML = dano
    document.getElementById("c2l7").innerHTML = dano
}

//Definir si es Sábado o Domingo
function cambiarHoy(texto) {
  document.getElementById("1").innerHTML = texto
  document.getElementById("c1l1").innerHTML = texto
  document.getElementById("c1l2").innerHTML = texto
  document.getElementById("c1l3").innerHTML = texto
  document.getElementById("c1l4").innerHTML = texto
  document.getElementById("c1l5").innerHTML = texto
  document.getElementById("c1l6").innerHTML = texto
  document.getElementById("c1l7").innerHTML = texto
}
function cambiarMañana(texto) {
  document.getElementById("2").innerHTML = texto
  document.getElementById("c2l1").innerHTML = texto
  document.getElementById("c2l2").innerHTML = texto
  document.getElementById("c2l3").innerHTML = texto
  document.getElementById("c2l4").innerHTML = texto
  document.getElementById("c2l5").innerHTML = texto
  document.getElementById("c2l6").innerHTML = texto
  document.getElementById("c2l7").innerHTML = texto
}
var diaSemana = moment().format('dddd')
console.log(diaSemana);
switch (diaSemana) {
  case "Saturday":
    cambiarHoy("Sábado")
    cambiarMañana("Domingo")
    break;
  case "Sunday":
    cambiarHoy("Domingo")
    break;
  default:

}
