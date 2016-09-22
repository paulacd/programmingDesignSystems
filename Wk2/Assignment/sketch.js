var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: true
});

var size; 
var radius = 75; 
var margin = 30; 
var numCircles;

r.rect(0, 0, 600, 800)
  .fill(0)
  .stroke(false)

// for (var i = 0; i < 9; i++) {
//   size = r.random(2) * radius; 
//   var planet = r.ellipse(r.random(r.width), r.random(r.height), size, size)
//     .fill(255)
//     .stroke(false)
//     if (size > 150) {
//       planet.fill(50)
//     } else if (size > 100 && size < 150) {
//       planet.fill(80)
//     } else if (size > 50 && size < 100){
//       planet.fill(120)
//     } else if (size > 0 && size < 50){
//       planet.fill(190)
//     }

//     //if distance of both x, y is greater than the size + the margin, then draw 
//     //if not, don't draw 
//   }

for (var i = 0; i < 12; i++) {
  for (var j = 0; j < 12; j++) {
    r.ellipse(r.random(r.width), r.random(r.height), 0.8, 0.8)
      .stroke(false)
      .fill(255)
  }
}

numCircles = 3;

    for (var i = 0; i < numCircles; i++){
      for (var j = 0; j < numCircles; j++) {
        size = r.random(2) * radius; 
        if (size > 50){
          var planet = r.ellipse((i * r.width/numCircles) + size + margin, (j * r.height/numCircles) + size + margin, size, size)
        }
        if (size > 120) {
          planet.fill(40)
        } else if (size > 80 && size < 120) {
          planet.fill(80)
        } else if (size > 50 && size < 80){
          planet.fill(130)
        } 
      }
    }

r.text("The Martian", 109, 505)
  .fill(255)
  .stroke(false)
  .fontSize(12)
  .letterSpacing(0.5)
  .textAlign("left")
  .fontFamily("sans-serif")
r.ellipse(100, 500, 10,10).fill(255).stroke(false)
// var orbit = r.ellipse(100, 500, 50,50).fill(false).stroke(0)


r.draw();