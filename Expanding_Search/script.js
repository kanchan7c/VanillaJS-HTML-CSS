const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  if (searchInput.classList.contains('width-0')) {
    searchInput.classList.add('width-80');
    searchInput.classList.remove('width-0');
  } else {
    searchInput.classList.remove('width-80');
    searchInput.classList.add('width-0');
  }
});
