var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


// var points = 50;
// var spacing = 360/points;
// var smallRadius = 50; 
// var bigRadius = 200;
// var margin = 100; 

// var smallCircle = r.polygon (margin, r.height - margin);
// var bigCircle = r.polygon (r.width/2, r.height/2);

// for(var i = 0; i < points; i++) {
//   var x = Math.cos(Rune.radians(i * spacing)) * smallRadius;
//   var y = Math.sin(Rune.radians(i * spacing)) * smallRadius;
//   // myPoly.lineTo(r.random(x), r.random(y)); 
//   smallCircle.lineTo(x,y); 
// }

// for(var i = 0; i < points; i++) {
//   var x = Math.cos(Rune.radians(i * spacing)) * bigRadius;
//   var y = Math.sin(Rune.radians(i * spacing)) * bigRadius;
//   // myPoly.lineTo(r.random(x), r.random(y)); 
//   bigCircle.lineTo(x * 0.3,y)
//   .fill(false)
// }


var margin = 100;
var numPoints = 80;
var pointDegree = 360 / numPoints;

var myPolygon = r.polygon(margin, r.height - margin);
var currentRad = 1000

var radius = 30;
for(var i = 0; i < numPoints; i++) {

var min = 100
var decrement = 40
//var max = 1000
  if(i % 2 == 0) {
    radius = 30;
      var x = Math.cos(Rune.radians(i * pointDegree)) * radius;
      var y = Math.sin(Rune.radians(i * pointDegree)) * radius;
  } else {
    console.log (currentRad)
  currentRad -= decrement
  //currentRad = radius
  if (currentRad <= min){
      currentRad = min
    }
        var x = Math.cos(Rune.radians(i * pointDegree)) * currentRad;
        var y = Math.sin(Rune.radians(i * pointDegree)) * currentRad;
  }

  myPolygon.lineTo(x, y)
    //.fill(0);
}



r.draw();