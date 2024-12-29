//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const placeBid = document.querySelector(".place-bid");
const p = document.querySelector(".place-bid p");
placeBid.addEventListener("click", () => {
p.innerText = "Added to Cart"
placeBid.style.cursor="auto"
placeBid.style.backgroundColor="#343444"
});
