

const respuesta = document.querySelector(".resultados");
const entrada_numero = document.querySelector(".form-control");
const boton_1 = document.querySelector(".btn1");
const boton_2 = document.querySelector(".btn2");
const boton_3 = document.querySelector(".btn3");
const boton_4 = document.querySelector(".btn4");
const boton_5 = document.querySelector(".btn5");
const boton_6 = document.querySelector(".btn6");
const boton_7 = document.querySelector(".btn7");
const boton_8 = document.querySelector(".btn8");
const boton_9 = document.querySelector(".btn9");
const boton_0 = document.querySelector(".btn0");
const boton_suma = document.querySelector(".btn-suma");
const boton_resta = document.querySelector(".btn-resta");
const boton_multiplicacion = document.querySelector(".btn-multiplicacion");
const boton_division = document.querySelector(".btn-division");
const boton_total = document.querySelector(".btntotal");
let valor_a = 0;
let valor_b = 0;
boton_1.addEventListener("click",agregar_uno);

function agregar_uno(){
	entrada_numero.value = entrada_numero.value+"1";
}
boton_2.addEventListener("click",agregar_dos);

function agregar_dos(){
	entrada_numero.value = entrada_numero.value+"2";
}

boton_3.addEventListener("click",agregar_tres);

function agregar_tres(){
	entrada_numero.value = entrada_numero.value+"3";
}

boton_4.addEventListener("click",agregar_cuatro);

function agregar_cuatro(){
	entrada_numero.value = entrada_numero.value+"4";
}

boton_5.addEventListener("click",agregar_cinco);

function agregar_cinco(){
	entrada_numero.value = entrada_numero.value+"5";
}

boton_6.addEventListener("click",agregar_seis);

function agregar_seis(){
	entrada_numero.value = entrada_numero.value+"6";
}

boton_7.addEventListener("click",agregar_siete);

function agregar_siete(){
	entrada_numero.value = entrada_numero.value+"7";
}

boton_8.addEventListener("click",agregar_ocho);

function agregar_ocho(){
	entrada_numero.value = entrada_numero.value+"8";
}

boton_9.addEventListener("click",agregar_nueve);

function agregar_nueve(){
	entrada_numero.value = entrada_numero.value+"9";
}

boton_0.addEventListener("click",agregar_cero);

function agregar_cero(){
	entrada_numero.value = entrada_numero.value+"0";
}

boton_suma.addEventListener("click",suma);

function suma(){
	entrada_numero.value = entrada_numero.value+"+";
	
}
boton_resta.addEventListener("click",resta);

function resta(){
	entrada_numero.value = entrada_numero.value+"-";

}
boton_multiplicacion.addEventListener("click",multiplicacion);

function multiplicacion(){
	entrada_numero.value = entrada_numero.value+"*";

}
boton_division.addEventListener("click",division);

function division(){
	entrada_numero.value = entrada_numero.value+"/";

}


boton_total.addEventListener("click",totalnumero);

function totalnumero(){
	let formula = math.simplify(entrada_numero.value);
	entrada_numero.value = formula;
}