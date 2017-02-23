// Written by Sean, Driven by Hassan.
function setup() {
  createCanvas(1600, 1400);
  background('black');
    
}

function draw() {
//Draws a red triangle at the specified coordinates
stroke(0);
fill('red');
triangle(mouseX + 450,mouseY + 250,mouseX + 400,mouseY + 300,mouseX + 500,mouseY + 300);
//Draws a white rectangle
fill(255);
rect(mouseX + 410,mouseY + 300, 80, 200)
//Draws yellow triangles at the specified coordinates
fill('yellow');
triangle(mouseX + 410,mouseY + 500,mouseX + 410,mouseY + 550,mouseX + 450,mouseY + 500);
triangle(mouseX + 490,mouseY + 500,mouseX + 490,mouseY + 550,mouseX + 450,mouseY + 500);
}

// try mousePressed function 
function mousePressed() {
      background('black');
}

