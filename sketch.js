function setup() {
  createCanvas(displayWidth, displayHeight);
  background(220);
  drawHouse(); 
}

function drawHouse() {
  fill(0, 255, 0); 
  rect(0, 500, width, 200); 

  fill(255, 235, 139); 
  rect(150, 250, 100, 100); 

  
  fill(255, 0, 0); 
  triangle(150, 250, 250, 250, 200, 200); 

  
  fill(139, 69, 19); 
  rect(180, 300, 40, 50); 

  
  fill(255); 
  rect(165, 270, 20, 20); 
  rect(215, 270, 20, 20); 
}

function draw() {

  fill(255, 204, 0); 
  ellipse(50, 50, 80, 80); 
}