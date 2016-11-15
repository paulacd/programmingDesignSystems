var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
});


var gridSize = 5;
var size = 20;
var gutter = 5;

var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: gutter,
  columns: gridSize,
  rows: gridSize
});

var margin = 50;
var start = -35; 

var x = r.random(margin, grid.state.moduleWidth - margin);
var y = r.random(margin, grid.state.moduleHeight - margin); 

var coral = new Rune.Color('hsv', 358, 54, 87);
// var coral = new Rune.Color(234, 108, 112);

blackX = ((((r.width - margin) / 5) - (gutter * 2.3))* 2) * 0.75;
blackY = (((r.height - margin) / 5) - (gutter * 2.1))* 3;

coralX = (((r.width - margin) / 5) - (gutter * 2.3))* 2.5;

// console.log(grid.state.moduleHeight)

var blackRect = r.rect(grid.state.moduleWidth/2 ,0, blackX, blackY)
.fill(0)
.stroke(false)
grid.add(blackRect, 2, 2)

for (var i = 1; i < 10; i++) {
  var rect = r.rect(grid.state.moduleWidth/2, start + 35 * i, coralX, size * 0.86)
  .fill(coral)
  .stroke(false)
  grid.add(rect, 2, 2)
}


  // var randomCol = Math.ceil(Rune.random(grid.state.columns));
  // var randomRow = Math.ceil(Rune.random(grid.state.rows));
  // grid.add(rect, randomCol, randomRow);

r.draw();