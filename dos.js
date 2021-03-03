function mostrar()
{
  //El A de los que no trabajan o estan buscando

  let nombre, situacionLaboral, cantMaterias, edad, sexo;
	let seguir;

  let mejorPromedio = Number.MIN_VALUE;
  let mejorPromNombre;
  let maxEdad = Number.MIN_VALUE;
  let nombreViejoEst;
  let acumNotaBusc = 0;
  let cantBuscando = 0;
  let acumNotaTrabaj = 0;
  let cantTrabajando = 0;
  let acumNotaEstud = 0;
  let cantEstud = 0;
  let menorMaterias = Number.MAX_VALUE;
  let nombreMenorMaterias, edadMenorMaterias;

	do{
		nombre = prompt("Ingrese nombre: ");

		situacionLaboral = prompt("Ingrese situacion laboral buscando/trabajando/solo estudiante : ");
		while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
			situacionLaboral = prompt("Error. Ingrese situacion laboral: ");
		}
		
    cantMaterias = parseInt(prompt("Ingrese cant materias: "));
    while(cantMaterias <= 0 || cantMaterias >= 8){
        cantMaterias = parseInt(prompt("Error. Ingrese cant materias: "));
    }

    sexo = prompt("Ingrese sexo: ");
    while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
      sexo = prompt("Error. Ingrese sexo: ");
    }

    notaPromedio = parseFloat(prompt("Ingrese nota promedio: "));
    while(notaPromedio < 0 || notaPromedio > 10){
        notaPromedio = parseFloat(prompt("Error. Ingrese nota promedio: "));
    }

		edad = parseInt(prompt("Ingrese edad: "));
		while(edad <= 0 || isNaN(edad)){
				edad = parseInt(prompt("Invalido. Ingrese edad: "));
		}

    //Punto A
    
    if(notaPromedio > mejorPromedio && situacionLaboral == "solo estudiante"){
      mejorPromedio = notaPromedio;
      mejorPromNombre = nombre;
    }

    //Punto B

    if(edad > maxEdad && situacionLaboral == "solo estudiante"){
      maxEdad = edad;
      nombreViejoEst = nombre;
    }

    //Punto C

    switch(situacionLaboral){
      case "buscando":
				acumNotaBusc += notaPromedio;
				cantBuscando++;
			break;
			case "trabajando":
				acumNotaTrabaj += notaPromedio;
				cantTrabajando++;
			break;
			case "solo estudiante":
				acumNotaEstud += notaPromedio;
				cantEstud++;
			break;
    }

    //Punto D

    if(cantMaterias < menorMaterias && situacionLaboral == "buscando"){
      menorMaterias = cantMaterias;
      nombreMenorMaterias = nombre;
      edadMenorMaterias = edad;
    }

    seguir = prompt("Quiere seguir ingresando? s/n ");

  }while(seguir == "s");

  //Punto A
  if(cantEstud > 0){
    alert("A) Nombre del mejor promedio estudiante: " + mejorPromNombre);
  //Punto B
    alert("B) Nombre del mas viejo estudiante: " + nombreViejoEst);
  }else{
    alert("No se ingresaron estudiantes. ");
  }

  //Punto C
  let promedioBuscando;
  if(cantBuscando > 0){
		promedioBuscando = acumNotaBusc / cantBuscando;
		alert("C) Promedio de notas de gente buscando : " + promedioBuscando);
	}else{ alert("C)No se ingresaron personas buscando "); }

	let promedioTrabajando;
  if(cantTrabajando > 0){
		promedioTrabajando = acumNotaTrabaj / cantTrabajando;
		alert("C) Promedio de notas de gente buscando : " + promedioTrabajando);
	}else{ alert("No se ingresaron personas trabajando "); }

  let promedioEstudiante;
  if(cantEstud > 0){
		promedioEstudiante = acumNotaEstud / cantEstud;
		alert("C) Promedio de notas de gente estudiante : " + promedioEstudiante);
	}else{ alert("C)No se ingresaron personas estudiantes "); }

  //Punto D
  if(cantBuscando > 0){ 
    alert("D) Persona que cursa menos materia y buscando trabajo: "+ nombreMenorMaterias + " . Edad: " + edadMenorMaterias);
  }else{
    alert("D)No se ingresaron personas buscando. ");
  }
}


