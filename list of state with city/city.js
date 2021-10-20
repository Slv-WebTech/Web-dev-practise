function fillcity() {
  removeItems();
  var i = states.selectedIndex;
  switch (i) {
    case 1:
      apcity = [
        "-City-",
        "Visakhapatnam",
        "Vijayawada",
        "Guntur",
        "Nellore",
        "Tirupati",
      ];
      addcity(apcity);
      break;
    case 2:
      mpcity = ["-City-", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"];
      addcity(mpcity);
      break;
    case 3:
      upcity = ["-City-", "Noida", "Varanasi", "Allahabad", "Agra", "Kanpur"];
      addcity(upcity);
      break;
    case 4:
      mcity = ["-City-", "Pune", "Nagpur", "Nashik", "Aurangabad", " Solapur"];
      addcity(mcity);
      break;
    case 5:
      gcity = [
        "-City-",
        "Ahmedabad",
        "Surat",
        "Rajkot",
        "Junagadh",
        "Vadodara",
      ];
      addcity(gcity);
      break;
  }
}

function addcity(cities) {
  for (i = 0; i < cities.length; i++) {
    var opt = document.createElement("option");
    opt.text = cities[i];
    city.add(opt);
  }
}
function removeItems() {
  for (j = city.length - 1; j >= 0; j--) {
    city.remove(j);
  }
}
