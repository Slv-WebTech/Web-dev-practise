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
function movie_details() {
  // var i = timmings.selectedIndex;
  // switch (i) {
  //   case 1:
  //     movie_name.innerHTML = "Hum Tum";
  //     movie_name.value = "230";
  //     poster.width = "200";
  //     poster.src = [movie_name.innerHTML] + ".jpg";
  //     break;
  //   case 2:
  //     movie_name.innerHTML = "Shershaah";
  //     movie_name.value = "270";
  //     poster.width = "200";
  //     poster.src = [movie_name.innerHTML] + ".jpg";
  //     break;
  //   case 3:
  //     movie_name.innerHTML = "Spider-Man";
  //     movie_name.value = "530";
  //     poster.width = "200";
  //     poster.src = [movie_name.innerHTML] + ".jpg";
  //     break;
  //   case 4:
  //     movie_name.innerHTML = "Avenger";
  //     movie_name.value = "670";
  //     poster.width = "200";
  //     poster.src = [movie_name.innerHTML] + ".jpg";
  //     break;
  // }
  movie_name.innerHTML = timmings.options[timmings.selectedIndex].value;
  poster.width = "300";
  poster.src = timmings.options[timmings.selectedIndex].value + ".jpg";
  if (timmings.value.endsWith("(E)")) {
    var disc = 320 - [(10 * 320) / 100];
    concession.innerHTML =
      "Ticket Price after 10% Discount. <br> <b>Net Amount: </b>" + disc + "/-";
  } else {
    concession.innerHTML = "No Discount <br> <b>Net Amount: </b> 350 /-";
  }
}
