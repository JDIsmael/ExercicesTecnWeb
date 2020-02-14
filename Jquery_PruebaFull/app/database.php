<?php

$connection = mysqli_connect(
  'localhost', 'admin', '12345678', 'tasks-database'
);

// for testing connection
#if($connection) {
#  echo 'database is connected';
#}

?>
