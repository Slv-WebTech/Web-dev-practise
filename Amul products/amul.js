function call() {
  pname.innerHTML = product.options[product.selectedIndex].text;
  price.innerHTML = product.value;
  pic.width = "200";
  pic.src = product.options[product.selectedIndex].text + ".jpg";
}
function amount() {
  var i = product.value * qty.value;
  net.innerHTML = i;
}
