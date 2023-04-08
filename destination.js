window.onload=function(){
 /* const searchInput = document.getElementById("search-bar");
  const destinations = document.querySelectorAll(".destination");
  
  function filterDestinations() {
    const searchTerm = searchInput.value.toLowerCase();
  
    destinations.forEach((destination) => {
      const title = destination.querySelector("h3").textContent.toLowerCase();
      const description = destination.querySelector("p").textContent.toLowerCase();
  
      if (title.includes(searchTerm)) {
        destination.style.display = "block";
      } else {
        destination.style.display = "none";
      }
    });
  }
  
  searchInput.addEventListener("keyup", filterDestinations);*/

  const searchInput = document.querySelector('.search-container input');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();

    cards.forEach(function(card) {
        const title = card.querySelector('.card__title').textContent.toLowerCase();
        const category = card.querySelector('.card__category').textContent.toLowerCase();

        if (title.includes(query) || category.includes(query)) {
        card.style.display = 'block';
        } else {
        card.style.display = 'none';
        }
    });
  })

  /*fetch('destination.json')
  .then(response => response.json())
  .then(data => {
    const cities = data.card;
    const container = document.getElementById('cards');
    cities.forEach(city => {
      const card = document.createElement('section'); // create section element
      card.classList.add('card');
      card.innerHTML = `
        <div class="card__img" style="background-image: url('${city.image}')"></div>
        <a href="${city.link}" class="card_link">
          <div class="card__img--hover" style="background-image: url('${city.image}')"></div>
        </a>
        <div class="card__info">
          <span class="card__category">${city.category}</span>
          <h3 class="card__title">${city.name}</h3>
        </div>
      `;
      container.appendChild(card);
    });
  });*/

  // Load the JSON data
  fetch('destination.json')
  .then(response => response.json())
  .then(data => {
    // Create an array of cities
    const cities = data.card;

    let currentIndex = 0;

    // Display the first 10 cities
    displayCities(currentIndex);

    // Implement the functionality for the arrows
    const prevButton = document.getElementById('prev');
    prevButton.addEventListener('click', () => {
      displayCities(currentIndex - 9);
    });

    const nextButton = document.getElementById('next');
    nextButton.addEventListener('click', () => {
      displayCities(currentIndex + 9);
    });

    function displayCities(startIndex) {
      // Clear the previous list of cities
      const cityList = document.getElementById('cards');
      cityList.innerHTML = '';

      // Display the next 10 cities
      for (let i = startIndex; i < startIndex + 9 && i < cities.length; i++) {
        const city = cities[i];
        const listItem = document.createElement('section');
        listItem.classList.add('card');
        listItem.innerHTML = `
        <div class="card__img" style="background-image: url('${city.image}')"></div>
        <a href="${city.link}" class="card_link">
          <div class="card__img--hover" style="background-image: url('${city.image}')"></div>
        </a>
        <div class="card__info">
          <span class="card__category">${city.category}</span>
          <h3 class="card__title">${city.name}</h3>
        </div>
      `;
        //listItem.textContent = city.name;
        cityList.appendChild(listItem);
      }

      // Update the current index
      currentIndex = startIndex;

    let endIndex = currentIndex+8;
    if (endIndex >= cities.length) {
        endIndex = cities.length;
        document.getElementById('next').disabled = true; // Disable the next button
      } else {
        document.getElementById('next').disabled = false; // Enable the next button
    }

    document.getElementById('prev').disabled = currentIndex === 0 ? true : false;

    }
  });
}  