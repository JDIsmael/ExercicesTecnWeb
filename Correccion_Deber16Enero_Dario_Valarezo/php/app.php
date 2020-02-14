<?php
/* Creamos una tabla de valores de seno y coseno de 0 a 2
en incrementos de 0.01. Los valores negativos que resulten los queremos
mostrar en rojo, y los valores positivos en azul */
/* En primer lugar vamos a crear una funcion con las condicionales
Aqui estamos usando la sentencion de FUNCTION al que le pasamos un valor
dependiendo de este valor, ejecutamos una condicion IF..ELSE...
y asignamos un color al tipo de letra para generar la tabla
*/
$min = $_POST['min'];
$max = $_POST['max'];
$incremento = $_POST['incremento'];

function muestra($valor) {
if ($valor < 0)
$color = "red";
else
$color = "blue";
echo "<td><font color='$color'>$valor</font></td>";
}

echo '<table border="1"> <caption>Tabla condicional seno-coseno</caption> <tr> <th>Valor</th>  <th>Seno</th> <th>Coseno</th> </tr>';


for ($x=$min; $x<=$max; $x+=$incremento){
echo "<tr>";
muestra($x);
muestra(sin(deg2rad($x)));
muestra(cos(deg2rad($x)));
echo "</tr>";
}
echo "</table>";
?>

