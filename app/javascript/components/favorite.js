const markAsFavorite = () => {
  const hearts = document.querySelectorAll('.fa-heart');
  console.log(hearts)
  hearts.forEach((heart) => {
    heart.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

export {markAsFavorite};
