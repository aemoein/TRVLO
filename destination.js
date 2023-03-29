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
  }  