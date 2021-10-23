function database() {
  //   var x = parseInt(99 * Math.random() + 100);
  //   var y = parseInt(20 * Math.random() + 11);
  //   alert(x);
  //   alert(y);

  if (Female.checked) {
    // alert("Female");
    var title = "<b>Miss.</b> ";
    var ptitle = "<b>D/O</b> ";
  } else if (Male.checked) {
    // alert("Male");
    var title = "<b>Mr.</b> ";
    var ptitle = "<b>S/O</b> ";
  }

  var total = parseInt(
    parseInt(hmark.value) +
      parseInt(emark.value) +
      parseInt(pmark.value) +
      parseInt(cmark.value) +
      parseInt(mmark.value)
  );
  // alert(total);
  var percentage = total / 5;
  // alert(percent);
  if (
    pmark.value > 33 &&
    cmark.value > 33 &&
    mmark.value > 33 &&
    emark.value > 33 &&
    hmark.value > 33
  ) {
    if (percentage > 60) {
      var division = "1<sup>st</sup> (First)";
    } else if (percentage <= 59 && percentage > 34) {
      var division = "2<sup>nd</sup> (Second)";
    } else if (percentage < 33) {
      var division = "Fail";
    }
  } else {
    var division = "Fail";
  }
  // else if (
  //   pmark.value < 33 &&
  //   cmark.value < 33 &&
  //   mmark.value < 33 &&
  //   emark.value < 33 &&

  // ) {
  //   stature = "Fail in 4";
  // }
  // else if (
  //   pmark.value < 33 &&
  //   cmark.value < 33 &&
  //   mmark.value < 33

  // ) {
  //   stature = "Fail in 3";
  // } else if (pmark.value < 33 && cmark.value < 33) {
  //   stature = "Fail In ";
  // } else if (pmark.value < 33 && mmark.value < 33) {
  //   stature = "Fail In Physics & Maths";
  // } else if (mmark.value < 33 && cmark.value < 33) {
  //   stature = "Fail In Maths & Chemistry";}
  if (pmark.value < 33) {
    var pstature = "* (Fail)";
  } else if (pmark.value > 75) {
    var pstature = "## (Merit)";
  } else {
    var pstature = "# (Pass)";
  }
  if (cmark.value < 33) {
    var cstature = "* (Fail)";
  } else if (cmark.value > 75) {
    var cstature = "## (Merit)";
  } else {
    var cstature = "# (Pass)";
  }
  if (mmark.value < 33) {
    var mstature = "* (Fail)";
  } else if (mmark.value > 75) {
    var mstature = "## (Merit)";
  } else {
    var mstature = "# (Pass)";
  }
  if (hmark.value < 33) {
    var hstature = "* (Fail)";
  } else if (hmark.value > 75) {
    var hstature = "## (Merit)";
  } else {
    var hstature = "# (Pass)";
  }
  if (emark.value < 33) {
    var estature = "* (Fail)";
  } else if (emark.value > 75) {
    var estature = "## (Merit)";
  } else {
    var estature = "# (Pass)";
  }

  // var stature = pstature + cstature + mstature + estature + hstature;

  // Table Start From here

  var ftable = "<table width='700' border='1' cellspacing='0' cellpadding='7'>";
  ftable += "<caption><h3>-:Student Database:-</h3></caption>";
  ftable +=
    "<tr><td><img width='50' src='cbse.png'</td><td><font size='10'>Central Board of Secondary Education</font></td>";
  ftable += "</table>";

  ftable += "<table width='700' border='1' cellspacing='0' cellpadding='7'>";
  ftable +=
    "<tr><td><center><b>" +
    skul.value +
    "</b><br>" +
    title +
    " " +
    sname.value +
    "&nbsp; &nbsp; &nbsp;  " +
    ptitle +
    " " +
    "Shri. " +
    father.value +
    "</center> <br> <em>Roll No:</em>" +
    rollno.value +
    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <em>Date of Birth:</em> " +
    bday.value +
    "</td></tr>";
  ftable += "<table width='700' border='1' cellspacing='0' cellpadding='7'>";
  ftable +=
    "<tr><th>Code</th><th>Subjects</th><th>Min. Marks</th><th>Max. Marks</th><th>Marks Obtained</th><th>Remarks</th></tr>";
  ftable +=
    "<tr><td>501</td><td>Hindi</td><td>33</td><td>100</td><td>" +
    hmark.value +
    "</td><td>" +
    hstature +
    "</td></tr>";
  ftable +=
    "<tr><td>502</td><td>English</td><td>33</td><td>100</td><td>" +
    emark.value +
    "</td><td>" +
    estature +
    "</td></tr>";
  ftable +=
    "<tr><td>503</td><td>Physics</td><td>33</td><td>100</td><td>" +
    pmark.value +
    "</td><td>" +
    pstature +
    "</td></tr>";
  ftable +=
    "<tr><td>504</td><td>Chemistry</td><td>33</td><td>100</td><td>" +
    cmark.value +
    "</td><td>" +
    cstature +
    "</td></tr>";
  ftable +=
    "<tr><td>505</td><td>Maths</td><td>33</td><td>100</td><td>" +
    mmark.value +
    "</td><td>" +
    mstature +
    "</td></tr></table>";
  ftable += "<table width='700' border='1' cellspacing='0' cellpadding='7'>";
  ftable +=
    "<tr><td><b>Grand Total </b>(out of 500):</td><td>" +
    total +
    "</td><br><td><b>Percentage:</b></td><td>" +
    percentage +
    "</td><td><b>Division:</b></td><td>" +
    division +
    // "</td>
    // <td><b>Status:</b><td>" +
    // stature +
    "</td></tr>";
  ftable += "</table>";
  studbase.innerHTML = ftable;
}
