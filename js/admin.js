var BASE_JSON={"clientes": [{}], "productos":[{}]};

function getClients()
{
	var atr = localStorage.getItem("car");
		if(atr== "" || atr == null || typeof atr == 'undefined')
		{
			myJSONObject ={"canciones": [{}], "albums":[{}]};
		}else
		{
			myJSONObject = JSON.parse(""+atr);	
		}
		
		$.each(myJSONObject['canciones'],function(i,elem)
		{
			if(elem.id == id)
			{
				todobien = false;
				return;	
			}
		});
		
		if(!todobien)
		{
			console.log("Elemento repetido");
			return;	
		}
		var len = myJSONObject.canciones.length -1;		
		myJSONObject['canciones'].push({"id":id});		
		window.localStorage.setItem("car",JSON.stringify(myJSONObject) );
		$("#cuentaCarrito").html((myJSONObject.canciones.length-1+myJSONObject.albums.length-1));		
		/*$.each(myJSONObject['canciones'],function(i,elem)
		{			
			console.log(elem.id);
		});	*/		
}