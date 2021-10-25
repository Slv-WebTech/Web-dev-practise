function screen() {
  removeItems();
  var i = movie_screen.selectedIndex;
  switch (i) {
    case 1:
      screen1 = [
        "-:Select:-",
        "09 a.m.-12 p.m.",
        "01 p.m.-03 p.m.",
        "04 p.m.-07 p.m.",
        "08 p.m.-11 p.m.",
      ];
      s1movie = [
        "",
        "Hum Tum(H)",
        "Shershaah(H)",
        "Spider-man(E)",
        "Avenger(E)",
      ];
      addtime(screen1, s1movie);
      break;
    case 2:
      screen2 = [
        "-:Select:-",
        "06 a.m.-09 a.m.",
        "11 a.m.-02 p.m.",
        "03 p.m.-06 p.m.",
        "09 p.m.-12 a.m.",
      ];
      s2movie = ["", "Bhoot Police(H)", "Dune(E)", "Mimi(H)", "Mumbai Saga(H)"];
      addtime(screen2, s2movie);
      break;
    case 3:
      screen3 = [
        "-:Select:-",
        "05 a.m.-08 a.m.",
        "08 a.m.-11 a.m.",
        "01 p.m.-03 p.m.",
        "05 p.m.-08 p.m.",
      ];
      s3movie = [
        "",
        "Venom(E)",
        "14 Phere(H)",
        "Black widow(E)",
        "Bhuj- The Pride of India(H)",
      ];
      addtime(screen3, s3movie);
      break;
    case 4:
      screen4 = [
        "-:Select:-",
        "02 a.m.-05 a.m.",
        "07 a.m.-10 a.m.",
        "11 a.m.-01 p.m.",
        "06 p.m.-09 p.m.",
      ];
      s4movie = [
        "",
        "Friends never die(E)",
        "BellBottom(H)",
        "Roohi(H)",
        "Hungama 2(H)",
        "",
      ];
      addtime(screen4, s4movie);
      break;
  }
}
function addtime(timming, sv) {
  for (i = 0; i < timming.length; i++) {
    var opt = document.createElement("option");
    opt.text = timming[i];
    opt.value = sv[i];
    timmings.add(opt);
  }
}
function removeItems() {
  for (j = timmings.length - 1; j >= 0; j--) {
    timmings.remove(j);
  }
}
function bticket() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(date.value);
  var dayName = days[d.getDay()];
  movie_name.innerHTML = timmings.options[timmings.selectedIndex].value;
  poster.width = "100";
  poster.src = timmings.options[timmings.selectedIndex].value + ".jpg";
  if (qty.value >= 10) {
    var disc = 100 - [(10 * 100) / 100];
    concession.innerHTML = disc + "/- (Ticket Price after 10% Discount) ";
  } else if (dayName == "Friday" || dayName == "Saturday") {
    var disc = 100 - [(5 * 100) / 100];
    concession.innerHTML = disc + "/- (Ticket Price after 5% Discount) ";
  } else {
    concession.innerHTML = "100/- (no Discount)";
  }
}
