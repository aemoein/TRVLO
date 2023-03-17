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
