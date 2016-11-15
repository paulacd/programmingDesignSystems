var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true
});


var gridSize = 5;
var size = 20 * 0.86;
var gutter = 5;

var coral = new Rune.Color('hsv', 358, 54, 87);
var beige = new Rune.Color('hsv', 30, 8, 93);

var background = r.rect(0, 0, r.width, r.height)
  .fill(beige)
  .stroke(false)

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

// var coral = new Rune.Color(234, 108, 112);



blackX = ((((r.width - margin) / 5) - (gutter * 2.3))* 2) * 0.75;
blackY = (((r.height - margin) / 5) - (gutter * 2.1))* 3;

coralX = (((r.width - margin) / 5) - (gutter * 2.3))* 2;

// console.log(grid.state.moduleHeight)

var blackRect = r.rect(grid.state.moduleWidth/2 ,0, blackX, blackY -1.5)
.fill(0)
.stroke(false)
grid.add(blackRect, 2, 2)

for (var i = 1; i < 10; i++) {
  var currentY = start + 35 * i
  var rect = r.rect(grid.state.moduleWidth/2, currentY, coralX, size)

  if (i == 3 || i == 4){
    currentY = 0;
  }
  rect.fill(coral)
  rect.stroke(false)
  grid.add(rect, 2, 2)
}

for (var i = 0; i < 3; i++){
  var beigeRect = r.rect (grid.state.moduleWidth/2 + (size*2) * i + 20, -1.5, size, (grid.state.moduleHeight * 2.2) + size)
  .fill(beige)
  .stroke(false)
  grid.add(beigeRect, 2, 2)
}

for (var i = 0; i < 4; i++){
  var longBlackVerticalRect = r.rect ((grid.state.moduleWidth - size) + (size*2) * i, 3, size, grid.state.moduleHeight * 2.5)
  .fill(0)
  .stroke(false)
  grid.add(longBlackVerticalRect, 4, 3)
}

var longCoralRect = r.rect (grid.state.moduleWidth/3, grid.state.moduleHeight/3, size, grid.state.moduleHeight * 4.5)
  .fill(coral)
  .stroke(false)
  grid.add(longCoralRect, 1, 1)

  var longCoralRect = r.rect (grid.state.moduleWidth/3 + size *2, grid.state.moduleHeight/3, size, grid.state.moduleHeight * 4.5)
  .fill(coral)
  .stroke(false)
  grid.add(longCoralRect, 1, 1)


  // var randomCol = Math.ceil(Rune.random(grid.state.columns));
  // var randomRow = Math.ceil(Rune.random(grid.state.rows));
  // grid.add(rect, randomCol, randomRow);

r.draw();