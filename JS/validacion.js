var nombre = document.getElementById('name');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error');
error.style.color = 'red';




var form =document.getElementById('valida-form');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        var mensajesError=[];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido')
    }


    error.innerHTML = mensajesError.join ( ', ');


    });



