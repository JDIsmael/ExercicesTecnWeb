<?php

$name = $_POST['name'];
$email = $_POST['email'];
$cedula = $_POST['cedula'];
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Examen 3P</title>

    <link rel="stylesheet" href="../css/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

</head>

<body>

    <div id="container">
        <div>
            <p>Nombre: <?php echo $name?> </p>
            <p>Email: <?php echo $email?> </p>
            <p>Cedula: <?php echo $cedula?> </p>
        </div>

        <form id="formArchivo" action="archivo2.php" method="POST">
            <span>Fecha de Nacimiento:</span><input type="date" id="date" name="date">
            <input type="submit" name="enviar" id="send" value="Enviar">
            <input type="reset" name="reset" id="reset" value="Reset">
            <br>
            <br>
        </form>

    </div>
</body>

</html>