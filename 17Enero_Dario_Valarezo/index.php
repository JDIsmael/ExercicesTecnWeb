<?php
$array1 = array(
    "foo" => "bar",
    "bar" => "foo",
);
// a partir de PHP 5.4
$array2 = [
    "foo" => "bar",
    "bar" => "foo",
];


echo "Ejemplo #1<br><br>";
echo '<br>Forma 1: $array1 = array(
    "foo" => "bar",
    "bar" => "foo",
    );<br>';

foreach ($array1 as $clave => $valor) {
    // $array[3] se actualizará con cada valor de $array...
    echo "<br> clave: {$clave} =>  valor: {$valor} <br>";
}

/*for( $i; $i<sizeof(array1); $i++)
    echo */

echo '<br>Forma 2: $array2 = [
    "foo" => "bar",
    "bar" => "foo",
    ];<br>';
foreach ($array2 as $clave => $valor) {
    // $array[3] se actualizará con cada valor de $array...
    echo "<br> clave: {$clave} =>  valor: {$valor} <br>";
}
echo "<br><br>Ejemplo #2<br><br>";


$array = array(1 => "a", "1" => "b", 1.5 => "c", true => "d");
var_dump($array);

echo "<br><br>Ejemplo Colección<br><br>";

$colors = array('rojo', 'azul', 'verde', 'amarillo');
foreach ($colors as $color) {
    echo "¿Le gusta el $color?<br>";
}
echo "<br><br>Ejemplo :Cambiando elemento en el bucle<br><br>";

foreach ($colors as &$color) {
    $color = strtoupper($color);
}
unset($color); /* se asegura de que escrituras subsiguientes a $color
        no modifiquen el último elemento del arrays */
// Alternativa para versiones anteriores
foreach ($colors as $key => $color) {
    $colors[$key] = strtoupper($color);
}
print_r($colors);

echo "<br><br> Ejemplo de array_replace()<br><br>";


$base = array("naranja", "plátano", "manzana", "frambuesa");
$reemplazos = array(0 => "piña", 4 => "cereza");
$reemplazos2 = array(0 => "uva");

$cesta = array_replace($base, $reemplazos, $reemplazos2);
print_r($cesta);
echo "<br><br>Arrays recursivos y multi-dimensionales<br><br>";

$fruits = array ( "fruits" => array ( "a" => "orange",
"b" => "banana",
"c" => "apple"
),
"numbers" => array ( 1,
2,
3,
4,
5,
6
),
"holes" => array ( "first",
5 => "second",
"third"
)
);
?>
