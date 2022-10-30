let containerProductos = document.querySelector(`.container`);
let containerCarrito = document.querySelector(`.carrito`); 
let totalSuma = document.getElementById(`totalSuma`);
let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];
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
    let existe = carritoCompras.some(prod=>(prod.id===guardapolvo.id));
    if(existe===false){
        guardapolvo.cantidad = 1;
        carritoCompras.push(guardapolvo);
    }
    else{
        let encontrado = carritoCompras.find(prod=>(prod.id===guardapolvo.id));
        encontrado.cantidad++;
    }
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
        <h5>Cantidad: ${el.cantidad}</h5>
        </div>
        `
    })
    localStorage.setItem("carrito",JSON.stringify(carritoCompras));
    eliminarProducto();
    sumaCarrito();
}

function btnEliminar(){
    carritoCompras.forEach(productoCarrito=>{
        document.querySelector(`#btnEliminar${carritoCompras.id}`).addEventListener(`click`,()=>{
            eliminarProducto(productoCarrito);
        })
    })
}

function eliminarProducto(){
carritoCompras.forEach(producto=>{document.querySelector(`#btnEliminar${producto.id}`).addEventListener("click",()=>{
    let indice = carritoCompras.findIndex(e=>e.id===producto.id);
    carritoCompras.splice(indice,1);
    mostrarCarrito();
})
})

}

function sumaCarrito(){
    const valorInicial = 0;
    const sumaTotal = carritoCompras.reduce((primerValor,SegundoValor)=>primerValor+SegundoValor.precio,valorInicial);
    console.log(sumaTotal);
    totalSuma.innerHTML=`<p>TOTAL: $${sumaTotal}</p>`;   
    return sumaTotal;
}
mostrarCarrito();