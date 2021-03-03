function mostrar()
{
	let nombre, obraSocial, edad, tempCorporal, sexo;
	let precioPasajero = 600;
	let cantViejosOSDE = 0;
	let edadMujerJoven = Number.MAX_VALUE;
	let nombreMujerJoven;
	let tempMujerJoven = 0;
	let precioTotal = 0;
	let cantPAMI = 0;
	let cantPasajeros = 0;

	do{
		nombre = prompt("Ingrese nombre pasajero: ");

		obraSocial = prompt("Ingrese obra social: ");
		while(obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "otras"){
			obraSocial = prompt("Error. Ingrese obra social: ");
		}
		
		edad = parseInt(prompt("Ingrese edad: "));
		while(edad <= 17){
				edad = parseInt(prompt("Invalido. Ingrese edad: "));
		}
		tempCorporal = parseFloat(prompt("Ingrese temp Corporal: "));
		while(tempCorporal <= 0 || isNaN(tempCorporal)){
				tempCorporal = parseFloat(prompt("Error. Ingrese temp Corporal: "));
		}
		
		sexo = prompt("Ingrese sexo: ");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error. Ingrese sexo: ");
		}

		//Punto A

		if(obraSocial == "OSDE" && edad > 60){
			cantViejosOSDE++;
		}
		
		//Punto B 
		//3B Mujer con PAMI
		
		if(obraSocial == "PAMI" && sexo == "f" && edad < edadMujerJoven){
			edadMujerJoven = edad;
			nombreMujerJoven = nombre;
			tempMujerJoven = tempCorporal;
		}
		
		//Punto C
		
		precioTotal += precioPasajero;

		//Punto D
		
		cantPasajeros++;
		if(obraSocial == "PAMI"){
			cantPAMI++;
		}

		seguir = prompt("Quiere seguir? s/n : ");
	}while(seguir == "s");

	//Punto A
	if(cantViejosOSDE > 0){
		alert("A)Adultos mayores con OSDE: "+ cantViejosOSDE);
	}else{
		alert("A)No se ingreso gente vieja con OSDE");
	}

	//Punto B
	if(tempMujerJoven > 0){
		alert("B)Mujer mas joven con PAMI: " + nombreMujerJoven + " " + tempMujerJoven);
	}else{ 
		alert("B)No ingreso ninguna mujer con PAMI. "); 
	}

	//Punto C
	alert("C)Precio total bruto: " + precioTotal);

	//Punto D
	let porcentajePAMI = cantPAMI * 100 / cantPasajeros;
	let precioDescuento = precioTotal;
	let descuento;

	if(porcentajePAMI > 50){
		descuento = precioTotal * 25 /100;
		precioDescuento -= descuento;
		alert("D)Hay muchos con PAMI, va descuento del 25: " + precioDescuento);
	}else{
		alert("D) No hay tantos de PAMI");
	}
}
