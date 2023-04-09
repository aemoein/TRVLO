window.onload=function(){
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const imageContainer = document.getElementById('scroll');
    
    let scrollAmount = 0;
    
    leftArrow.addEventListener("click", () => 
    {
      scrollAmount -= 1200;
      imageContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth"
      });
    });
    
    rightArrow.addEventListener("click", () => {
      scrollAmount += 1200;
      imageContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth"
      });
    });

  }
    