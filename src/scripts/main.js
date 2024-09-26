document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formulario').addEventListener('submit', function(e){
        e.preventDefault();

        let numeroMaximo = parseInt(document.getElementById('numeroSorteio').value);
        
        let numeroAleatorio = Math.random() * numeroMaximo
        
        let resultado = Math.floor(numeroAleatorio + 1)
       document.getElementById('resultado').innerText = resultado;
    })
})