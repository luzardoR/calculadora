const $ = (e) => document.querySelector(e);
const input_num= $(".form-control");
const boton_1 = $(`.btn1`);
const boton_2 = $(`.btn2`);
const boton_3 = $(`.btn3`);
const boton_4 = $(`.btn4`);
const boton_5 = $(`.btn5`);
const boton_6 = $(`.btn6`);
const boton_7 = $(`.btn7`);
const boton_8 = $(`.btn8`);
const boton_9 = $(`.btn9`);
const boton_0 = $(`.btn0`);

const boton_suma = $(`.btn-suma`);
const boton_resta = $(`.btn-resta`);
const boton_multiplicacion = $(`.btn-multiplicacion`);
const boton_division = $(`.btn-division`);
const boton_total = $(`.btntotal`);

boton_1.addEventListener("click",()=>{input_num.value += "1";});
boton_2.addEventListener("click",()=>{input_num.value += "2";});
boton_3.addEventListener("click",()=>{input_num.value += "3";});
boton_4.addEventListener("click",()=>{input_num.value += "4";});
boton_5.addEventListener("click",()=>{input_num.value += "5";});
boton_6.addEventListener("click",()=>{input_num.value += "6";});
boton_7.addEventListener("click",()=>{input_num.value += "7";});
boton_8.addEventListener("click",()=>{input_num.value += "8";});
boton_9.addEventListener("click",()=>{input_num.value += "9";});
boton_0.addEventListener("click",()=>{input_num.value += "0";});

boton_suma.addEventListener("click",()=>{input_num.value += "+";});
boton_resta.addEventListener("click",()=>{input_num.value += "-";});
boton_multiplicacion.addEventListener("click",()=>{input_num.value += "*";});
boton_division.addEventListener("click",()=>{input_num.value += "/";});

boton_total.addEventListener("click",()=>{input_num.value = math.simplify(input_num.value)});
