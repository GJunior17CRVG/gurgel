const slides = document.querySelectorAll('.slide');
let index = 0;

function changeSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(changeSlide, 8000);

document.querySelectorAll('.scroll-indicator').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#modelos');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
