<?php
require("ManejoDB.php");

class RN_crud
{

	function guardar($name, $surname, $email)
	{
		$Obj = new ManejoDB();
		return $Obj->guardar($name, $surname, $email);
	}

	function buscar($email)
	{
		$Obj = new ManejoDB();
		return $Obj->buscar($email);
	}

	function mostrar()
	{
		$Obj = new ManejoDB();
		return $Obj->mostrar();
	}

	function eliminar($email)
	{
		$Obj = new ManejoDB();
		return $Obj->eliminar($email);
	}
	function actualizar($name, $surname, $email)
	{
		$Obj = new ManejoDB();
		return $Obj->actualizar($name, $surname, $email);
	}
}
?>