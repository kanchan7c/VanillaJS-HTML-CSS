const Cards = document.querySelectorAll('.card');

// This function adds active class to the card that is clicked
Cards.forEach((card) => {
  // console.log(card);
  card.addEventListener('click', () => {
    // console.log(128938);
    removeActiveClass();
    card.classList.add('active');
  });
});

// This function removes the active class from all cards
function removeActiveClass() {
  Cards.forEach((card) => card.classList.remove('active'));
}
