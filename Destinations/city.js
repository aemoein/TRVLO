function loadJSON(filename) {
  fetch(`/${filename}.json`)
    .then(response => response.json())
    .then(data => {
      const about = document.getElementById("about");

      about.innerHTML = `
        <div class="info">
          <p>${data.about.info.text}</p>
        </div>

        <div class="facts">
          <h2>${data.about.facts.title}</h2>
          <p>${data.about.facts.text}</p> 
        </div>

        <div class="climate">
          <h2>${data.about.climate.title}</h2>
          <p>${data.about.climate.text}</p>
        </div>
      `;
    })
    .catch(error => console.error(error));
} 

function JSON_attractions(filename) {
  fetch(`/${filename}.json`)
  .then(response => response.json())
  .then(data => {
    const attractions = data.attractions.attractions_card;

    const cityList = document.getElementById('attractions_grid');

      let cardHTML = '';
      for (let i = 0; i < attractions.length; i++)
      {
        const card = attractions[i];
        cardHTML += `
          <div class="card">
            <img src="${card.img}" alt="${card.alt}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `;
      }

      cityList.innerHTML = cardHTML;
  })
  .catch(error => console.error(error));
}

function JSON_foods(filename) {
  fetch(`/${filename}.json`)
  .then(response => response.json())
  .then(data => {
    const foods = data.foods.food_card;

    const cityList = document.getElementById('food_grid');

      let cardHTML = '';
      for (let i = 0; i < foods.length; i++)
      {
        const card = foods[i];
        cardHTML += `
          <div class="card">
            <img src="${card.img}" alt="${card.alt}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `;
      }

      cityList.innerHTML = cardHTML;
  })
  .catch(error => console.error(error));
}

function JSON_hotels(filename) {
  fetch(`/${filename}.json`)
  .then(response => response.json())
  .then(data => {
    const hotels = data.hotels.hotels_card;

    const cityList = document.getElementById('hotels_grid');

      let cardHTML = '';
      for (let i = 0; i < hotels.length; i++)
      {
        const card = hotels[i];
        cardHTML += `
          <div class="card">
            <img src="${card.img}" alt="${card.alt}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `;
      }

      cityList.innerHTML = cardHTML;
  })
  .catch(error => console.error(error));
}

function JSON_transport(filename) {
  fetch(`/${filename}.json`)
  .then(response => response.json())
  .then(data => {
    const transport = data.transport.transport_card;

    const cityList = document.getElementById('transport_grid');

      let cardHTML = '';
      for (let i = 0; i < transport.length; i++)
      {
        const card = transport[i];
        cardHTML += `
          <div class="card">
            <img src="${card.img}" alt="${card.alt}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `;
      }

      cityList.innerHTML = cardHTML;
  })
  .catch(error => console.error(error));
}




// Get the "Learn More" buttons
const learnMoreBtns = document.querySelectorAll('.learn-more');

// Add event listeners to each button
learnMoreBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    // Get the url from the "data-url" attribute of the button
    const url = btn.dataset.url;
    // Open the url in a new tab
    window.open(url, '_blank');
  });
});
