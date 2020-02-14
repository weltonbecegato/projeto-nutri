let pacientes = document.querySelectorAll(".paciente");

//calculo para todos os pacientes

//for Atualizado (com função)
pacientes.forEach(paciente => {

    //for tradicional
    //for (var i = 0; i < pacientes.length; i++) {
        //   let paciente = pacientes[i];
        
        // pegar o peso
        let peso = paciente.querySelector(".info-peso").textContent;
        //pegar altura
        let altura = paciente.querySelector(".info-altura").textContent;
        
        let pesoValido = true;
        let alturaValida = true;
        
        
        let tdIMC = paciente.querySelector(".info-imc");
        // validar dados
 
        
        if (peso <= 0 || peso > 1000) {
            pesoValido = false;
            tdIMC.textContent = "Peso Inválido";
            paciente.classList.add("paciente-invalido");
        }
        if (altura <= 0) {
            alturaValida = false;
            tdIMC.textContent = "altura inválida";
            paciente.classList.add("paciente-invalido");
        }

        if (!alturaValida  && !pesoValido){
            tdIMC.textContent = "Peso e Altura inválido";       
        }
        
        
        if (pesoValido && alturaValida) {
            // calcular IMC
            let imc = peso / altura **2;
            // colocar o imc na tabela
            tdIMC.textContent = imc.toFixed(2);
        }
        
        
    });
        
        





