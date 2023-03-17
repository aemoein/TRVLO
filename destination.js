window.onload=function(){
  const searchInput = document.getElementById("search-bar");
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
  
  searchInput.addEventListener("keyup", filterDestinations);
  }  