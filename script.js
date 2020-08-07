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
  console.log(randCol1);
  console.log(randCol2);

  var angle = Math.round(Math.random() * 360);
  var gradient =
    "linear-gradient(" + angle + "deg, " + randCol1 + ", " + randCol2 + ")";

  document.body.style.background = gradient;
  document.getElementById("output").innerHTML = gradient;
}
document.onload = generateGradient();
