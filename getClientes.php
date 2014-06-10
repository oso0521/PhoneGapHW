<?php
	$flag_session=0;
	include("header.php");
	/*
		Este archivo regresará un JSON con los clientes existentes en la base de datos para los usuarios firmados y correspondientes
	*/
	//$idUsuario
	/*
		Filtros para llos clientes a regresar
	*/
	
	/*
		//// FIN filtros
	*/
	$query="
		SELECT
			*
		FROM
			Cliente
		WHERE
			habilitado = 1
	";
	$db->setquery("Trae a los clientes bajo los filtros dados",$query);
	$return = NULL;
	$i =0;
	while($datos = $db->fetch())
	{
		$return['Clientes'][$i++] = array ('nombre'=>$datos[nombre],'numero'=>$datos[numero],'localidad'=>$datos[localidad],'direccion'=>$datos[direccion],'referencia'=>$datos[referencia],'telefono'=>$datos[telefono]);
	}
	
	echo json_encode($return);
?>