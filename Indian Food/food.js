function fillitems() {
  removeItems();
  var i = variety.selectedIndex;
  switch (i) {
    case 1:
      north = [
        "-:Select:-",
        "Chole Bhature",
        "Rogan Josh",
        "Stuffed Bati",
        "Malai ki Kheer",
        "Dahi Bhalla",
      ];
      nprice = ["", "60", "90", "110", "130", "50"];
      additems(north, nprice);
      break;
    case 2:
      south = ["-:Select:-", "Dosa", "Vada", "Idli", "Thali", "Shahi Tukda"];
      sprice = ["", "70", "55", "40", "90", "230"];
      additems(south, sprice);
      break;
    case 3:
      chinese = [
        "-:Select:-",
        "Chow mein",
        "Zhajiangmian",
        "Lamian",
        "Liangpi",
        "Shacha noodles ",
      ];
      cprice = ["", "65", "95", "88", "68", "99"];
      additems(chinese, cprice);
      break;
  }
}
function additems(food, price) {
  for (i = 0; i < food.length; i++) {
    var opt = document.createElement("option");
    opt.text = food[i];
    opt.value = price[i];
    dishes.add(opt);
  }
}
function removeItems() {
  for (j = dishes.length - 1; j >= 0; j--) {
    dishes.remove(j);
  }
}
function details() {
  fname.innerHTML = dishes.options[dishes.selectedIndex].text;
  fpicture.width = "250";
  fpicture.src = dishes.options[dishes.selectedIndex].text + ".jpg";
  price.innerHTML = dishes.options[dishes.selectedIndex].value;
}
function amount() {
  var bill = dishes.value * qty.value;
  if (no_dis.checked) {
    net.innerHTML = bill + "/-";
  } else if (five.checked) {
    var sum = parseInt(bill - [(bill * 5) / 100]);
    net.innerHTML = sum + "/-  (After 5% Discount)";
  } else if (ten.checked) {
    var sum = bill - [(bill * 10) / 100];
    net.innerHTML = sum + "/-  (After 10% Discount)";
  } else if (fifteen.checked) {
    var sum = bill - [(bill * 15) / 100];
    net.innerHTML = sum + "/-  (After 15% Discount)";
  } else if (twenty.checked) {
    var sum = bill - [(bill * 20) / 100];
    net.innerHTML = sum + "/-  (After 20% Discount)";
  }
}
