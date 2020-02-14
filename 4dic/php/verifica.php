<?php
if (filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)) {
    echo 'Correo Válido';
}
else {
    echo 'No Válido';
}

/*   $_POST['correo'] asocia la variable correo que enviamos con el método POST
     tomando el valor que se escribió en el campo cuando el contenido de la petición
	  es del tipo application/x-www-form-urlencoded o multipart/form-data.
	  
	  filter_var es una función de PHP que filtra un valor con distintos tipos de validaciones,
	  en este caso FILTER_VALIDATE_EMAIL bastará para comprobar si es un correo válido.
	  Retornando el valor filtrado si es verdadero o FALSE en caso contrario.
	  
	  */
?>