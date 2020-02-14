<?php
$date = $_POST['date'];

$fechaEntera = time();
$anioA = date("Y", $fechaEntera);
$mesA = date("m", $fechaEntera);

$array = explode('-', $date);


$age = $anioA - $array[0];

$mesesCumplir = $mesA - $array[1];


echo "Usted tiene: ".$age." años<br>";
echo "Le faltan: ".$mesesCumplir." meses para cumplir años<br>";
?>
