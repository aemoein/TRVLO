// Add an event listener to the "Explore Destinations" button
document.querySelector('.hero .btn').addEventListener('click', function(event) {
    // Prevent the default behavior of following the link
    event.preventDefault();
    
    // Scroll to the featured destinations section
    document.querySelector('.featured-destinations').scrollIntoView({
      behavior: 'smooth'
    });
  });
  