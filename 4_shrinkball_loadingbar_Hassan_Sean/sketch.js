//written by Hassan and driven by Sean

var circleX = 0;
var diam = 200

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // background
  background(250, 0, 250);
  // ellipse
  noStroke();
  fill(0, 0, 255);
  ellipse(circleX,circleX, diam, diam);
  
  circleX = circleX + 10;
    diam = diam - 10;
    
    rect(0,200, circleX, 50)
    
}