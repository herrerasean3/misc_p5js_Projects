//Written by Sean, Driven by Hassan
var circle = {
  x: 0,
  y: 100, 
  diameter: 50
};


var r = 255;
var g = 255;
var b = 255;
var r2 = 0;
var g2 = 0;
var b2 = 0;

function setup() {
  createCanvas(600, 400);  
r = random(0,255);
g = random(0,255);
b = random(0,255);
r2 = random(0,255);
g2 = random(0,255);
b2 = random(0,255);
}

function draw() {
  // background
  background(r2, g2, b2);
  // ellipse
  fill(r, g, b);

//creates rotating shapes. Epilepsy warning!
translate(width/2, height/2);
rotate(circle.x - 1);
rect(circle.x, circle.y, circle.diameter, circle.diameter);
ellipse(circle.x, circle.y + 10, circle.diameter, circle.diameter);
rect(circle.x, circle.y -50, circle.diameter, circle.diameter);
triangle(circle.x, circle.y, circle.x - 50, circle.y - 50, circle.x + 50, circle.y - 50);
  circle.x = circle.x + 1;
    
}

// Mouse Press changes fill and background to random rgb value.
function mousePressed() {
r = random(0,255);
g = random(0,255);
b = random(0,255);
r2 = random(0,255);
g2 = random(0,255);
b2 = random(0,255);
}