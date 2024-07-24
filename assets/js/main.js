const casas = [
  {
    name: "Casa 1",
    description: "Una casa bonita en el bosque",
    img: "./assets/img/casas/casa1.jpg",
  },
  {
    name: "Casa 2",
    description: "Una casa bonita en la playa",
    img: "./assets/img/casas/casa1.jpg",
  },
  {
    name: "Casa 3",
    description: "Una casa bonita en la ciudad",
    img: "./assets/img/casas/casa1.jpg",
  },
];

let housesHTML = "";

for (const casa of casas) {
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
                <a href="#" class="btn btn-primary">ver detalles</a>
              </div>
            </div>
          </div>`;
  housesHTML += houseHTML;
}

const housesList = document.querySelector("#houses-list");
housesList.innerHTML = housesHTML;
