window.onload=function(){
  ////////////////////////////////
  /////////DISPLAY DATA///////////
  ////////////////////////////////

  fetch('HomePage.json')
  .then(response => response.json())
  .then(data => {
    // Create an array of cities
    const nature = data.nature;
    
    let currentIndex = 0;

    // Display the first 10 cities
    displayCities(currentIndex);

    // Implement the functionality for the arrows
    const prevButton2 = document.getElementById('prev');
    prevButton2.addEventListener('click', () => {
      displayCities(currentIndex - 1);
    });

    const nextButton = document.getElementById('next');
    nextButton.addEventListener('click', () => {
      displayCities(currentIndex + 1);
    });

    function displayCities(startIndex) {
      // Clear the previous list of cities
      const cityList = document.getElementById('nature');
      cityList.innerHTML = '';
    
      const text = document.getElementById("textsec2");
      text.innerHTML = '';
    
      // Calculate the ending index
      const endIndex = Math.min(startIndex + 1, nature.length);
    
      // Display the next city
      for (let i = startIndex; i < endIndex; i++) {
        const city = nature[i];
        const listItem = document.createElement('section');
        listItem.classList.add('card');
    
        text.innerHTML = `
          <h2>${city.name}</h2>
          <h3>${city.description}</h3>
          <a href="${city.link}" class="citybtn">Explore ${city.name}</a>
        `;
    
        listItem.innerHTML = `
          <div class="card__img" style="background-image: url('${city.image}')"></div>
          <a href="${city.link}" class="card_link">
            <div class="card__img--hover" style="background-image: url('${city.image}')"></div>
          </a>
        `;
        //listItem.textContent = city.name;
        cityList.appendChild(listItem);
      }
    
      // Update the current index
      currentIndex = startIndex;
    
      // Disable/enable the prev/next buttons as needed
      document.getElementById('prev').disabled = currentIndex === 0;
      document.getElementById('next').disabled = endIndex >= nature.length;
    
      // If we've reached the end, loop back to the beginning
      if (endIndex === nature.length && currentIndex !== 0) {
        currentIndex = 0;
        displayCities(currentIndex);
      }
    
      // If we've reached the beginning, loop back to the end
      if (startIndex < 0 && endIndex !== nature.length) {
        currentIndex = nature.length;
        displayCities(currentIndex);
      }
    }    
  });

   ////////////////////////////////
  /////////DISPLAY PHOTOS DATA///////////
      ////////////////////////////////


      ////////////////////////////////
  /////////DISPLAY POPULAR DATA///////////
      ////////////////////////////////

  fetch('HomePage.json')
  .then(response => response.json())
  .then(data => {
    // Create an array of cities
    const popular = data.popular;

    let currentIndex2 = 0;

    // Display the first 10 cities
    displayCities(currentIndex2);

    // Implement the functionality for the arrows
    const prevButton = document.getElementById('prev2');
    prevButton.addEventListener('click', () => {
      displayCities(currentIndex2 - 1);
    });

    const nextButton = document.getElementById('next2');
    nextButton.addEventListener('click', () => {
      displayCities(currentIndex2 + 1);
    });

    function displayCities(startIndex) {
      // Clear the previous list of cities
      const cityList = document.getElementById('popular');
      cityList.innerHTML = '';
    
      const text = document.getElementById("textsec");
      text.innerHTML = '';
    
      // Calculate the ending index
      const endIndex = Math.min(startIndex + 1, popular.length);
    
      // Display the next city
      for (let i = startIndex; i < endIndex; i++) {
        const city = popular[i];
        const listItem = document.createElement('section');
        listItem.classList.add('card');
    
        text.innerHTML = `
          <h2>${city.name}</h2>
          <h3>${city.description}</h3>
          <a href="${city.link}" class="citybtn">Explore ${city.name}</a>
        `;
    
        listItem.innerHTML = `
          <div class="card__img" style="background-image: url('${city.image}')"></div>
          <a href="${city.link}" class="card_link">
            <div class="card__img--hover" style="background-image: url('${city.image}')"></div>
          </a>
        `;
        //listItem.textContent = city.name;
        cityList.appendChild(listItem);
      }
    
      // Update the current index
      currentIndex2 = startIndex;
    
      // Disable/enable the prev/next buttons as needed
      document.getElementById('prev2').disabled = currentIndex2 === 0;
      document.getElementById('next2').disabled = endIndex >= popular.length;
    
      // If we've reached the end, loop back to the beginning
      if (endIndex === popular.length && currentIndex2 !== 0) {
        currentIndex2 = 0;
        displayCities(currentIndex2);
      }
    
      // If we've reached the beginning, loop back to the end
      if (startIndex < 0 && endIndex !== popular.length) {
        currentIndex2 = popular.length;
        displayCities(currentIndex2);
      }
    }    
  });
  }
    