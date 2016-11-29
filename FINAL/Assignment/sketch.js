var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

function drawPattern() {

    console.log('inside JS file');
    console.log($('input[name="Q1"]:checked').val());
    console.log($('input[name="Q2"]:checked').val())
    console.log($('input[name="Q3"]:checked').val());

    var q1Answer = $('input[name="Q1"]:checked').val();
    var q2Answer = $('input[name="Q2"]:checked').val();
    var q3Answer = $('input[name="Q3"]:checked').val();

    document.getElementById("Q1").style.display = "none";
    // document.getElementById("Q2").style.display = "none";
    // document.getElementById("Q3").style.display = "none";
    document.getElementById("btn").style.display = "none";

  function drawArc(x, y, rad, rot, col) {

    var arc = r.polygon(x, y)
      .lineTo(0, 0)
      .lineTo(rad, 0)
      .rotate(rot, x, y)
      .fill(col)
      .stroke(false)

    for(var i = 0; i < 91; i++) {
      var x = Math.cos(r.radians(i)) * rad;
      var y = Math.sin(r.radians(i)) * rad;
      arc.lineTo(x, y);
    }
  }

  var length = 800
  var radius = length /2
  var startX = 0
  var startY = 0

  var sat = 29; 
  var hue = 33;

  //   if (q2Answer == 0){
  //   sat -= 30
  //   hue -= 20

  // } else if (q2Answer == 1){
  //   sat += 30
  //   hue += 20

  // } else {
  //   sat += 0
  // }

  //BLUES
  var p1 = new Rune.Color ('hsv', 214, 22, 67)
  var p2 = new Rune.Color ('hsv', 223, 88, 21)
  var disTraveled = new Rune.Color ('hsv', hue, 29, 86)
  var meet = new Rune.Color ('hsv', 224, 56, 47)

  // //POY--PEACOCK

  // var p1 = new Rune.Color();
  // var p2 = new Rune.Color();
  // var disTraveled = new Rune.Color ('hsv', )
  // var meet = new Rune.Color ('hsv', )


  // //KC--PINK & BLUE
  // var p1 = new Rune.Color('hsv', 345, 9, 87);
  // var p2 = new Rune.Color('hsv', 203, 65, 30);
  // var disTraveled = new Rune.Color ('hsv', 43, 31, 77)
  // var meet = new Rune.Color ('hsv', 336, 44, 75)



  var background = r.rect(startX, startY, length, length).stroke(false)

  if (q1Answer == "1") {
    background.fill(p1)
    drawArc(0, 0, radius, 0, p2)
    drawArc(length, 0, radius, 90, p2)
    drawArc(length, length, radius, 180, p2)
    drawArc(0, length, radius, 270, p2)
  } else {
    background.fill(p2)
    drawArc(0, 0, radius, 0, p1)
    drawArc(length, 0, radius, 90, p1)
    drawArc(length, length, radius, 180, p1)
    drawArc(0, length, radius, 270, p1)
  }



  var cenCir = r.circle(length/2, length/2, length * 0.19).fill(disTraveled).stroke(false)

  centerShape(8);
  // centerShape(q3Answer);

  function centerShape(pnts){
    var cenRad = radius * 0.2;
    // var points = [3, 4, 6, 40];
    var points = pnts;

    // var shape = r.polygon(r.width/2, 125 + (i * 200));
    var shape = r.polygon(length/2, length/2);
    var spacing = 360/points;

    for(var i = 0; i < points; i++) {
      var x = Math.cos(Rune.radians(i * spacing)) * cenRad;
      var y = Math.sin(Rune.radians(i * spacing)) * cenRad;
      shape.lineTo(x, y);
    }

    if (points == 5) {
      shape.rotate(198, length/2, length/2)
    }

    shape.fill(meet).stroke(false)

  }



    r.draw(); 
  
}










