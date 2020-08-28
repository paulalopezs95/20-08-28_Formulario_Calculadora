const inputName = document.getElementById('inputName'),
    inputLastName = document.getElementById('inputLastName'),
    inputEmail = document.getElementById('inputEmail'),
    inputPhone = document.getElementById('inputPhone') //capturo el calor del input

function validarFormulario(event) {
    event.preventDefault() //previene la ejecución del navegador por defecto, evitando que se envíe el formulario sin los datos correctos

    if (inputName.value == "") { //la propiedad value me valida el dato del input
        swal("Ingresa un nombre!");
        inputName.classList.add('alert')

    } else if (inputLastName.value == "") {
        swal("Ingresa un apellido!");
        inputLastName.classList.add('alert')

    } else if (inputEmail.value == "") {
        swal("Ingresa un correo!");
        inputEmail.classList.add('alert')

    } else if (inputPhone.value == "") {
        swal("Ingresa un teléfono!")
        inputPhone.classList.add('alert')

    } else {
        swal("Muy bien!", "Ahora nos dirigimos a la calculadora", "success");
        setTimeout(() => window.location = "./calculator/index.html", 2500)


    }

}