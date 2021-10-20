function filldrinks() {
  removeItems();
  var i = tdrinks.selectedIndex;
  switch (i) {
    case 1:
      cdrinks = [
        "-:Cool:-",
        "Sprite",
        "Thums Up",
        "Pepsi",
        "Coca Cola",
        "Limca",
        "Mirinda",
        "Fanta",
        "7 Up",
      ];
      addDrinks(cdrinks);
      break;
    case 2:
      juice = [
        "-:Juice:-",
        "Pomegranate juice",
        "Apple juice",
        "Orange juice",
        "Cranberry juice",
        "Kiwi juice",
        "Grape juice",
      ];
      addDrinks(juice);
      break;
    case 3:
      hdrinks = [
        "-:Healthy:-",
        "Green tea",
        "Mint tea",
        "Black coffee",
        "Fat-free milk",
        "Soy milk ",
        " almond milk",
        "Hot chocolate",
        "lemon juice",
      ];
      addDrinks(hdrinks);
      break;
  }
  heading.innerHTML = tdrinks.options[tdrinks.selectedIndex].text;
}
function addDrinks(drink) {
  for (i = 0; i < drink.length; i++) {
    var opt = document.createElement("option");
    opt.text = drink[i];
    drinks.add(opt);
  }
}
function removeItems() {
  for (j = drinks.length - 1; j >= 0; j--) {
    drinks.remove(j);
  }
}
