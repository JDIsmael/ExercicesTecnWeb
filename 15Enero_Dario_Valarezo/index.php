<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Condicional Switch</title>
</head>

<body>
    <h1>Condicional Switch. Ejemplo</h1>

    <form action="" method="POST">
        <input type="text" name="dato" id="dato">
        <input type="submit">
    </form>

    <?php
/*Declaramos una variable con un valor de muestra */
$posicion = $_POST['dato'];
echo "La variable posicion es {$posicion}";
echo "<br>";

switch($posicion){
case "arriba": 
       echo "La variable contiene el valor de arriba";
       break;
case "abajo": 
       echo "La variable contiene el valor de abajo";
       break;
default: 
       echo "La variable contiene otro valor distinto arriba y abajo";
}
?>
</body>

</html>