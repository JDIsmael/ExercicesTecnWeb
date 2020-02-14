<?php 
if(filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL))
    echo 'correo Valido';
else
    echo 'No Valido';

?>