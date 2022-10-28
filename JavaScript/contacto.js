let btnEnviar = document.querySelectorAll(`#btnEnviar`);
let inputs = document.querySelectorAll(`input`);
let consulta = document.getElementById(`contactoConsulta`);
let inputEmail = inputs[3];
let opcionesGenero = document.getElementById(`opcionesGenero`);
let consultasGuardadas = [];

class consultaEnviada{
    constructor(nombre,apellido,email,telefono,genero,descripcion)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.genero = genero;
        this.descripcion = descripcion
    }
}



btnEnviar[0].addEventListener(`click`,(e)=>{
    e.preventDefault();
validarForm();
})
function validarForm() {
    const CONSULTAS = new consultaEnviada(inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,opcionesGenero.value,consulta.value)
    let validacionesInput = true;

    for (let i = 1; i <4; i++) {
        if (isNaN(inputs[i].value) == false) {
            validacionesInput = false;
        }
    }
    if(validacionesInput== false){
        alert(`Complete todos los campos`);
    }
    if(isNaN(inputs[4].value)==true){
        alert(`Por favor ingrese un número de teléfono válido`);
        validacionesInput = false;
    }
    if(isNaN(consulta.value)==false){
        alert(`Por favor ingrese una consulta válida`)
        validacionesInput = false;
    }
    else if(validacionesInput==true){
        alert(`Formulario enviado`);
        consultasGuardadas.push(CONSULTAS);
        console.log(consultasGuardadas);
    }
}
console.log(btnEnviar);
console.log(inputs);