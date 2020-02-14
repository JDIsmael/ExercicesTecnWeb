<?php


switch($_POST['opcion']){
    case 1:
        ejericicio1();
    break;
    case 2:
        ejericicio2();
    break;
    case 3:
        ejericicio3();
    break;
}

function ejericicio2(){
    echo "<br><br>EJERCICIO 2<br><br>";
    for ($i = 0; $i < $_POST['tam']; $i++) 
        for ($j = 0; $j < $_POST['tam']; $j++) 
            $matrix[$i][$j] = rand(1, 100);

    for ($i = 0; $i < $_POST['tam']; $i++) 
        for ($j = 0; $j < $_POST['tam']; $j++) 
            echo"posicion [$i] [$j]: ". $matrix[$i][$j]."<br>";

}

function ejericicio3(){
    echo "<br><br>EJERCICIO 3<br><br>";
    for ($i = 0; $i < $_POST['tam']; $i++) 
        for ($j = 0; $j < $_POST['tam']; $j++) 
            $matrix[$i][$j] = rand(97, 122);

    for ($i = 0; $i < $_POST['tam']; $i++) 
        for ($j = 0; $j < $_POST['tam']; $j++) 
            echo "posicion [$i] [$j]: ".chr($matrix[$i][$j])."<br>";

}
function ejericicio1(){
    $matrix = $_POST['matrix'];
    $i = 0;
    $j = 0;
    echo "<br><br>EJERCICIO 1<br><br>";
    foreach ($matrix as $dimension1){
        foreach ($dimension1 as $dimension2){
            echo "posicion [$i] [$j]: $dimension2<br>";
             $j++;
        }
        $i++;
        $j = 0;
    }
}
