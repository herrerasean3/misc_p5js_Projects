var circle = {
 x: 0,
 y: 200,
 diam: 50
};

var r = 23;
var g = 160;
var b = 135;

function setup() {
}

function draw() {
    createCanvas (600, 400)
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(circle.x, circle.y, circle.diam, circle.diam);

  circle.x = circle.x + 1;
}