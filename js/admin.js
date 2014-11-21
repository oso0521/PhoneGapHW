function getProductosABC()
{
	abc_table("Producto","headers:idProducto-Id,idUnidad-Unidad,idProveedor-Proveedor|fk_idUnidad:nombre|fk_idProveedor:nombre","contenido");	
}

function getProveedoresABC()
{
	abc_table("Proveedor","","contenido");	
}

function getClientesABC()
{
	abc_table("Cliente","fk_idRuta:nombre|fk_idPromotor:nombre","contenido");	
}

function getPromotoresABC()
{
	abc_table("Promotor","","contenido");	
}

function getConversionABC()
{
	abc_table("Conversion","fk_unidad1:nombre|fk_unidad2:nombre|headers:unidad1-De,unidad2-A,conversion-Cantidad","contenido");	
}