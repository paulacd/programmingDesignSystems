var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: true
});

var spacing = 30;

for(var x = 0; x < r.width; x += spacing) {
  for(var y = 0; y < r.height; y += spacing) {

    var hue;
    var sat;
    var bri;

    if (y < r.height * 0.33) {
      hue = (r.random(215, 270));
      sat = (100);
      bri = (r.random(50, 60));

    } else if (y > r.height * 0.33 && y < r.height * 0.66){
      hue = (r.random(100, 160));
      sat = (r.random(60, 80));
      bri = (r.random(40, 50));

    } else {
      hue = (r.random(40, 50));
      sat = (40, 60);
      bri = (r.random(70, 80));

    }
    var offset = 4;

      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x, y, x + spacing, y, x + (spacing/2), y + (spacing/2)).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x + spacing, y, x + (spacing/2), y + (spacing/2), x + spacing, y + spacing).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x + (spacing/2), y + (spacing/2), x + spacing, y + spacing, x, y + spacing).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x, y, x + (spacing/2), y + (spacing/2), x, y + spacing).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
  }
}

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width ,
  height: r.height ,
  gutter: 0,
  columns: 3,
  rows: 3
});

r.draw();