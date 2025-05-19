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


boton_1.addEventListener("click",()=>{entrada_numero.value += "1";});
boton_2.addEventListener("click",()=>{entrada_numero.value += "2";});
boton_3.addEventListener("click",()=>{entrada_numero.value += "3";});
boton_4.addEventListener("click",()=>{entrada_numero.value += "4";});
boton_5.addEventListener("click",()=>{entrada_numero.value += "5";});
boton_6.addEventListener("click",()=>{entrada_numero.value += "6";});
boton_7.addEventListener("click",()=>{entrada_numero.value += "7";});
boton_8.addEventListener("click",()=>{entrada_numero.value += "8";});
boton_9.addEventListener("click",()=>{entrada_numero.value += "9";});
boton_0.addEventListener("click",()=>{entrada_numero.value += "0";});

boton_suma.addEventListener("click",()=>{entrada_numero.value += "+";});
boton_resta.addEventListener("click",()=>{entrada_numero.value += "-";});
boton_multiplicacion.addEventListener("click",()=>{entrada_numero.value += "*";});
boton_division.addEventListener("click",()=>{entrada_numero.value += "/";});


boton_total.addEventListener("click",totalnumero);

function totalnumero(){
	const resultado = math.simplify(entrada_numero.value);
	entrada_numero.value = resultado;
}