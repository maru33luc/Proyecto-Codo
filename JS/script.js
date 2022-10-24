const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


function validateForm() {
  let a= document.forms["myForm"]["fname"].value;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let nombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let telefono= /^\d{7,14}$/;

  if (!nombre.test(fname.value)){
    alert("Formato de nombre no válido");
    return false;
  }
  if (a == "") {
    alert("Nombre no puede estar vacío");
    return false;
  }
  let b = document.forms["myForm"]["lname"].value;
  if (b == "") {
    alert("Apellido no puede estar vacío");
    return false;
  }
  if (!nombre.test(lname.value)){
    alert("Formato de apellido no válido");
    return false;
  }
  let c = document.forms["myForm"]["email"].value;
  if (c == "") {
    alert("Mail no puede estar vacío");
    return false;}
  if (!regexEmail.test(email.value)) {
    alert("Dirección de Mail no válida");
    return false; 
  }
  let d = document.forms["myForm"]["phone"].value;
  if (d == "") {
    alert("Teléfono no puede estar vacío");
    return false;
  }
  if (!telefono.test(phone.value)){
    alert("Número de teléfono no válido ( 7-14 números)");
    return false;
  }
    
}

function traerDatosAPI() {
  fetch('https://jsonplaceholder.typicode.com/users') 
      .then(datos => datos.json()) 
      .then(datos => {
         
         var myNumeroAleatorio = Math.floor(Math.random()*(9))
         
         contenido.innerHTML +=
              `<div class="tarjeta">
              
               Nombre: ${datos[myNumeroAleatorio].name}<br>
               Email: ${datos[myNumeroAleatorio].email}<br>
               Ciudad: ${datos[myNumeroAleatorio].address.city}
               </div>`
              
      })
}