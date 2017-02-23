function setup() {
	createCanvas (700, 700);
}

function draw() {
//Draws an ellipse at 100, 250 with a height and width of 80
ellipse(100, 250, 80, 80);
//Draws a triangle using (300,300), (0,0), and (0,25) as coordinates
triangle(300, 300, 0, 0, 0, 25);
//Draws a 100x100px rectangle at (400,50)
rect(400, 50, 100, 100);
//Draws a point at the specified coordinates
point(100, 500);
point(80, 480);
point(60, 500);
point(80, 520);
}

