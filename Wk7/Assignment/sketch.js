var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});



var h1 = r.random(360)
var s1 = r.random(80, 100)
var b1 = 100

var h2 = h1 + 40
var s2 = r.random(80, 100)
var b2 = 100

var circleHue = h1 - r.random(100, 200)

var padding = 150

r.rect(r.width / 2 - padding, r.height / 2 -padding, 250, 250)
	.fill(false)
	.stroke(50)
	.strokeWidth(3)
	.rotate(60, r.width/2 + 10, r.height/2)


var j = 5;
var shape1 = r.polygon(r.width/2, r.height/2 + 20)
  .lineTo(-35*j, 5*j)
  .lineTo(45*j, -15*j)
  .lineTo(60*j, -25*j)
  .lineTo(-5*j, -25*j)
  .rotate(r.random(-25, 25), r.width/2, r.height/2)
  .stroke(false)
  .fill('hsv', h1, s1, b1, 0.5)

var i = 2.2
var diamond = r.polygon(r.width/2 + 50, r.height/2 - 190)
	.lineTo(-20*i, 0*i)
	.lineTo(50*i, 0*i)
	.lineTo(50*i, 50*i)
	.lineTo(-60*i, 120*i)
	.rotate(r.random(-50), r.width/2, r.height/2)
	.stroke(false)
	.fill('hsv', h2, s2, b2, 0.5)

r.circle(r.width/2, r.height/2, 80)
	.stroke(false)
	.fill('hsv', circleHue, 80, 100, 0.5)

r.draw();