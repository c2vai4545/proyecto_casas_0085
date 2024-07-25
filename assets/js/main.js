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

const sections = [
  { title: "Encuentra la casa ideal para ti", id: "houses-list" },
  { title: "Casas en oferta", id: "houses-offer" },
  { title: "Casas en remate", id: "houses-remate" },
];

const renderHouses = (array, section) => {
  let housesHTML = "";

  for (const casa of array) {
    const houseHTML = `
        <div class="col">
                <div class="card">
                  <img
                    src=${casa.img}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${casa.name}</h5>
                    <p class="card-text">
                      ${casa.description}
                    </p>
                    <p>
                        ${casa.precio}
                    </p>
                    <a href="#" class="btn btn-primary">ver detalles</a>
                  </div>
                </div>
              </div>
              `;
    housesHTML += houseHTML;
  }

  const housesList = document.querySelector(section);
  housesList.innerHTML = housesHTML;
};

const renderSections = () => {
  const main = document.querySelector("main");
  let html = "";
  for (const section of sections) {
    const sectionHTML = `
        <section>
        <h2 class="pb-2 border-bottom">${section.title}</h2>
        <div
          id="${section.id}"
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3"
        >
          <!-- vacio -->
        </div>
      </section>`;
    html += sectionHTML;
  }

  main.innerHTML += html;
};

// creamos nuestras secciones
renderSections();

// llamado de funcion
renderHouses(casas, "#houses-list");
renderHouses(casasOferta, "#houses-offer");
renderHouses(casasRemate, "#houses-remate");
