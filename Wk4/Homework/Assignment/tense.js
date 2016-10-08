var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1600,
  debug: true
});

//variables
var meetX = r.width/2 - 80;
var meetY = r.height - 500; 
var cirRadius = 200;
var startHue = r.random(360);
var margin = 9;

var startPoints = 25;
var endPoints = 40;

var xOne = r.width-100;
var yOne = -100;

var xTwo = -400;
var yTwo = 100;

var xThree = -100;
var yThree = r.height + 200; 

var backgroundColor = r.random (360);
var lineColor = backgroundColor - 180;
// var brightness = r.random (40, 60)
var brightness = 100
// var saturation = r.random (30, 50)
var saturation = 100

var triadic = backgroundColor - r.random(180);


//background
r.rect(0, 0, r.width, r.height)
.fill ('hsv', backgroundColor, saturation, 100)
// .fill(255)

// if (lineColor < 0) {
//   lineColor *= -1;
// }

  //small symmetrical triangle
  // var triangle = r.polygon (meetX - margin/2, meetY + 50);

  //   triangle.lineTo(-100, 0)
  //     .lineTo(100, 0)
  //     .lineTo(0, 150)
  //     .stroke(false)
  //     .fill(0, 0.5);

  //medium triangle
    // var triangle = r.polygon (meetX - margin/2, meetY + 50);

    // triangle.lineTo(-300, 60)
    //   .lineTo(400, -100)
    //   .lineTo(200, 200)
    //   .stroke(false)
    //   .fill(0, 0.5);

    //large triangle
    var triangle = r.polygon (meetX, meetY + 200);

    triangle.lineTo(-300, 60)
      .lineTo(0, -800)
      .lineTo(200, 200)
      .stroke(false)
      .fill ('hsv', backgroundColor, saturation - 30, 100)

//back tension
for(var i = 0; i < endPoints; i++){
    r.line(xOne, yOne, meetX, meetY + cirRadius/2)
    // .stroke ('hsv', lineColor, 100, brightness)
    .stroke ('hsv', lineColor, 100, brightness)
    .strokeWidth(2)
    xOne += 30;
    yOne -= 20;
  }


//front tension
for(var i = 0; i < startPoints; i++){
    r.line(xTwo, yTwo, meetX - margin, meetY + cirRadius/2)
    // .stroke ('hsv', lineColor - 15, 100, brightness)
    .stroke ('hsv', lineColor + 15, 100, brightness)
    .strokeWidth(2)
    xTwo += 20;
    yTwo -= 20;
  }



  //bottom tension

  for(var i = 0; i < endPoints; i++){
    r.line(xThree, yThree, meetX - margin/2, meetY + cirRadius/2 + margin)
    // .stroke ('hsv', lineColor, 100, brightness)
    .stroke ('hsv', lineColor - 15, 100, brightness)
    .strokeWidth(2)
    xThree += 20;
    yThree += 20;
  }


  


r.draw();