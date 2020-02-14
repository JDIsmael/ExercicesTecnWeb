//Definiendo Horario por Dias
var d1 ={
  h1: "Inglés",
  h2: "Inglés",
  h3: "Español",
  h4: "Informatica",
  h5: "Informatica",
  h6: "Química",
  h7: "Biología",
  u: "Diario"
}
var d2 ={
  h1: "Matematicas",
  h2: "Religión",
  h3: "Español",
  h4: "Español",
  h5: "Física",
  h6: "Química",
  h7: "Química",
  u: "Diario"
}
var d3 ={
  h1: "Edu. Física",
  h2: "Edu. Física",
  h3: "Estadistica",
  h4: "Estadistica",
  h5: "Física",
  h6: "Inglés",
  h7: "Inglés",
  u: "Edu. Física"
}
var d4 ={
  h1: "Dir. Curso",
  h2: "Investigación",
  h3: "Matematicas",
  h4: "Física",
  h5: "Física",
  h6: "Inglés",
  h7: "Inglés",
  u: "Diario"
}
var d5 ={
  h1: "Sociales",
  h2: "Sociales",
  h3: "Música",
  h4: "Música",
  h5: "Filosofía",
  h6: "Matematicas",
  h7: "Matematicas",
  u: "Diario"
}
var d6 ={
  h1: "Español",
  h2: "Hist. de Colombia",
  h3: "Filosofía",
  h4: "Etica",
  h5: "Química",
  h6: "Inglés",
  h7: "Inglés",
  u: "Edu. Física"
}
//Definir Función

function cargarHorario() {
  //Dia 1
  document.getElementById("c1l1").innerHTML = d1.h1
  document.getElementById("c1l2").innerHTML = d1.h2
  document.getElementById("c1l3").innerHTML = d1.h3
  document.getElementById("c1l4").innerHTML = d1.h4
  document.getElementById("c1l5").innerHTML = d1.h5
  document.getElementById("c1l6").innerHTML = d1.h6
  document.getElementById("c1l7").innerHTML = d1.h7
  document.getElementById("u1").innerHTML = d1.u
  //Dia 2
  document.getElementById("c2l1").innerHTML = d2.h1
  document.getElementById("c2l2").innerHTML = d2.h2
  document.getElementById("c2l3").innerHTML = d2.h3
  document.getElementById("c2l4").innerHTML = d2.h4
  document.getElementById("c2l5").innerHTML = d2.h5
  document.getElementById("c2l6").innerHTML = d2.h6
  document.getElementById("c2l7").innerHTML = d2.h7
  document.getElementById("u2").innerHTML = d2.u
  //Dia 3
  document.getElementById("c3l1").innerHTML = d3.h1
  document.getElementById("c3l2").innerHTML = d3.h2
  document.getElementById("c3l3").innerHTML = d3.h3
  document.getElementById("c3l4").innerHTML = d3.h4
  document.getElementById("c3l5").innerHTML = d3.h5
  document.getElementById("c3l6").innerHTML = d3.h6
  document.getElementById("c3l7").innerHTML = d3.h7
  document.getElementById("u3").innerHTML = d3.u
  //Dia 4
  document.getElementById("c4l1").innerHTML = d4.h1
  document.getElementById("c4l2").innerHTML = d4.h2
  document.getElementById("c4l3").innerHTML = d4.h3
  document.getElementById("c4l4").innerHTML = d4.h4
  document.getElementById("c4l5").innerHTML = d4.h5
  document.getElementById("c4l6").innerHTML = d4.h6
  document.getElementById("c4l7").innerHTML = d4.h7
  document.getElementById("u4").innerHTML = d4.u
  //Dia 5
  document.getElementById("c5l1").innerHTML = d5.h1
  document.getElementById("c5l2").innerHTML = d5.h2
  document.getElementById("c5l3").innerHTML = d5.h3
  document.getElementById("c5l4").innerHTML = d5.h4
  document.getElementById("c5l5").innerHTML = d5.h5
  document.getElementById("c5l6").innerHTML = d5.h6
  document.getElementById("c5l7").innerHTML = d5.h7
  document.getElementById("u5").innerHTML = d5.u
  //Dia 6
  document.getElementById("c6l1").innerHTML = d6.h1
  document.getElementById("c6l2").innerHTML = d6.h2
  document.getElementById("c6l3").innerHTML = d6.h3
  document.getElementById("c6l4").innerHTML = d6.h4
  document.getElementById("c6l5").innerHTML = d6.h5
  document.getElementById("c6l6").innerHTML = d6.h6
  document.getElementById("c6l7").innerHTML = d6.h7
  document.getElementById("u6").innerHTML = d6.u
  //
  return;
}

//Cargar Horario Completo de Dias
cargarHorario();
