var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


var size = 200;
var xCenter = r.width/2; //size/4 = 50
var yCenter = r.height/2;

 

r.rect(xCenter, yCenter, size, size)
  .fill(255, 0, 0)
  .stroke(0, 255, 0)
  .strokeWidth(5);

  // r.rect(100, 100, 50, 50)
  // .fill(0, 255, 0)
  // .stroke(255, 0, 0)
  // .strokeWidth(5);




r.draw();