// Función para mostrar los productos en la consola
function mostrarProductosEnConsola(arrayDeProductos) {
    arrayDeProductos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
}

// Función para filtrar productos por nombre
function filtrarProductosPorNombre() {
    const caracteres = prompt("Ingrese los caracteres que quiere filtrar en el nombre de los vinos:").toLowerCase();
    const nuevosProductos = productos.filter(producto => producto.nombre.toLowerCase().includes(caracteres));
    
    if (nuevosProductos.length > 0) {
        console.log(`Resultados de la búsqueda para "${caracteres}":`);
        mostrarProductosEnConsola(nuevosProductos);
    } else {
        console.log("No hay vinos que coincidan con tu búsqueda.");
    }
}

// Función para agregar un nuevo producto (vino)
function agregarVino() {
    const nombre = prompt("Ingrese el nombre del nuevo vino:");
    const precio = parseFloat(prompt("Ingrese el precio del nuevo vino:"));
    
    if (!isNaN(precio) && precio > 0) {
        const nuevoVino = {
            id: productos.length + 1,
            nombre: nombre,
            precio: precio,
            descripcion: prompt("Ingrese una breve descripción del vino:"),
            anada: parseInt(prompt("Ingrese el año de la cosecha del vino:")),
            origen: prompt("Ingrese el país o región de origen del vino:"),
            tipoUva: prompt("Ingrese la variedad de uva utilizada para producir el vino:"),
            graduacionAlcoholica: prompt("Ingrese el porcentaje de alcohol del vino:"),
            notaCata: prompt("Ingrese una nota de cata del vino:"),
            premios: prompt("Ingrese los premios o reconocimientos recibidos separados por coma:").split(",")
        };
        
        productos.push(nuevoVino);
        console.log(`Se agregó el vino "${nombre}" correctamente.`);
        console.log("Lista actualizada de vinos:");
        mostrarProductosEnConsola(productos);
    } else {
        console.log("Por favor, ingrese un precio válido para el nuevo vino.");
    }
}

// Función para ver detalles de un vino específico
function verDetallesDeVino() {
    const idVino = parseInt(prompt("Ingrese el ID del vino para ver detalles:"));
    const vino = productos.find(producto => producto.id === idVino);

    if (vino) {
        console.log(`Detalles del vino (${vino.nombre}):`);
        console.log(`ID: ${vino.id}, Nombre: ${vino.nombre}, Precio: $${vino.precio}`);
        console.log(`Descripción: ${vino.descripcion}`);
        console.log(`Añada: ${vino.anada}`);
        console.log(`Origen: ${vino.origen}`);
        console.log(`Variedad de Uva: ${vino.tipoUva}`);
        console.log(`Graduación Alcohólica: ${vino.graduacionAlcoholica}`);
        console.log(`Nota de Cata: ${vino.notaCata}`);
        console.log(`Premios y Reconocimientos: ${vino.premios.join(", ")}`);
    } else {
        console.log("No se encontró un vino con el ID proporcionado.");
    }
}

// Función para realizar una compra de vinos
function comprarVinos() {
    let total = 0;
    let carrito = [];

    while (true) {
        const idVino = parseInt(prompt("Ingresee el ID del vino que desea comprar (0 para finalizar):"));
        
        if (idVino === 0) {
            break;
        }
        
        const vino = productos.find(producto => producto.id === idVino);
        
        if (vino) {
            const cantidad = parseInt(prompt(`Ingrese la cantidad de botellas de "${vino.nombre}" que desea comprar:`));
            
            if (!isNaN(cantidad) && cantidad > 0) {
                total += vino.precio * cantidad;
                carrito.push({ producto: vino, cantidad: cantidad });
                console.log(`${cantidad} botellas de "${vino.nombre}" agregadas al carrito.`);
            } else {
                console.log("Por favor, ingrese una cantidad válida.");
            }
        } else {
            console.log("No se encontró un vino con el ID proporcionado.");
        }
    }

    if (carrito.length > 0) {
        console.log("Resumen de la compra:");
        carrito.forEach(item => {
            console.log(`${item.cantidad} botellas de "${item.producto.nombre}" - Subtotal: $${item.producto.precio * item.cantidad}`);
        });
        console.log(`Total a pagar: $${total}`);
    } else {
        console.log("No se agregaron productos al carrito.");
    }
}

function mostrarVinosDisponibles() {
    console.log("Vinos actualmente disponibles en el mercado:");
    mostrarProductosEnConsola(productos);
}