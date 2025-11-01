const musica = document.getElementById('musica');
const botao = document.getElementById('botao-musica');
const icon = document.getElementById('icon-musica');

botao.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    icon.src= "../images/icons8-pausa-24.png";
  } else {
    musica.pause();
    icon.src = "../images/icons8-música-24.png";
  }
});
