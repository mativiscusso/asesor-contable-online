let cartIcon = document.querySelector(".fa-shopping-cart");

cartIcon.addEventListener("click", () => {
  let cart = document.querySelector("#cart");
  cart.classList.toggle = "show";
});
