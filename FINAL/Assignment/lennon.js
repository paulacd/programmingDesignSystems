var r = new Rune({
  container: "#canvas",
  width: 300,
  height: 500,
  debug: true
});

var darkGrey = new Rune.Color ('hsv', 0, 0, 25, 0.5)
var lightGrey = new Rune.Color ('hsv', 0, 0, 53, 0.5)

// var john1 = new Rune.Vector(0, 0)
// var john2 = new Rune.Vector(r.height, (r.width / 3) *2.3)
// var john3 = new Rune.Vector(0, r.height)

// var yoko1 = new Rune.Vector()
// var yoko2 = new Rune.Vector()
// var yoko3 = new Rune.Vector()

var John  = {
  x1: 0,
  y1: 0,
  x2: (r.width / 3) *2.3,
  y2: r.height,
  x3: 0,
  y3: r.height
}

var Yoko = {
  x1: r.width,
  y1: r.height/4,
  x2: r.width,
  y2: r.height,
  x3: r.width /6,
  y3: r.height
}

var johnTri = r.triangle(John.x1, John.y1, John.x2, John.y2, John.x3, John.y3).stroke(false).fill(darkGrey)
var yokoTri = r.triangle(Yoko.x1, Yoko.y1, Yoko.x2, Yoko.y2, Yoko.x3, Yoko.y3).stroke(false).fill(lightGrey)



var intersection = line_intersect(John.x1, John.y1, John.x2, John.y2, Yoko.x1, Yoko.y1, Yoko.x3, Yoko.y3)


for (var i = 0; i < 5; i++) {
  

}





function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4)
{
    var ua, ub, denom = (y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1);
    if (denom == 0) {
        return null;
    }
    ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/denom;
    ub = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3))/denom;
    return {
        x: x1 + ua*(x2 - x1),
        y: y1 + ua*(y2 - y1),
        seg1: ua >= 0 && ua <= 1,
        seg2: ub >= 0 && ua <= 1
    };


}








  r.draw(); 
