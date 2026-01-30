function searchCoffee() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].dataset.name;
    products[i].style.display = name.includes(input) ? "block" : "none";
  }
}

let count = 0;

function addToCart() {
  count++;
  document.getElementById("cartCount").innerText =
    "Items in cart: " + count;
}
