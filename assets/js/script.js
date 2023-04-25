const titulo = document.querySelector('.nome');

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';


    textoArray.forEach( (letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra; 
        }, 125 * i)
    });
}
typeWrite(titulo)