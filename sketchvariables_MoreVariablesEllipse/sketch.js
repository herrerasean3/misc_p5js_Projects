var x = 0;
var y = 200;
var diam = 50;
var r = 23;
var g = 160;
var b = 135;

function setup() {
  createCanvas (600, 400);
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diam, diam);

  x = x + 1;
}