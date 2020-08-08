function generateGradient() {
  var colors = [
    "#FF5733",
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#F9FF33",
    "#3933FF",
    "#FF33E9",
    "#FF3333",
    "#8D5454",
    "#54588D",
    "#548D78",
    "#9A5A5A",
    "#FA0000",
    "#B2B2B2",
    "#FF5757",
    "#5C991B",
    "#101170",
    "#39D28F",
  ];

  var randCol1 = colors[Math.floor(Math.random() * colors.length)];
  var randCol2 = colors[Math.floor(Math.random() * colors.length)];
  var randCol3 = colors[Math.floor(Math.random() * colors.length)];

  //var randCol3 =    ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000;
  console.log("gradient color 1: " + randCol1);
  console.log("gradient color 2: " + randCol2);
  console.log("foreground color: " + randCol3);

  var angle = Math.round(Math.random() * 360);
  var gradient =
    "linear-gradient(" + angle + "deg, " + randCol1 + ", " + randCol2 + ")";

  document.body.style.background = gradient;
  document.getElementById("output").innerHTML = gradient;
  document.body.style.color = getContrastYIQ(randCol3);
}
function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  console.log("YIQ: " + r);
  return yiq >= 128 ? "black" : "white";
}
document.onload = generateGradient();
