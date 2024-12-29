// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const heartIcon = document.querySelector(".cards__card__img__icon i");
const counter = document.querySelector("#counter");
heartIcon.addEventListener("click", () => {
    heartIcon.style.color = "red";
    counter.textContent = parseInt(counter.textContent) + 1;
    })
