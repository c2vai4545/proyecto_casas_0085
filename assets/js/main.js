const casas = [
    {
        name: "Casa 1",
        description: "Una casa bonita en el bosque",
        img: "./assets/img/casas/casa1.jpg",
        precio: 100000,
    },
    {
        name: "Casa 2",
        description: "Una casa bonita en la playa",
        img: "./assets/img/casas/casa1.jpg",
        precio: 170000,
    },
    {
        name: "Casa 3",
        description: "Una casa bonita en la ciudad",
        img: "./assets/img/casas/casa1.jpg",
        precio: 150000,
    },
];

const casasOferta = [
    {
        name: "Casa 1 oferta",
        description: "Una casa bonita en el bosque",
        img: "./assets/img/casas/casa_oferta.jpg",
        precio: 80000,
    },
    {
        name: "Casa 2 oferta",
        description: "Una casa bonita en la playa",
        img: "./assets/img/casas/casa_oferta.jpg",
        precio: 85000,
    },
    {
        name: "Casa 3 oferta",
        description: "Una casa bonita en la ciudad",
        img: "./assets/img/casas/casa_oferta.jpg",
        precio: 70000,
    },
];

const casasRemate = [
    {
        name: "Casa 1 remate",
        description: "Una casa bonita en remate",
        img: "./assets/img/casas/casa_remate.jpg",
        precio: 10000,
    },
    {
        name: "Casa 2 remate",
        description: "Una daddasd bonita en la playa",
        img: "./assets/img/casas/casa_remate.jpg",
        precio: 25000,
    },
    {
        name: "Casa 3 remate",
        description: "Una casa fea en la ciudad",
        img: "./assets/img/casas/casa_remate.jpg",
        precio: 50000,
    },
];


const renderHouses = (array, section) => {

    // Inicializamos una cadena vacía para almacenar el contenido HTML.
    let housesHTML = "";

    // Dentro del bucle for, se recorre cada objeto casa en el array array
    for (const casa of array) {

        // Para cada casa en el array, construimos una estructura HTML utilizando template literals (delimitados por comillas invertidas).
        // El HTML generado incluye una imagen, el nombre de la casa, una descripción y un botón para ver más detalles.
        const houseHTML = `
        <div class="col">
            <div class="card">
                <img src=${casa.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">${casa.name}</h5>
                    <p class="card-text">${casa.description}</p>
                    <p>${casa.precio}</p>
                    <a href="#" class="btn btn-primary">ver detalles</a>
                </div>
            </div>
        </div>
        `;

        // Agregamos el HTML de cada casa al contenido total.
        housesHTML += houseHTML;
    }

    // Seleccionamos el elemento donde se mostrarán las casas.
    const housesList = document.querySelector(section);

    // Insertamos el contenido en el elemento seleccionado.
    housesList.innerHTML = housesHTML;
};

// Aquí se declara un objeto llamado sections que contiene diferentes secciones con títulos y sus respectivos IDs.
const sections = [
    { title: "Encuentra la casa ideal para ti", id: "houses-list" },
    { title: "Casas en oferta", id: "houses-offer" },
    { title: "Casas en remate", id: "houses-remate" },
];


const renderSections = () => {

    // Esta línea selecciona el primer elemento <main> encontrado en el documento y lo asigna a la constante main.
    const main = document.querySelector("main");

    // Inicializamos una cadena vacía para almacenar el contenido HTML.
    let html = "";

    // Este bucle recorre cada sección en el objeto sections.
    for (const section of sections) {

        // Para cada sección, se crea una estructura HTML que incluye un título (<h2>) con el ID correspondiente y un contenedor de filas (<div class="row">)
        const sectionHTML = `
        <section>
        <h2 class="pb-2 border-bottom">${section.title}</h2>
        <div id="${section.id}" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3">
            <!-- vacio -->
        </div>
        </section>
        `;

        // Agregamos el HTML de cada seccion al contenido total.
        html += sectionHTML;
    }

    // Insertamos el contenido de la variable html en el elemento  <main>.
    main.innerHTML += html;
};

// este código crea una página con secciones y las renderiza en el elemento <main>. Cada sección tiene su propio título y estructura.
renderSections();

// La función renderHouses toma los datos de casas y los muestra en la sección con el ID “houses-list”.
// casas es el conjunto de datos u objeto donde se almacenan de forma estructurada.
// "#houses-list": Es un selector CSS que apunta al elemento donde se renderizarán las casas.
renderHouses(casas, "#houses-list");

// casasOferta: Otro conjunto de datos relacionados con casas (ofertas).
// "#houses-offer": El selector CSS para la sección “houses-offer”.
renderHouses(casasOferta, "#houses-offer");

// casasRemate: Datos relacionados con casas en remate.
// "#houses-remate": El selector CSS para la sección “houses-remate”.
renderHouses(casasRemate, "#houses-remate");s