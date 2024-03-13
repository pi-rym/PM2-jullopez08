class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    //no se define el objeto acà, en el test se pasa producto como objeto
    if (
      producto &&
      typeof producto === "object" &&
      "quantity" in producto &&
      "price" in producto
    ) {
      if (producto.quantity <= 0 && producto.price <= 0) {
        throw new TypeError();
      } else {
        this.productos.push(producto);
      }
    } else {
      throw new TypeError();
    }
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
