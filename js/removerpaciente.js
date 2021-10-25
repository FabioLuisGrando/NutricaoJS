var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");
    
    
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);

});



// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com duplo click");
//         this.remove(); // this tem haver com quem chamou o evento, no caso o paciente
//     });
// });