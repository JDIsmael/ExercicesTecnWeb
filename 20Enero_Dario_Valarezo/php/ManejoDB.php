<?php

require('conecta.php');

class ManejoDB
{

    function guardar($name, $surname, $email)
    {
        $Obj_config = new conecta();
        $link = mysqli_connect($Obj_config->get_dbhost(), $Obj_config->get_dbuser(), $Obj_config->get_dbpass(), $Obj_config->get_dbname()) or die('No pudo conectarse : ' . mysqli_error($link));
        /*$sql= "INSERT INTO usuario (name,surname,email)
    VALUES('$name','$surname','$email')";*/
        $sql = "SELECT * FROM usuario WHERE email = '$email'";
        $result = mysqli_query($link, "SET NAMES 'utf8'");
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        if (mysqli_fetch_array($result) == null) {
            $sql = "INSERT INTO usuario (name,surname,email)
        VALUES('$name','$surname','$email')";
            $result2 = mysqli_query($link, "SET NAMES 'utf8'");
            $result2 = mysqli_query($link, $sql) or die(mysqli_error($link));
            mysqli_close($link);
            return $result2;
        } else {
            mysqli_close($link);
            return -1;
        }
    }

    function buscar($email)
    {
        $Obj_config = new conecta();
        $link = mysqli_connect($Obj_config->get_dbhost(), $Obj_config->get_dbuser(), $Obj_config->get_dbpass(), $Obj_config->get_dbname()) or die('No pudo conectarse : ' . mysqli_error());
        $sql = "SELECT * FROM usuario WHERE email = '$email' AND estado = 1";
        $result = mysqli_query($link, "SET NAMES 'utf8'");
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        mysqli_close($link);
        return $result;
    }

    function mostrar()
    {
        $Obj_config = new conecta();
        $link = mysqli_connect($Obj_config->get_dbhost(), $Obj_config->get_dbuser(), $Obj_config->get_dbpass(), $Obj_config->get_dbname()) or die('No pudo conectarse : ' . mysqli_error());
        $sql = "SELECT * FROM usuario WHERE estado = 1";
        $result = mysqli_query($link, "SET NAMES 'utf8'");
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        mysqli_close($link);
        return $result;
    }

    function eliminar($email)
    {
        $Obj_config = new conecta();
        $link = mysqli_connect($Obj_config->get_dbhost(), $Obj_config->get_dbuser(), $Obj_config->get_dbpass(), $Obj_config->get_dbname()) or die('No pudo conectarse : ' . mysqli_error());
        $sql = "UPDATE usuario SET estado = 0 WHERE email = '$email'";
        $result = mysqli_query($link, "SET NAMES 'utf8'");
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        mysqli_close($link);
        return $result;
    }
    function actualizar($name, $surname, $email)
    {
        $Obj_config = new conecta();
        $link = mysqli_connect($Obj_config->get_dbhost(), $Obj_config->get_dbuser(), $Obj_config->get_dbpass(), $Obj_config->get_dbname()) or die('No pudo conectarse : ' . mysqli_error());
        $sql = "UPDATE usuario SET name= '$name',surname= '$surname',email= '$email' WHERE email = '$email'";
        $result = mysqli_query($link, "SET NAMES 'utf8'");
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        mysqli_close($link);
        return $result;
    }
}
