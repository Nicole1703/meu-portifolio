
function myFunction() {
  var element = document.body;
  element.classList.toggle("darkmode");
}


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.2s ease';
      button.style.backgroundColor = '#ffcccb'; // cor de fundo quando o mouse passa
  });

  button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
      button.style.backgroundColor = ''; // reseta a cor de fundo
  });
});
