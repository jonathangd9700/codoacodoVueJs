let btnAgregarCarrito = document.querySelectorAll(`.btnAgregar`);
let valores = [2800, 3000, 3300];
new guardapolvos = {}
let carritoCompras = [];
console.log(btnAgregarCarrito);

    btnAgregarCarrito[i].addEventListener(`click`,()=>{

    }
    )


function agregarCarrito(precio) {
    carritoCompras.push(precio);
}
function sumaCarrito(){
    const valorInicial = 0;
    const sumaTotal = carritoCompras.reduce((primerValor,SegundoValor)=>primerValor+SegundoValor,valorInicial);
    console.log(sumaTotal);
    return sumaTotal;
}
console.log(carritoCompras);