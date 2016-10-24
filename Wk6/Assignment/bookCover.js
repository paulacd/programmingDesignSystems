var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  // debug: true
});

var spacing = 30;
var f = new Rune.Font("../Memimas.ttf");

f.load(function(err) {

var cols = Math.floor(r.width / spacing);
var colThird = Math.floor(cols / 3);
var rows = Math.floor(r.height / spacing);
var rowThird = Math.floor(rows / 3);

var xSectionA = Math.floor(r.random(colThird * 1.1, colThird * 1.4)) * spacing;//Math.floor(r.random(0,numX)) * spacing;
var ySectionA = Math.floor(r.random(rowThird)) * spacing;

var xSectionB = Math.floor(r.random(colThird * 2.3, cols)) * spacing;
var ySectionB = Math.floor(r.random(rowThird, rowThird * 2)) * spacing;

var xSectionC = Math.floor(r.random(0, colThird * 2.3)) * spacing;
var ySectionC = Math.floor(r.random(rowThird *2, rowThird * 3)) * spacing;

console.log(xSectionA, ySectionA);

for(var x = 0; x < r.width; x += spacing) { // this is 30 iterations
  for(var y = 0; y < r.height; y += spacing) { // this 90 iterations

    var hue;
    var sat;
    var bri;

    if (y < r.height * 0.33) {
      //if (x == xSectionA * 3 && y == ySectionA){
      if (x == xSectionA && y == ySectionA){
        hue = 0;
        sat = 100;
        bri = (r.random(60, 80));
      } 
      else {
        hue = (r.random(215, 270));
        sat = 100;
        bri = (r.random(30, 40));
      }
      

    } else if (y > r.height * 0.33 && y < r.height * 0.66){
      if (x == xSectionB && y == ySectionB){
        hue = 25;
        sat = 90;
        bri = 80;
      } else {
        hue = (r.random(100, 160));
        sat = (r.random(60, 80));
        bri = (r.random(40, 50));
      }
    } else {
      if (x == xSectionC && y == ySectionC){
        hue = 125;
        sat = 100;
        bri = 70;
      } else {
      hue = (r.random(40, 50));
      sat = (40, 60);
      bri = (r.random(70, 80));
      }
    }

    var offset = 4;

        console.log('its true');
      
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

//test rectangles to verify section positions
// r.rect(xSectionA, ySectionA, spacing, spacing).fill(true)
// r.rect(xSectionB, ySectionB, spacing, spacing).fill(true)
// r.rect(xSectionC, ySectionC, spacing, spacing).fill(true)

//draw the grid for placement. To show/hide comment out the debug line at the top
var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width ,
  height: r.height ,
  gutter: 0,
  columns: 3,
  rows: 3
});

 var path = f.toPath("Le Petit Prince", 150, 200, 200)
  .fill(255, 0, 0)


r.draw();



});