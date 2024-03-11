class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    //no se define el objeto acà, en el test se pasa producto como objeto
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach((producto) => {
      total += producto.quantity * producto.price;
    });
    return total;
  }

  aplicarDescuento(porcentaje) {
    const totalActual = this.calcularTotal();
    const descuento = (porcentaje / 100) * totalActual;
    const totalNuevo = totalActual - descuento;
    return totalNuevo;
  }
}
module.exports = CarritoCompra;
