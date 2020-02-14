//Definiendo Fecha
//Código Anterior
  // var hoy = new Date();
  // var dd = hoy.getDate();
  // var mm = hoy.getMonth() + 1; //January is 0!
  // var mm1 = hoy.getMonth() + 1;
  // var yyyy = hoy.getFullYear();
  //
  // if (dd < 10) {
  //   dd = "0" + dd;
  // }
  //
  // if (mm < 10) {
  //   mm = "0" + mm;
  // }
  //
  // hoy = dd + "/" + mm + "/" + yyyy;
  // //Fin
  // var actual = yyyy, mm1, dd
  // function getDayNumber(baseDate, targetDate, daysInCycle) {
  //     var startOfBaseDate = new Date(baseDate).setHours(0, 0, 0, 0);
  //     var startOfTargetDate = new Date(targetDate).setHours(0, 0, 0, 0);
  //     var differenceInDays = Math.round((startOfTargetDate - startOfBaseDate) / 864e5);
  //     return ((differenceInDays % daysInCycle + daysInCycle) % daysInCycle) + 1;
  // }
  // var diact = getDayNumber(new Date(2019, 3, 21), new Date(yyyy, mm1, dd), 6)
//Fin Codigo Anterior
//Definir Materias de Día
//Definimos la variable global
var cicloAct = null
var d1 ={
  h1: "Inglés",
  h2: "x2",
  h3: "Español",
  h4: "Informatica",
  h5: "x2",
  h6: "Química",
  h7: "Biología",
  u: "Diario"
}
var d2 ={
  h1: "Matematicas",
  h2: "Religión",
  h3: "Español",
  h4: "x2",
  h5: "Física",
  h6: "Química",
  h7: "x2",
  u: "Diario"
}
var d3 ={
  h1: "Edu. Física",
  h2: "x2",
  h3: "Estadistica/Geometria",
  h4: "x2",
  h5: "Física",
  h6: "Inglés",
  h7: "x2",
  u: "Edu. Física"
}
var d4 ={
  h1: "Dir. Curso",
  h2: "Investigación",
  h3: "Matematicas",
  h4: "Física",
  h5: "x2",
  h6: "Inglés",
  h7: "x2",
  u: "Diario"
}
var d5 ={
  h1: "Sociales/Catedra",
  h2: "x2",
  h3: "Música",
  h4: "Música",
  h5: "Filosofía",
  h6: "Matematicas",
  h7: "x2",
  u: "Diario"
}
var d6 ={
  h1: "Español",
  h2: "Historia de Colombia",
  h3: "Filosofía",
  h4: "Etica",
  h5: "Química",
  h6: "Inglés",
  h7: "x2",
  u: "Edu. Física"
}
// switch (diact) {
//   case 1:
//     obtenerHorario(d1, d2)
//     break;
//   case 2:
//     obtenerHorario(d2, d3)
//     break;
//   case 3:
//     obtenerHorario(d3, d4)
//     break;
//   case 4:
//     obtenerHorario(d4, d5)
//     break;
//   case 5:
//     obtenerHorario(d5, d6)
//     break;
//   case 6:
//     obtenerHorario(d6, d1)
//     break;
//   default:
//     const dano = "DAÑO"
//     document.getElementById("1").innerHTML = dano
//     document.getElementById("2").innerHTML = dano
//     document.getElementById("c1l1").innerHTML = dano
//     document.getElementById("c1l2").innerHTML = dano
//     document.getElementById("c1l3").innerHTML = dano
//     document.getElementById("c1l4").innerHTML = dano
//     document.getElementById("c1l5").innerHTML = dano
//     document.getElementById("c1l6").innerHTML = dano
//     document.getElementById("c1l7").innerHTML = dano
//     document.getElementById("c2l1").innerHTML = dano
//     document.getElementById("c2l2").innerHTML = dano
//     document.getElementById("c2l3").innerHTML = dano
//     document.getElementById("c2l4").innerHTML = dano
//     document.getElementById("c2l5").innerHTML = dano
//     document.getElementById("c2l6").innerHTML = dano
//     document.getElementById("c2l7").innerHTML = dano
// }

