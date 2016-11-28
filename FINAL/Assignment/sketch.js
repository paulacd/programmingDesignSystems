var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

function drawArc(x, y, rad, rot) {

  var arc = r.polygon(x, y)
    .lineTo(0, 0)
    .lineTo(rad, 0)
    .rotate(rot, x, y)

  for(var i = 0; i < 90; i++) {
    var x = Math.cos(r.radians(i)) * rad;
    var y = Math.sin(r.radians(i)) * rad;
    arc.lineTo(x, y);
  }
}

drawArc(200, 200, 100, 0)
drawArc(400, 200, 100, 91)



/*
var length = 200
var radius = length /2
var startX = 0
var startY = 0

var p1 = new Rune.Color ('hsv', 214, 22, 67)
var p2 = new Rune.Color ('hsv', 223, 88, 21)
var disTraveled = new Rune.Color ('hsv', 33, 29, 86)
var shape = new Rune.Color ('hsv', 224, 56, 47)
// var guest = new Rune.Color ('hsv', )

var tile = r.rect(startX, startY, length, length).fill(p2).stroke(false)

var topLeft = r.circle(startX, startY, radius).fill(p1).stroke(false)
var topRight = r.circle(startX + length, startY, radius).fill(p1).stroke(false)
var bottomLeft = r.circle(startX, startY + length, radius).fill(p1).stroke(false)
var bottomRight = r.circle(startX + length, startY + length, radius).fill(p1).stroke(false)

var cenCir = r.circle(length/2, length/2, length * 0.2).fill(disTraveled).stroke(false)


var cenShape = [
  r.rect(length/2 - (length * 0.1), length/2 - (length * 0.1), length * 0.2, length * 0.2).stroke(false).fill(shape).rotate(45, length/2, length/2),
  r.circle(length/2, length/2, length * 0.1).stroke(false).fill(shape),
  r.triangle(length/2, length/2 - (length * 0.16), length/2 - (length * 0.15), length/2 + (length * 0.11), length/2 + (length * 0.15), length/2 + (length * 0.11)).stroke(false).fill(shape)
]

*/

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