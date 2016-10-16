var r = new Rune({
  container: "#canvas",
  width: 2400,
  height: 800,
  // debug: true
});


var f = new Rune.Font("../Comme-Heavy.ttf"); //LIKE

var SCALE = 0.8;
var offset = 17.32 * SCALE;


// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {

  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  var path = f.toPath("HONEYCOMB", 100, 450, 300)
    .fill(false)
    .stroke(false)

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  r.stage.add(path);

  // Just for fun, convert the path to polygons.
  var polys = path.toPolygons({ spacing: 5 });

  // loop through the points and change them a little bit
  for(var i = 0; i < polys.length; i++) {

    var poly = polys[i];

    for(var x = 0; x < r.width; x+= 30 * SCALE) {
      for(var y = 0; y < r.height; y+= 34.64  * SCALE) {
        if(poly.contains(x, y)) {
          if (x % (60 * SCALE)  == 0){
            hex(x, y + offset, 20 * SCALE);
          } else {
            hex(x, y, 20 * SCALE);
          }
          
          console.log(x, y);
        }
      }
    }
  }

  function hex (myX, myY, myRadius){
    // var radius = 20;
    var radius = myRadius;
    var points = 6;

      // for(var i = 0; i < points; i++) {

        var shape = r.polygon(0, 0);
        var spacing = 360/points;

          for(var j = 0; j < points; j++) {
            //first calculate myX as if it's 0,0 and then move it by myX and myY
            var x = Math.cos(Rune.radians(j * spacing)) * radius + myX;
            var y = Math.sin(Rune.radians(j * spacing)) * radius + myY;
            shape.lineTo(x, y)
            // .stroke(false);
            .fill(false)
          }

        // } 
  }

poly.removeParent();

  r.draw();
});