//
//Definiendo Funciones.
function mostrarDatos() {
  var hoy = moment().locale('es').format('L')
  if (moment().format('dddd') == "Sunday"){
    document.getElementById("fecha").innerHTML = hoy
    document.getElementById("dia").innerHTML = dian2
  }else if(moment().format('dddd') == "Friday"){
    document.getElementById("fecha").innerHTML = hoy
  }else{
    document.getElementById("fecha").innerHTML = hoy + " Correspondiente a día " + dian1
    document.getElementById("dia").innerHTML = dian2
  }
  return
}
function mostrarDatosOffl() {
  var hoy = moment().locale('es').format('L')
  document.getElementById("fecha").innerHTML = hoy
  document.getElementById("dia").innerHTML = "No Aplica"
  return
}
function obtenerHorario (hoy, man){
  document.getElementById("1").innerHTML = "Día " + dian1
  document.getElementById("c1l1").innerHTML = hoy.h1
  document.getElementById("c1l2").innerHTML = hoy.h2
  document.getElementById("c1l3").innerHTML = hoy.h3
  document.getElementById("c1l4").innerHTML = hoy.h4
  document.getElementById("c1l5").innerHTML = hoy.h5
  document.getElementById("c1l6").innerHTML = hoy.h6
  document.getElementById("c1l7").innerHTML = hoy.h7
  document.getElementById("u1").innerHTML = hoy.u
  document.getElementById("2").innerHTML = "Día " + dian2
  document.getElementById("c2l1").innerHTML = man.h1
  document.getElementById("c2l2").innerHTML = man.h2
  document.getElementById("c2l3").innerHTML = man.h3
  document.getElementById("c2l4").innerHTML = man.h4
  document.getElementById("c2l5").innerHTML = man.h5
  document.getElementById("c2l6").innerHTML = man.h6
  document.getElementById("c2l7").innerHTML = man.h7
  document.getElementById("u2").innerHTML = man.u
  return
}
  //Definir si es Sábado o Domingo
  function cambiarHoy(texto) {
    if(document.URL.indexOf("diab") >= 0){
      document.getElementById("E1").innerHTML = texto
    }
    document.getElementById("Hcom1").innerHTML = texto
    document.getElementById("1").innerHTML = texto
    document.getElementById("c1l1").innerHTML = texto
    document.getElementById("c1l2").innerHTML = texto
    document.getElementById("c1l3").innerHTML = texto
    document.getElementById("c1l4").innerHTML = texto
    document.getElementById("c1l5").innerHTML = texto
    document.getElementById("c1l6").innerHTML = texto
    document.getElementById("c1l7").innerHTML = texto
    document.getElementById("u1").innerHTML = texto
    return
  }
  function cambiarMañana(texto) {
    if(document.URL.indexOf("diab") >= 0){
      document.getElementById("E2").innerHTML = texto
    }
    document.getElementById("Hcom2").innerHTML = texto
    document.getElementById("2").innerHTML = texto
    document.getElementById("c2l1").innerHTML = texto
    document.getElementById("c2l2").innerHTML = texto
    document.getElementById("c2l3").innerHTML = texto
    document.getElementById("c2l4").innerHTML = texto
    document.getElementById("c2l5").innerHTML = texto
    document.getElementById("c2l6").innerHTML = texto
    document.getElementById("c2l7").innerHTML = texto
    document.getElementById("u2").innerHTML = texto
    return
  }
  function alerta() {
    var mes = Number(moment().format('DD'))
    var dia = Number(moment().format('MM'))
    if (mes == 05 && dia == 01 || mes == 06 && dia == 03 || mes == 06 && dia == 24 || mes == 07 && dia == 01 || mes == 07 && dia == 20 || mes == 08 && dia == 07 || mes == 08 && dia == 19 || mes == 10 && dia == 14 || mes == 11 && dia == 04 || mes == 11 && dia == 11) {
      console.log("Capo Festivo en función Alerta");
    }else if (!(diaSemana == "Saturday" || diaSemana == "Sunday")) {
      alert("Se necesita arreglo, el horario está desconfigurado")
    }
    return
  }
  function obtenerCiclo() {
    function nCiclo(texto1) {
      window.cicloAct = texto1
      console.log("Estamos en el ciclo: " + cicloAct)
      document.getElementById("ciclo").innerHTML = "Estamos en el ciclo: " + texto1
      return
    }
    switch (true) {
      case (mes <= 8):
        //Periodo 3
        if (moment().startOf('day').isSameOrBefore('2019-07-17')) {
          nCiclo("1")
        } else if (moment().startOf('day').isSameOrBefore('2019-07-25')) {
          nCiclo("2")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-02')) {
          nCiclo("3")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-13')) {
          nCiclo("4")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-22')) {
          nCiclo("5")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-30')) {
          nCiclo("6")
        } else if (moment().startOf('day').isSameOrBefore('2019-09-09')) {
          nCiclo("7")
        }
        break;
      case (false):
        //Periodo 3
        if (moment().startOf('day').isSameOrBefore('2019-07-17')) {
          nCiclo("1")
        } else if (moment().startOf('day').isSameOrBefore('2019-07-25')) {
          nCiclo("2")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-04')) {
          nCiclo("3")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-13')) {
          nCiclo("4")
        } else if (moment().startOf('day').isSameOrBefore('2019-08-22')) {
          nCiclo("5")
        } else if (moment().startOf('day').isSameOrBefore('2019-09-01')) {
          nCiclo("6")
        } else if (moment().startOf('day').isSameOrBefore('2019-09-09')) {
          nCiclo("7")
        }
        break;
      case (mes >= 9):
        //Periodo 4
        if (moment().startOf('day').isSameOrBefore('2019-09-23')) {
          nCiclo("1")
        } else if (moment().startOf('day').isSameOrBefore('2019-10-01')) {
          nCiclo("2")
        } else if (moment().startOf('day').isSameOrBefore('2019-10-17')) {
          nCiclo("3")
        } else if (moment().startOf('day').isSameOrBefore('2019-10-25')) {
          nCiclo("4")
        } else if (moment().startOf('day').isSameOrBefore('2019-11-05')) {
          nCiclo("5")
          if (moment().startOf('day').isSameOrBefore('2019-10-27') || moment().startOf('day').isSameOrBefore('2019-10-28')){
            alert("Este Periodo solo tiene 6 ciclos, ya vamos en el 5 por lo que deberían de ser las institucionales de menor intensidad. ¡OJO!")
          }
        } else if (moment().startOf('day').isSameOrBefore('2019-11-14')) {
          nCiclo("6")
        } // No hay ciclo 7 en el 4to Periodo
        break;
      default:
    }
}
console.log("El Mes Actual es: " + moment().format('MM'));
var mes = Number(moment().format('MM'))
var dia = Number(moment().format('DD'))
// Define que tipo de variables es   ------>   console.log(typeof mes)
switch (mes >= 03) {
  case ((mes == 10 && dia == 28) || (mes == 11 && dia == 06) /*Domingos*/|| (mes == 10 && dia == 20)):
    var dian1 = 1
    var dian2 = 2
    obtenerHorario(d1, d2)
    mostrarDatos()
    break;
  case ((mes == 10 && dia == 29) || (mes == 11 && dia == 07) ):
    var dian1 = 2
    var dian2 = 3
    obtenerHorario(d2, d3)
    mostrarDatos()
    break;
  case ((mes == 10 && dia == 30) || (mes == 11 && dia == 08) /*Domingos*/ || (mes == 11 && dia == 11)):
    var dian1 = 3
    var dian2 = 4
    obtenerHorario(d3, d4)
    mostrarDatos()
    break;
  case ((mes == 10 && dia == 23) || (mes == 10 && dia == 31) || (mes == 11 && dia == 12) ):
    var dian1 = 4
    var dian2 = 5
    obtenerHorario(d4, d5)
    mostrarDatos()
    break;
  case ((mes == 10 && dia == 24) || (mes == 11 && dia == 01) || (mes == 11 && dia == 13) /*Domingos*/|| (mes == 11 && dia == 04)):
    var dian1 = 5
    var dian2 = 6
    obtenerHorario(d5, d6)
    mostrarDatos()
    break;
  case ((mes == 10 && dia == 25) || (mes == 11 && dia == 05) || (mes == 11 && dia == 14) /*Domingos*/|| (mes == 10 && dia == 27)) :
    var dian1 = 6
    var dian2 = 1
    obtenerHorario(d6, d1)
    mostrarDatos()
    break;
  default:
  window.onload = function() {
  alerta();return
  }
  cambiarHoy("Desconfigurado")
  cambiarMañana("Desconfigurado")
  mostrarDatosOffl()
}
//Obtener Ciclos
obtenerCiclo()
//Fin Obtener Ciclos
//Cargue de Festivos
if (mes == 11 && dia == 03 || mes == 11 && dia == 10) {
  cambiarMañana("Festivo")
}else if (mes == 11 && dia == 04 || mes == 11 && dia == 11) {
  cambiarHoy("Festivo")
}
//Fin Cargue de Festivos
//Avisos varios
if (moment().locale('es').format('L') == "14/11/2019") {
  alert("Hoy se acaba el Cuarto periodo. Exitos en tu vida ¯\_(ツ)_/¯ ")
}else if (cicloAct == "5") {
  alert("En este ciclo son las Institucionales \n de Menor Intensidad.")
}else if(cicloAct == "6"){
  if (moment().locale('es').format('L') == "12/11/2019" && moment().hour() > 14 || moment().locale('es').format('L') == "13/11/2019" || moment().locale('es').format('L') == "14/11/2019" || moment().locale('es').format('L') == "15/11/2019" && moment().hour() < 16){
        location.href="inst"
      }else{
        console.log("Todo Bien, el sistema se detecta fuera de Institucionales")
      }
  console.log("En este ciclo son las Institucionales \n de Mayor Intensidad.")
}
  //Institucionales MENOR INT:
    
  function avisoInstM() {
    alert("Las Institucionales del día se muestran en color naranja a continuación.")
    return
  }
  if (moment().locale('es').format('L') == "27/10/2019"){//DOMINGO
    avisoInstM()
    document.getElementById("c2l1").style.color = "orange"
    document.getElementById("c2l2").style.color = "orange"
    document.getElementById("c2l4").style.color = "orange"
    document.getElementById("c2l5").style.color = "orange"
  }else if(moment().locale('es').format('L') == "28/10/2019"){ //LUNES
    avisoInstM()
    document.getElementById("c1l1").style.color = "orange"
    document.getElementById("c1l2").style.color = "orange"
    document.getElementById("c1l4").style.color = "orange"
    document.getElementById("c1l5").style.color = "orange"
    //
    document.getElementById("c2l2").style.color = "orange"
  }else if(moment().locale('es').format('L') == "29/10/2019"){ //MARTES
    avisoInstM()
    document.getElementById("c2l2").style.color = "orange"
    //
    document.getElementById("c2l1").style.color = "orange"
    document.getElementById("c2l2").style.color = "orange"
    document.getElementById("c2l6").style.color = "orange"
    document.getElementById("c2l7").style.color = "orange"
  }else if(moment().locale('es').format('L') == "30/10/2019"){ //MIERCOLES
    avisoInstM()
    document.getElementById("c1l1").style.color = "orange"
    document.getElementById("c1l2").style.color = "orange"
    document.getElementById("c1l6").style.color = "orange"
    document.getElementById("c1l7").style.color = "orange"
    //
    document.getElementById("c2l2").style.color = "orange"
    document.getElementById("c2l6").style.color = "orange"
    document.getElementById("c2l7").style.color = "orange"
  }else if (moment().locale('es').format('L') == "31/10/2019") {//JUEVES
    avisoInstM()
    document.getElementById("c1l2").style.color = "orange"
    document.getElementById("c1l6").style.color = "orange"
    document.getElementById("c1l7").style.color = "orange"
    //
    document.getElementById("c2l1").style.color = "orange"
    document.getElementById("c2l2").style.color = "orange"
    document.getElementById("c2l3").style.color = "orange"
    document.getElementById("c2l4").style.color = "orange"
    document.getElementById("c2l5").style.color = "orange"
  }else if (moment().locale('es').format('L') == "01/11/2019") {//VIERNES
    avisoInstM()
    document.getElementById("c1l1").style.color = "orange"
    document.getElementById("c1l2").style.color = "orange"
    document.getElementById("c1l3").style.color = "orange"
    document.getElementById("c1l4").style.color = "orange"
    document.getElementById("c1l5").style.color = "orange"
  }else if (moment().locale('es').format('L') == "04/11/2019") {//LUNES FEST
    avisoInstM()
    document.getElementById("c2l2").style.color = "orange"
    document.getElementById("c2l4").style.color = "orange"
    document.getElementById("c2l6").style.color = "orange"
    document.getElementById("c2l7").style.color = "orange"
  }else if (moment().locale('es').format('L') == "05/11/2019") {//MARTES
    avisoInstM()
    document.getElementById("c1l2").style.color = "orange"
    document.getElementById("c1l4").style.color = "orange"
    document.getElementById("c1l6").style.color = "orange"
    document.getElementById("c1l7").style.color = "orange"
  }
  //Fin Institucionales Menor Int.
  //No Hay Clase
if (moment().locale('es').format('L') == "19/06/2019"){
 cambiarMañana("No hay Clase")
}else if(moment().locale('es').format('L') == "20/06/2019"){
 cambiarHoy("No hay Clase")
}
//Fin No hay Clase
////UNIFORMES 
if (moment().locale('es').format('L') == "06/11/2019"){
   document.getElementById("u2").innerHTML = "Edu. Física"
   alert("Mañana es de Gala.")
 }else if(moment().locale('es').format('L') == "07/11/2019"){
   document.getElementById("u1").innerHTML = "Edu. Física"
 }
////UNIFORMES FIN
// --
//Fin Avisos Varios.

//
// console.log(diaSemana);
var diaSemana = moment().format('dddd')
switch (diaSemana) {
  case "Friday":
    cambiarMañana("Sábado")
    break;
  case "Saturday":
    cambiarHoy("Sábado")
    cambiarMañana("Domingo")
    break;
  case "Sunday":
    cambiarHoy("Domingo")
    break;
  default:
}
