var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

// r.rect(100, 100, 200, 200)
//   .fill(255, 0, 0)
//   .stroke(0)

// r.triangle(400, 50, 400, 400, 650, 50)
//   .fill(0, 255, 0)
//   .stroke(0)

// r.ellipse(200, 500, 200, 300)
//   .fill(0, 0, 255)
//   .stroke(false)

//--------------ICE CREAM-------------------------//

var x1 = r.width/2;
var y1 = r.height/2 + 60; 
var x2 = r.width/2 + 100;
var y2 = r.height/2 + 160;
var x3 = (r.width/2) + 225; 
var y3 = r.height/2 - 40; 

var originVector = new Rune.Vector (x1, y1);
var bottomRight = new Rune.Vector(r.width, r.height);

  var numTriangles = 4;


  r.ellipse (r.width/2, r.height/2 + 160, 200, 200)
    .fill (255)
    .stroke(0)
    .strokeWidth(3)

  r.rect(0, r.height/2 +200, r.width, r.height/2)
  .fill(0)
  .stroke(0)

r.triangle(x1, y1, x2, y2, x3, y3)
  .stroke (0)
  .strokeWidth(3)
  .fill(255)










// var vecA = new Rune.Vector(x1,y1);
// var vecB = new Rune.Vector(x2,y2);
// var vecC = new Rune.Vector(x3,y3);

// // ADD ADDITIONAL POINTS

// function multiplyScalar(vec, scalar) {

//   var x = vec.x * scalar;
//   var y = vec.y * scalar;
//   return new Rune.Vector(x,y);
// }

// var AtoB = vecB.sub(vecA); // create a new vector from A-B
// var directionAB = AtoB.normalize(); //normalize to unit vector (this give us the direction)
// var distAB = vecA.distance(vecB); // calculate the length of vector AtoB

// var ABsegment = distAB / 4; //divide the line from AB into 4 equal segments, this gives you a segment length

// // multiplying the direction vector AB by the distance (ie the three segments along the line) gives you a new 
// // vector with the correct "magnitude" ( they live at the origin 0,0)
// var ABseg1 = multiplyScalar(directionAB, ABsegment);
// var ABseg2 = multiplyScalar(directionAB, 2 * ABsegment);
// var ABseg3 = multiplyScalar(directionAB, 3 *  ABsegment);

// var ABone = vecA.add(ABseg1); // locate the first point on the line AtoB
// var ABtwo = vecA.add(ABseg2); // locate the second point on the line AtoB
// var ABthree = vecA.add(ABseg3); // locate the third point on the line AtoB

// // draw ellipses ( for debugging )

//   r.ellipse (ABone.x, ABone.y, 5, 5)
//     .fill (0,255,0)
//     .stroke(0)


//   r.ellipse (ABtwo.x, ABtwo.y, 5, 5)
//     .fill (0,255,0)
//     .stroke(0)


//   r.ellipse (ABthree.x, ABthree.y, 5, 5)
//     .fill (0,255,0)
//     .stroke(0)

// // console.log(vecAB.x + " " + vecAB.y);
// //   r.ellipse (vecAB.x, vecAB.y, 10, 10)
// //     .fill (255,0,0)
// //     .stroke(0)


// // console.log(vecAB.x + " " + vecAB.y);
// //   r.ellipse (halfAB.x, halfAB.y, 10, 10)
// //     .fill (255,0,0)
// //     .stroke(0)

//   // for (var i = bottomRight; i > originVector; i--){
//   //   console.log ("hello world")
//   //   x2 += i; 
//   //   console.log (x2)
//   // }

//   console.log("outside of the loop")

//   for (var i = 1; i < numTriangles; i++) {
//     console.log ("in the for loop");
//     r.triangle (x1, y1, (x1 + 100 /numTriangles) * i, y2, x3, y3)
//       .stroke (0)
//       .fill(false)
//   //   console.log (100)

//   }





// // r.ellipse(200, 500, 200, 300)
// //   .fill(0, 0, 255)
// //   .stroke(false)
// 
r.draw();