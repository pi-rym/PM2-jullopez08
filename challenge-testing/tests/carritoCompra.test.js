const CarritoCompra = require("../index");
// pruebas para la clase CarritoCompra
describe("CarritoCompra", () => {
  let carrito;

  //crea una funcion de carrritocompra falsa
  beforeEach(() => {
    carrito = new CarritoCompra();
  });
  it("Deberia agreagr un producto correctamente al metodo 'agregarProducto'", () => {
    const producto = {
      description: "Producto de prueba",
      quantity: 2,
      price: 10,
    };
    carrito.agregarProducto(producto);
    //verifica que la longitud del array
    expect(carrito.productos).toHaveLength(1);
    // verifica el primer elemento del array sea el de prueba
    expect(carrito.productos[0]).toEqual(producto);
  });
  it("Deberia salir error al intentar agregar un producto", () => {
    const agregarProductoInvalido = () => {
      carrito.agregarProducto("producto no valido");
    };
    expect(() => agregarProductoInvalido()).toThrow();
  });

  it("Deberia calcular el total correctamente", () => {
    const producto1 = { description: "Producto 1", quantity: 2, price: 10 };
    const producto2 = { description: "Producto 2", quantity: 3, price: 15 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const total = carrito.calcularTotal();
    expect(total).toBe(2 * 10 + 3 * 15);
  });
  it("Deberia de hacel descuento correctamente", () => {
    const producto1 = { description: "Producto 1", quantity: 2, price: 10 };
    const producto2 = { description: "Producto 2", quantity: 3, price: 15 };

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const totalSinDescuento = carrito.calcularTotal();

    const descuentoPorcentaje = 10;

    const totalConDescuento = carrito.aplicarDescuento(descuentoPorcentaje);
    const descuento = (descuentoPorcentaje / 100) * totalSinDescuento;
    expect(totalConDescuento).toBe(totalSinDescuento - descuento);
  });
});
