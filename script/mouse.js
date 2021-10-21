(function() {

  const card = document.querySelector('.card');

  card.addEventListener('mousemove' , e => {

    let mouseX = card.getBoundingClientRect().right;
    let mouseY = card.getBoundingClientRect().top;

    let corX = e.pageX - mouseX;
    let corY = e.pageY - mouseY;

    let radianDegrees = Math.atan2(corX, corY);

    let rotationDegrees = (radianDegrees * (180 / Math.PI) * -1) / 10;

    card.style.transform = `rotate3d(${corY}, ${corX}, 1, 50deg)`;

    console.log(rotationDegrees);

  });

  card.addEventListener('mouseout', () => {
    card.style.transform = '';
  })
  
})();