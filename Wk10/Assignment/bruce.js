var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var bruce = new Rune.Pixels("sloth.jpg");

function drawRect(x, y, w, h)
{

  var wRatio = bruce.width / r.width;
  var hRatio = bruce.height / r.height;
  var bruceX = Math.floor(x * wRatio);
  var bruceY = Math.floor(y * hRatio);
  var col = bruce.get(bruceX, bruceY);

  // first draw a rectangle
  r.rect(x, y, w, h)
    .fill(col)
    .stroke(false)

  // then figure out if we need to draw another
  var splitWidth = Rune.random(1) > 0.5;
  var splitWhere = Rune.random(0.3, 0.8);

  // if we're splitting the width
  if(splitWidth && w > 50)
  {
    drawRect(x, y, w * splitWhere, h);
    drawRect(x + (w * splitWhere), y, w * (1 - splitWhere), h);
  }
  // else if we're splitting the height
  else if(h > 50)
  {
    drawRect(x, y, w, h * splitWhere);
    drawRect(x, y + (h * splitWhere), w, h * (1 - splitWhere));
  }
}

bruce.load(function() {
  drawRect(0, 0, r.width, r.height);
  r.draw();
});