/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const text = document.querySelector("#textarea");
const backspace = document.querySelector(".backspace");
const bold = document.querySelector(".bold");
const eraser = document.querySelector(".eraser");
const italic = document.querySelector(".italicizes");

backspace.addEventListener("click", () => {
  text.value = text.value.slice(0, -1);
});

eraser.addEventListener("click", () => {
  text.value = "";
});

bold.addEventListener("click", () => {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

italic.addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});
