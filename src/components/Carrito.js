class Carrito {
    constructor() {
        this.productos = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.guardarCarrito();
    }

    obtenerProductos() {
        return this.productos;
    }

    limpiarCarrito() {
        this.productos = [];
        this.guardarCarrito();
    }

    guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }
}

export default Carrito;




