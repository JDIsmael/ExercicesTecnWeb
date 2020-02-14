<?php

include ("RN_crud.php");

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$opcion = $_POST['opcion'];

$Obj_RN_crud=new RN_crud();

if($opcion == 0){
    if($name != null && $surname != null && $email != null)
        echo $Obj_RN_crud->guardar($name,$surname,$email);
    else
        echo -1;

}else if($opcion == 1){
    if($name != null && $surname != null && $email != null)
    echo $Obj_RN_crud->actualizar($name, $surname, $email);
    else
        echo -1;

}else if($opcion == 2){
    if($email != null){
        $datos =  $Obj_RN_crud->buscar($email);
        while($arreglo = mysqli_fetch_array($datos)) {
            echo $arreglo['name']."-+-".$arreglo['surname']."-+-".$arreglo['email']."-+-";
            echo "<tr> <td>".$arreglo['name']."</td><td>".$arreglo['surname']."</td><td> ".$arreglo['email']."</td></tr>";
        }
        echo "</tbody>";
    }
    else
        echo -1;

}else if($opcion == 3){
    if($email != null)
        echo $Obj_RN_crud->eliminar($email);
    else
        echo -1;

}else if($opcion == 4){
    $datos =  $Obj_RN_crud->mostrar();
        while($arreglo = mysqli_fetch_array($datos)) {
            echo "<tr> <td>".$arreglo['name']."</td><td>".$arreglo['surname']."</td><td> ".$arreglo['email']."</td></tr>";
        }
        echo "</tbody>";
}
