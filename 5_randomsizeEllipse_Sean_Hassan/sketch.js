//Written by Sean, Driven by Hassan

var x = 0;
var y = 200;
var diameter = 0; 
var r = 23;
var g = 160;
var b = 135;

function setup() {
  createCanvas(600, 400);  
diameter = random(0, 600)
    
}

function draw() {
    
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);
  
  x = x + 1;
}

// Mouse Press changes Ellipse diameter to random size. 
function mousePressed() {
diameter = random(0, 600)
}