let containerProductos = document.querySelector(`.container`);
let containerCarrito = document.querySelector(`.carrito`); 
let carritoCompras = [];
const guardapolvos = [
    {
    id: 0,
    nombre: "Thea",
    precio: 2800,
    img: "../images/productos/producto1.jpeg"
},
{
    id:1,
    nombre:"Kira",
    precio:3000,
    img: "../images/productos/producto2.jpeg"
}
,
{
    id:2,
    nombre:"Valen",
    precio:2800,
    img:"../images/productos/producto3.jpeg"
}
,
{
    id:3,
    nombre:"Denise",
    precio:3300,
    img:"../images/productos/producto4.jpeg"
}
,
{
    id:4,
    nombre:"Roma",
    precio:3300,
    img:"../images/productos/producto5.jpeg"
}
,
{
    id:5,
    nombre:"Coni",
    precio:2800,
    img:"../images/productos/producto6.jpeg"
}
]


function crearCards() {
    guardapolvos.forEach(el=>{
        containerProductos.innerHTML+=`<div class="containerProductos">
        <img src=${el.img} class="imgGuardapolvo">
        <button class="btn_guardapolvo">${el.nombre} $${el.precio}</button>
        <button id="btnAgregar${el.id}">Agregar Carrito</button>
        </div>
        `
    }
    )
    btnAgregar();
}
crearCards();
function btnAgregar() {
    guardapolvos.forEach(guardapolvo=>{
        document.querySelector(`#btnAgregar${guardapolvo.id}`).addEventListener(`click`,()=>{
            agregarCarrito(guardapolvo);
        })
    })
}

function agregarCarrito(guardapolvo){
    carritoCompras.push(guardapolvo);
    sumaCarrito();
    console.log(carritoCompras);
    mostrarCarrito();
}

function mostrarCarrito() {
    containerCarrito.innerHTML="";
    carritoCompras.forEach(el=>{
        containerCarrito.innerHTML+=`<div class="containerProductos">
        <img src=${el.img} class="imgGuardapolvo">
        <button class="btn_guardapolvo">${el.nombre} $${el.precio}</button>
        <button id="btnEliminar${el.id}">Eliminar producto</button>
        </div>
        `
    })
    eliminarProducto();
}

function btnEliminar(){
    carritoCompras.forEach(productoCarrito=>{
        document.querySelector(`#btnEliminar${carritoCompras.id}`).addEventListener(`click`,()=>{
            eliminarProducto(productoCarrito);
        })
    })
}

function eliminarProducto(productoCarrito){
    carritoCompras.pop(productoCarrito);
    sumaCarrito();
    mostrarCarrito();
    
}

function sumaCarrito(){
    const valorInicial = 0;
    const sumaTotal = carritoCompras.reduce((primerValor,SegundoValor)=>primerValor+SegundoValor.precio,valorInicial);
    console.log(sumaTotal);
    return sumaTotal;
}