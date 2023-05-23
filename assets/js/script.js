/*const titulo = document.querySelector('.nome');
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';   
    textoArray.forEach( (letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra; 
        }, 125 * i)
    });
}
typeWrite(titulo)*/

const typewriter = document.querySelector(".nome");
const text = "Alex Almeida";

let i = 0;
let isDeleting = false;

function type() {
  const speed = Math.random() * 200 + 50;

  if (!isDeleting && i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);

  } else if (isDeleting && i >= 0) {
    typewriter.innerHTML = text.substring(0, i);
    i--;
    setTimeout(type, speed);

  } else {
    isDeleting = !isDeleting;
    setTimeout(type, 1500);
  }
}
type()

const ativo = document.querySelector('.ativo');
const menu = document.querySelector('a');

function active(){
    if(ativo.classList.contains('ativo')){
      ativo.classList.remove('ativo')
    } else {
      ativo.classList.add('ativo')
    }
}

menu.addEventListener('click', ativo);