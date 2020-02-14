<?php
$numero1 = $_POST['numero1'];
$numero2 = $_POST['numero2'];
$numero3 = $_POST['numero3'];
switch(true){
    case $numero1 > $numero2 && $numero1 > $numero3:
        echo "El numero mayor es: $numero1";
        $check = $numero1;
    break;
    case $numero2 > $numero1 && $numero2 > $numero3:
        echo "El numero mayor es: $numero2";
        $check = $numero2;
    break;
    case $numero3 > $numero1 && $numero3 > $numero2:
        echo "El numero mayor es: $numero3";
        $check = $numero3;
    break;
    case $numero1 == $numero2 && $numero1 == $numero3:
        echo "los numeros ingresados son iguales <br>valor: $numero1";
        $check = $numero1;
    break;
    case $numero3 == $numero1:
        echo "El numero3 es igual al numero1 <br> valor: $numero3";
        $check = $numero1;
    break;
    case $numero3 == $numero2:
        echo "El numero3 es igual al numero2 <br> valor: $numero3";
        $check = $numero2;
    break;
    case $numero1 == $numero2:
        echo "El numero2 es igual al numero1 <br> valor: $numero1";
        $check = $numero1;
    break;
}
echo '<br><div style="float:left; margin:30px;">';
echo "<br>Tabla Con For<br><br>";
for($i=1;$i<=5;$i++){
    echo "$check x $i = ".($check*$i)."<br>";
}
$cont = 1;
echo '</div><div style="float:rigth;margin:30px;">';
echo "<br>Tabla con While<br><br>";
while($cont <=5){
    echo "$check x $cont = ".$check*$cont."<br>";
    $cont++;
}
echo '</div>';
?>