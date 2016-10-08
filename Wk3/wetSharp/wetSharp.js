var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 800,
  // debug: true
});

// var Noise = require('rune.noise.js');

// draw background
r.rect(0, 0, r.width /2 , r.height).fill(0);


//sharp variables
var margin = 60;
var numPoints = 40;
var pointDegree = 360 / numPoints;
var half = numPoints/2;

var radius = 7;
var currentRad = 5;
var decrement = 0.6;

var sharp = r.polygon(r.width/2 + margin, r.height - margin);

//wet variables


var curvePoints = 5; 
var startPointX = 0;
var startPointY = 0;
var endPointX = 100;
var endPointY = 0;  
var controlPointX = 50;
var controlPointY = -50; 

var spiral = 500;
var spacing = 20;

var noise = new Rune.Noise().noiseDetail(0.2);
var noiseStep = 0; 



//WET SHAPE
var wave = r.path(r.width/5, r.height/2.5)
// var wave = r.path(r.width/7, 200)
  .fill (255)
  .strokeWidth(1.5)
  .stroke(255, 0.4)
  .fillRule("evenodd");

  // //arriba
  // .curveTo(startPointX, startPointY, controlPointX, -controlPointY, endPointX, endPointY)
  // //abajo
  // .curveTo(startPointX + 100, startPointY, controlPointX + 100, controlPointY, endPointX + 100, endPointY)
  // //arriba 
  // .curveTo(startPointX + 200, startPointY, controlPointX+200, -controlPointY, endPointX +200, endPointY)
  // .lineTo(300, 200)
  // .lineTo(0, 200)

// //noise circle
// var noiseCircle = r.path(r.width/5, r.height/2)
//   .stroke(0)
//   .fill(false)
//   .strokeWidth(2);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 30) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.1;
// }
  
  //slinky spiral
  for (var i = 0; i < 70; i++){
    noise.noiseSeed(Rune.random(100));

      if (i > 500){
        spacing = 35;
      } else if (i > 1000) {
        spacing = 60;
      }
      var x = Math.cos(Rune.radians(i * spacing)) * spiral;
      var y = Math.sin(Rune.radians(i * spacing)) * spiral;


      // noise.noiseDetail(i -20);
      var noiseRadius = noise.get(noiseStep);
      noiseStep += 0.1;
      // var y = Math.sin(Rune.radians(i * spacing)) * noiseRadius;
      // var x = Math.cos(Rune.radians(spiral * i * 0.1)) * noiseRadius;
      // var y = Math.sin(Rune.radians(spiral * i * 0.1)) * noiseRadius;

      wave.curveTo(x+i *noiseRadius, y+i, controlPointX, controlPointY, endPointX + i, endPointY + i*3);
    // wave.curveTo(x + i * 0.5, y + i * 0.5, controlPointX * i /4, controlPointY * i/5, endPointX + i, endPointY + i);
  }

  // for (var i = 0; i < 2; i++){
  //         wave.curveTo(startPointX, startPointY, controlPointX, controlPointY, endPointX, endPointY)
          
  //         // startPointX = Math.cos((Rune.radians(startPointX)) * spiral) * spacing; 
  //         startPointY = Math.cos((Rune.radians(startPointY)) * spiral/2) * spacing;
  //         startPointY += 100;
  //         startPointX = Math.sin((Rune.radians(startPointX)) * spiral/2) * spacing; 
  //         startPointX += 100;

  //         // controlPointX += 100;
  //         controlPointX *= -1;
  //         // controlPointX = Math.sin((Rune.radians(controlPointX)) * spiral/0.5) * spacing; 
  //         // controlPointX = Math.cos((Rune.radians(controlPointX)) * -1; 
  //         controlPointY *= -1;
  //         // controlPointY = Math.cos((Rune.radians(controlPointY)) * spiral/0.5) * spacing; 
  //         // controlPointY = Math.cos((Rune.radians(controlPointY)) * -1; 

          
  //         endPointX = Math.cos((Rune.radians(endPointX)) * spiral/2) * spacing; 
  //         endPointX += 100;
  //         endPointY = Math.sin((Rune.radians(endPointY)) * spiral/2) * spacing; 
  //         endPointY +=100;
  //         // endPointY = Math.sin((Rune.radians(endPointY)) * spiral) * spacing; 
  // }

// for (var i = 0; i < curvePoints; i+2){
//   var endPointX = startPointX + 20;
//   var endPointY = startPointY + 20;
//   wave.curveTo(startPointX, startPointY, controlPointX *i, controlPointY*i, endPointX, endPointY)
// }
// wave.rotate (-45, 10, 10)


//SHARP SHAPE
for(var i = 0; i < numPoints; i++) {

  if(i % 2 == 0) {
      var x = Math.cos(Rune.radians(i * pointDegree)) * radius;
      var y = Math.sin(Rune.radians(i * pointDegree)) * radius;
  } else {

  if (half <= i){
    // currentRad += decrement
    currentRad *= decrement
  } else {
    // currentRad -= decrement
    currentRad = currentRad/decrement
  }
        var x = Math.cos(Rune.radians(i * pointDegree)) * currentRad;
        var y = Math.sin(Rune.radians(i * pointDegree)) * currentRad;
  }

  sharp.lineTo(x, y)
    .fill(0)
    .rotate (142, r.width/2 + margin *1.5, r.height - margin);
}



r.draw();