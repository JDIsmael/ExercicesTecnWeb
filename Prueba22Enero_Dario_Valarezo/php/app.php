<?php

$intNumber = $_POST['intNumber'];
$opcion = $_POST['opcion'];

$gestor1 = fopen("resource1.txt", "a+");
$gestor2 = fopen("resource2.txt", "r+");
$gestor = fopen("resource2.txt", "w+");
$gestor3 = fopen("resource2.txt", "a+");

    fwrite($gestor, $intNumber."\n\n");

function llenar($intNumber)
{
    $check = true;
    $cont = 1;
    $aux = 0;
    for ($i = 0; $i < $intNumber; $i++)
        if ($check) {
            for ($j = 0; $j < $intNumber; $j++)
                $numeros[$i][$j] = $cont++;
            $aux = $cont + $intNumber - 1;
            $cont += $intNumber;
            $check = false;
        } else {
            for ($j = 0; $j < $intNumber; $j++)
                $numeros[$i][$j] = $aux--;
            $check = true;
        }
    return $numeros;
}
$texto = "";

if ($opcion == 0) {
    $numeros = llenar($intNumber);
    for ($i = 0; $i < $intNumber; $i++) {
        for ($j = 0; $j < $intNumber; $j++)
            $texto = $texto . $numeros[$i][$j] . "  ";
        $texto = $texto . "\n";
    }
    $texto = $texto . "\n\n";
    
    fwrite($gestor1, $texto);
} else if ($opcion == 1) {
    $valorRecuperado = fgets($gestor2);
    $numeros = llenar($valorRecuperado);
    for ($i = 0; $i < $intNumber; $i++) {
        for ($j = 0; $j < $intNumber; $j++)
            $texto = $texto . $numeros[$i][$j] . "  ";
        $texto = $texto . "\n";
    }
    $texto = $texto . "\n";
    fwrite($gestor3, $texto);


} else {
    $numeros = llenar($intNumber);
    echo "<br>valor ingresado: " . $intNumber;
    echo "<br><br>Matrix<br><br> ";
    for ($i = 0; $i < $intNumber; $i++) {
        for ($j = 0; $j < $intNumber; $j++) {
            echo $numeros[$i][$j] . "&nbsp;&nbsp;";
        }
        echo "<br>";
    }
}








/*

    <?php

$intNumber = $_POST['intNumber'];
$opcion = $_POST['opcion'];
$check = true;
$cont = 1;
$aux = 0;

$gestor1 = fopen("resource1.txt", "w+");
$gestor2 = fopen("resource2.txt", "r+");
$gestor3 = fopen("resource2.txt", "w+");

fwrite($gestor3, $intNumber);

for ($i = 0; $i < $intNumber; $i++)
    if ($check) {
        for ($j = 0; $j < $intNumber; $j++)
            $numeros[$i][$j] = $cont++;
        $aux = $cont + $intNumber - 1;
        $cont += $intNumber;
        $check = false;
    } else {
        for ($j = 0; $j < $intNumber; $j++)
            $numeros[$i][$j] = $aux--;
        $check = true;
    }

$texto = "";

if ($opcion == 0) {
    for ($i = 0; $i < $intNumber; $i++) {
        for ($j = 0; $j < $intNumber; $j++)
            $texto = $texto . $numeros[$i][$j] . "  ";
        $texto = $texto . "\n";
    }


    fwrite($gestor1, $texto);
} else if ($opcion == 1) {
    $valorRecuperado = fgets($gestor2);
    


} else {
    echo "<br>valor ingresado: " . $intNumber;
    echo "<br><br>Matrix<br><br> ";
    for ($i = 0; $i < $intNumber; $i++) {
        for ($j = 0; $j < $intNumber; $j++) {
            echo $numeros[$i][$j] . "&nbsp;&nbsp;";
        }
        echo "<br>";
    }
}




    }*/
