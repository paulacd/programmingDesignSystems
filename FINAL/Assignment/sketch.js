var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

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

var length = 200
var radius = length /2
var startX = 0
var startY = 0

var p1 = new Rune.Color ('hsv', 214, 22, 67)
var p2 = new Rune.Color ('hsv', 223, 88, 21)
var disTraveled = new Rune.Color ('hsv', 33, 29, 86)
var meet = new Rune.Color ('hsv', 224, 56, 47)
// var guest = new Rune.Color ('hsv', )

// var Q1 = prompt("friend of the bride or the groom?")
// var Q2 = prompt("where do you know them from?")
// var Q3 = prompt("where are you traveling from?")

// console.log(Q1)
// console.log(Q2)
// console.log(Q3)


var tile = r.rect(startX, startY, length, length).fill(p2).stroke(false)

drawArc(0, 0, radius, 0, p1)
drawArc(length, 0, radius, 90, p1)
drawArc(length, length, radius, 180, p1)
drawArc(0, length, radius, 270, p1)


var cenCir = r.circle(length/2, length/2, length * 0.2).fill(disTraveled).stroke(false)

centerShape(8);

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



function drawPattern() {
  console.log('inside JS file');
  // console.log(document.getElementsByClassName("Q1"));
  // console.log(document.getElementById("Q1").value(0));
  console.log(document.getElementsByName("Q1").value);
  // console.log(document.getElementById("Q2").value);
  // console.log(document.getElementById("Q3").value);
  
}

r.draw(); 















// var size = 200
// var offset = 0;
// var reduce= 50;

// for (var i = 0; i < 4; i++){
//   // offset = size/2
//   var rect = r.rect(100 + offset, 100 + offset, size, size).strokeWidth(4)
//   size -= reduce;
//   offset += reduce/2;

//   if (i%2 == 0){
//     rect.fill(212, 158, 153)
//   }else {
//     rect.fill(116, 82, 95)
//   }
// }