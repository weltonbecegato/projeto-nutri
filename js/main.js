// console.error("falha ao atualizar");
let titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA Nutrição e Dietética";

// pegar o peso
let paciente = document.querySelector(".paciente");
let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;


//pegar altura
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let pesoValido = true;
let alturaValida = true;



// validar dados
if (peso <= 0 || peso > 1000){
    console.error("peso inválido");
    pesoValido = false;
}
if (altura <= 0 ){
    console.error("altura inválida");
    alturaValida = false;
}


if (pesoValido  && alturaValida ) {

// calcular IMC
let imc = peso / (altura * altura);
//console.log (imc);

// para exponenciação pode colocar let imc = peso / altura ** 2;

// colocar o imc na tabela

let tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc;
}