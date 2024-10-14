/* Alisson Viteri

Pagina: www.fybeca.com

1. Variables

- Simples */
const nombreProducto = "Lemonflu"; //tipo de dato string
const precio = 0.54; //tipo de dato numerico
console.log(nombreProducto,precio); //Impresion de resultado

let cantidad = 4; //tipo de dato numerico
console.log(cantidad); 

// -Compuestas

const productoLemonflu = {
    nombre: "Lemonflu",
    presentacion: "10 gr",
    contiene: ["Paracetamol", "Pseudoefedrina", "Maleato de clorfeniramina"], //array
    precio: { //objeto: tiene clave y valor
        original: 0.60, 
        descuento: 0.54 
    }
};

// 2. String

const nombreProductoL = "Lemonflu"; //String
const precioOferta = 0.54; //number
const precioAnterior = 0.60; //number
const disponibilidad = true; //boolean
const beneficios = "Alivia síntomas de resfriado, fortalece el sistema inmunológico y actúa como medicamento para la gripe"; //String

console.log(`El artículo ${nombreProducto} se ofrece a un precio de $${precioOferta}, con un precio anterior de $
    ${precioAnterior}. Disponible en Fybeca: ${disponibilidad}. Sus beneficios incluyen: ${beneficios}.`);

// 3. Propiedades
const nombreProducto2 = " Ensure Advance Vainilla ";
console.log(`La longitud del nombre del producto es: ${nombreProducto2.length}`); //numero de caracteres que hay en el nombre

// Métodos
console.log(`Nombre sin espacios: '${nombreProducto2.trim()}'`); // Elimina espacios al inicio y al final
console.log(`¿Contiene 'Vainilla'? ${nombreProducto2.includes('Vainilla')}`); // Verifica si contiene la palabra 'Vainilla'
console.log(`Nombre en mayúsculas: ${nombreProducto2.toUpperCase()}`); // Convierte a mayúsculas
console.log(`Nombre en minúsculas: ${nombreProducto2.toLowerCase()}`); // Convierte a minúsculas


// 4. ES6 Template Strings

const precioProducto2 = 46.72;
const disponibilidadP2 = true;

console.log(`El producto es: ${nombreProducto2}, su precio es: $${precioProducto2}. Disponibilidad: ${disponibilidadP2}`);

// 5. Casting ES6

let precioString = "7.85"; // Precio como string
let cantidadString = "2"; // Cantidad como string

console.log(`El total es: $${+precioString * +cantidadString}`); 

// 6. Condicionales -- Operaciones Ternarias 
const disponibilidadP3 = false; 
const aviso = disponibilidadP3? "Producto disponible en la tienda" : "Producto No disponible";
console.log(aviso);

const carritoVacio = true; 
const estadoCarrito = carritoVacio ? "El carrito está vacío" : "El carrito si contiene productos";
console.log(estadoCarrito);


// 7. LOOPS - BUCLES
const productosCuidadoPiel = [
    {nombre: "Gel Limpiador Facial", precio: 23.09},
    {nombre: "Tratamiento Antiedad", precio: 21.00},
    {nombre: "Agua Termal", precio: 12.86}
  ];
  
  productosCuidadoPiel.forEach(producto => { //imprime cada producto con su precio
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  });
    

// map
  const nombresEnMayusculas = productosCuidadoPiel.map(producto => producto.nombre.toUpperCase()); //Crea un nuevo array con los nombres en mayuscula
  console.log(nombresEnMayusculas); 
  
// 8. Comparación estricta
const precioBuscado = 21.00;

productosCuidadoPiel.forEach(producto => {
    
    if (producto.precio === precioBuscado) { // Comparación estricta de precios
        console.log(`${producto.nombre} tiene un precio de $${producto.precio}.`);
    }
});

// 9. Funcion anónima y autoejecutables

//Anonima: no tiene nombre la funcion
(function () {
    const nombreUsuario = "Alisson";
    console.log(`Hola, ${nombreUsuario}. Descubre las distintas ofertas que Fybeca tiene para ti.`);
})();

//Funcion declarada

function verificarDisponibilidad(producto) {
    console.log(`El producto ${producto} está disponible en Fybeca.`);
}

verificarDisponibilidad('Aspirina');

//Funcion expresada
const calcularPrecioDescuento = function(precio, descuento) {
    return precio - (precio * (descuento / 100));
};

console.log(calcularPrecioDescuento(3.18, 20)); 

// 10. Argumentos

const agregarCarrito = function(producto, cantidad) {
    console.log(`Se han agregado ${cantidad} unidades de ${producto} al carrito de Fybeca.`);
};

agregarCarrito('Vitamina C', 5);

//Argumentos opcionales
const agregarAlCarrito = function(producto, cantidad = 5) {
    console.log(`Se han agregado ${cantidad} unidades de ${producto} al carrito de Fybeca.`);
};
agregarAlCarrito('Vitamina C');

// 11. Retorno
function obtenerDetallesProducto() {
    return {
        nombre: "Chocolate Milka",
        precio: 3.39,
        disponibilidadch: false
    };
}
console.log(obtenerDetallesProducto());

// 12. Función Flecha
const registro = (nombre, email) => {
    console.log(`Bienvenido, ${nombre} Te has registrado exitosamente con el email: ${email}.`);
};
registro("Alisson", "alisson@gmail.com");

// 13. Parametro Rest 
const registrarCompra = function(cliente, ...productos) {
    console.log(`Cliente: ${cliente}`);
    console.log("Productos comprados:");
    productos.forEach(producto => {
        console.log(`- ${producto}`);
    });
};

registrarCompra("Alisson", "Nutrigel", "Calcibon", "Colagel");

// 14. Objetos
const biosilPerformance = {
    nombreB: "Biosil Performance",
    precioB: 37.89,
    disponibleB: true,
    cantidadB: 1,
    categoriaB: "Calcio y Huesos",
};

console.log(biosilPerformance.nombreB);
console.log(biosilPerformance.precioB); 
console.log(biosilPerformance.disponibleB); 
console.log(biosilPerformance.cantidadB); 
console.log(biosilPerformance.categoriaB); 

// 15. Desestructuración

const { nombreB: nombreProducto4, precio4, disponible, cantidadP4, categoria } = biosilPerformance;      

biosilPerformance.carrito = "no añadido"; // Añadir una nueva propiedad al objeto
console.log(biosilPerformance); // Muestra el objeto con la nueva propiedad

// Borrar la propiedad carrito
delete biosilPerformance.carrito;
console.log(biosilPerformance); // Muestra el objeto sin la propiedad carrito

// Evaluar si hay valores vacíos en el objeto
Object.values(biosilPerformance).includes("") ? console.log("Error: Existen espacios innecesarios") : console.log("OK");

// Verificar claves en el objeto
Object.keys(biosilPerformance).includes("") ? console.log("Error: Existen claves vacías") : console.log("OK");
