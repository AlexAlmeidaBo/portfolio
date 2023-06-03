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



function toggleActiveClass() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      if (this.classList.contains('isActive')) {
        this.classList.remove('isActive');
      } else {
        // Remove a classe 'isActive' de todos os links
        for (var j = 0; j < links.length; j++) {
          links[j].classList.remove('isActive');
        }

        this.classList.add('isActive');
      }
    });
  }
}

toggleActiveClass();  




