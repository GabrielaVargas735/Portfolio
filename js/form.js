const form = document.querySelector("form");
const input = document.querySelectorAll('.requerido');
let invalid = '';
let valid = '';


form.addEventListener("submit", function(e) {
    e.preventDefault();
    input.forEach(element =>{
      if(element.value != ''){
        invalid = '';
        valid = alert("Su formulario ha sido enviado con éxito");
      }else{
        element.style.border = 'solid 3px red';
        invalid = alert("Error. Llene el espacio con borde rojo");
        valido = '';
      }
    });
  });