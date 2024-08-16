alert('Привіт сьогодні я розповім вам про мій канал , який називається origami Lev.')
const backgrounds = [
    'url(mk.jpg)',
    'url()',
  
  ];
  
  let currentBackgroundIndex = 0;
  
  function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  }
  
  document.getElementById('cBB').addEventListener('click', changeBackground);

  