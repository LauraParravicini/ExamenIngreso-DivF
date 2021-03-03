
function mostrar()
{
	let i;
	let nombre, tipo, precio, cant, categoria, fabricante;
	let cantDesinfectante = 0;
	let cantBactericida = 0;
	let cantDetergente = 0;
	let cantDesinfecIngresado = 0;
	let cantBactIngresado = 0;
	let cantDetergIngresado = 0;
	let cantDetergBarato = 0;
	
	let fabricanteMasCaro, categoriaMasCaro;
	let masCaro = Number.MIN_VALUE;

	let promedioDesinfectante;
	let promedioBactericida;
	let promedioDetergente;

	for(i = 0 ; i < 5 ; i++){
		nombre = prompt("Ingrese nombre de prod: ");

		tipo = prompt("Ingrese tipo de producto: ");
		while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){
			tipo = prompt("Error. Ingrese tipo de producto: ");
		}
		
		precio = parseFloat(prompt("Ingrese precio: "));
		while(precio < 100 || precio > 300){
				precio = parseFloat(prompt("Error. Ingrese precio: "));
		}
		
		cant = parseInt(prompt("Ingrese cantidad: "));
		while(cant <= 0 || cant > 1000 ){
				cant = parseInt(prompt("Ingrese cantidad: "));
		}

		
		categoria = prompt("Ingrese categoria: ");
		while(categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente"){
			categoria = prompt("Error. Ingrese categoria: ");
		}

		fabricante = prompt("Ingrese fabricante: ");

		//Punto B
		
		switch(categoria){
			case "desinfectante":
				cantDesinfectante += cant;
				cantDesinfecIngresado++;
			break;
			case "bactericida":
				cantBactericida += cant;
				cantBactIngresado++;
			break;
			case "detergente":
				cantDetergente += cant;
				cantDetergIngresado++;
			break;	
		}
		
		//Punto C
		
		if(categoria == "detergente" && precio <= 200){
			cantDetergBarato += cant;
		}

		//Punto D
	
		if(precio > masCaro){
			masCaro = precio;
			fabricanteMasCaro = fabricante;
			categoriaMasCaro = categoria;
		}

	}
	//-------------- Punto A ------------
	

	if(cantDesinfectante > 0){
		promedioDesinfectante = cantDesinfectante / cantDesinfecIngresado;
		alert("A) Promedio desinfectante : " + promedioDesinfectante);
	}else{ alert("No se ingresaron desinfectantes "); }

	if(cantBactericida > 0){
		promedioBactericida = cantBactericida / cantBactIngresado;
		alert("A) Promedio bactericida : " + promedioBactericida);
	}else{ alert("No se ingresaron bactericidas "); }

	if(cantDetergente > 0){
		promedioDetergente = cantDetergente / cantDetergIngresado;
		alert("A) Promedio detergente : " + promedioDetergente);
	}else{ alert("No se ingresaron detergentes "); }

	//-------- Punto B -------
	if(cantDesinfectante > cantBactericida && cantDesinfectante > cantDetergente){
		alert("B)Hay mas de desinfectante");
	}else if(cantBactericida >= cantDetergente){
		alert("B)Hay mas de bactericidas");
	}else{
		alert("B)Hay mas de detergentes ");
	}

	//--------- Punto C ----------
	alert("C) Detergentes que salen menos de de 200: " + cantDetergBarato);
	//---------- Punto D ----------
	alert("D) Fabricante y categoria del mas caro: " + fabricanteMasCaro + " " + categoriaMasCaro);
}