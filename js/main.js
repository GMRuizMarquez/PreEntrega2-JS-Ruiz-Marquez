let opcion;

do {
    opcion = parseInt(prompt(`¡Bienvenido al mercado de vinos!

Por favor, elija una opción:
1. Filtrar vinos por nombre.
2. Ver detalles de un vino específico.
3. Agregar un nuevo vino.
4. Comprar vinos.
5. Mostrar vinos disponibles.
0. Salir.`));

    switch (opcion) {
        case 0:
            console.log("¡Gracias por visitar el mercado de vinos! ¡Vuelva pronto!");
            break;
        case 1:
            filtrarProductosPorNombre();
            break;
        case 2:
            verDetallesDeVino();
            break;
        case 3:
            agregarVino();
            break;
        case 4:
            comprarVinos();
            break;
        case 5:
            mostrarVinosDisponibles();
            break;
        default:
            console.log("Por favor, ingrese una opción válida.");
            break;
    }

} while (opcion !== 0);
