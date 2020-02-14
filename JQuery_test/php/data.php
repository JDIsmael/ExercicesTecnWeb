<?php
  $json = array();
    $json[] = array(
        'name' => $_POST['name'],
        'surname' => $_POST['surname']
      );
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>