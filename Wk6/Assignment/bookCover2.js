var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800
});

// Create a new Rune.Font object
var f = new Rune.Font("../Memimas.ttf");
var myGroup = r.group(0, 0);
var spacing = 30;

// load() will actually load the font file and call the function
// when the loading is done.
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

  for(var x = 0; x < r.width; x += spacing) { // this is 30 iterations
  for(var y = 0; y < r.height; y += spacing) { // this 90 iterations

    var hue;
    var sat;
    var bri;

    if (y < r.height * 0.33) {
      //if (x == xSectionA * 3 && y == ySectionA){
      if (x == xSectionA && y == ySectionA){
        hue = 0;
        sat = 90;
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
        bri = 85;
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
    r.triangle(x, y, x + spacing, y, x + (spacing/2), y + (spacing/2), myGroup).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x + spacing, y, x + (spacing/2), y + (spacing/2), x + spacing, y + spacing, myGroup).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x + (spacing/2), y + (spacing/2), x + spacing, y + spacing, x, y + spacing, myGroup).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
      hue += (r.random(-offset, offset));
      sat += (r.random(-offset, offset));
      bri += (r.random(-offset, offset));
    r.triangle(x, y, x + (spacing/2), y + (spacing/2), x, y + spacing, myGroup).fill('hsv', hue, sat, bri).stroke('hsv', hue, sat, bri)
  
    }
  }

  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  var title = f.toPath("Le Petit Prince", 20, 430, 50)
    .fill(255)
    .stroke(255)

  var author = f.toPath("Antoine de Saint-Exupéry", 20, 455, 20)
    .fill(255)
    .stroke(255)

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  r.stage.add(title);
  r.stage.add(author);

myGroup.rotate(45, 0, r.height)



  r.draw();
});