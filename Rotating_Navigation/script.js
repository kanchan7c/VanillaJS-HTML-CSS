const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// console.log(Container);
open.addEventListener('click', () => {
  container.classList.add('show-nav');
  open.classList.add('hide');
  close.classList.remove('hide');
});
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
  close.classList.add('hide');
  open.classList.remove('hide');
});
