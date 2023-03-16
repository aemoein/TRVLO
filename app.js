// Add an event listener to the "Explore Destinations" button
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.hero .btn').addEventListener('click', function(event) {
    // Prevent the default behavior of following the link
    event.preventDefault();
    
    // Scroll to the featured destinations section
    document.querySelector('.featured-destinations').scrollIntoView({
      behavior: 'smooth'
    });
  });
  