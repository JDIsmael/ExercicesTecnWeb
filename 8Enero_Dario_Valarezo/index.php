<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
       var miVariable=prompt("Ingrese su nombre");
        var dato=prompt("Que posicion del dato desea observar")
    </script>
    <?php
    /*
    $mensaje_es="Hola";
    $mensaje_en="Hello";
    $idioma = "es";
    $mensaje ="mensaje_".$idioma;
    print $$mensaje;
    */
    $dis[0] = "domingo";
    $dis[1] = "lunes";
    $dis[2] = "martes";
    $dis[3] = "miercoles";
    $dis[4] = "jueves";
    $dis[5] = "viernes";
    $dis[6] = "sabado";
    
        $var_PHP = "<script>document.writeln(miVariable)</script>";//
        ob_start(); //Start output buffer
        echo "<return_value><script>document.write(dato)</script></return_value>";
        $output = ob_get_contents(); //Grab output
            
        echo "<br>".$output."<br>";
        echo "hola ",$var_PHP ,"<br>Su dato es: ". $dis[$output];
/*
        $a=8;
        $b=3;
        echo $a + $b, "<br>";        
        echo $a - $b, "<br>" ;       
        echo $a * $b, "<br>" ;      
        echo $a / $b, "<br>" ;
        $a++;
        echo $a, "<br>";
        $b--;
        echo $b, "<br>";
        echo "<br>IGUALDADES<br>";
        $a=8;
        $b=3;
        $c=3;
        echo $a == $b, "<br>";      //Imprime uno si es verdadero  
        echo $a != $b, "<br>" ;       
        echo $a < $b, "<br>" ;      
        echo $a > $b, "<br>" ;       
        echo $a >= $c, "<br>" ;       
        echo $a <= $c, "<br>" ;

        echo "<br>OPERADORES LOGICOS<br>";
        $a=8;
        $b=3;
        $c=3;
        echo ($a == $b)&&($c > $b), "<br>";      //Imprime uno si es verdadero  
        echo ($a == $b)||($b == $c), "<br>";      //Imprime uno si es verdadero  
        echo ($b <= $c), "<br>";      //Imprime uno si es verdadero  */



        

    ?>
</body>
</html>


