var pointX = 0;

function setup() {
  createCanvas (600, 400);
}

function draw() {
  // background
  background(0);
  stroke(255)
  for (var i = 0; i < 100; i++) {
  var pointX = random(100);
  point(pointX*5);
  line(0, i, 50+pointX, i);

  }
}