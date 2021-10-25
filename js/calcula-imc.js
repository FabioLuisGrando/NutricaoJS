var titulo = document.querySelector(".titulo");
titulo.textContent = "Fábio Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // console.log(paciente); // tr do HTML
    // console.log(tdPeso); // td específica do peso do paciente 1 por enquanto, porém não é o valor
    // console.log(peso); // td específica do peso do paciente 1, puxando o valor(100)
    // console.log(tdAltura);
    // console.log(altura);

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso Inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        console.log("Altura Inválido");
        alturaEhValida = false;
        tdIMC.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdIMC.textContent = imc;
    };
}

function validaPeso(peso){

    if(peso>=0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <=3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}