let cartIcon = document.querySelector("#iconCart");
let xCartIcon = document.querySelector("#xIconCart");
let cart = document.querySelector("#cart");

cartIcon.addEventListener("mouseover", () => {
  cart.style.display = "block";
});
xCartIcon.addEventListener("click", () => {
  cart.style.display = "none";
});
