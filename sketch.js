function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(135, 206, 235); 
  
  fill(255, 255, 0); 
  ellipse(350, 50, 80, 80); 

  
  fill(34, 139, 34); 
  rect(0, 300, displayWidth, 900); 
  
  
  fill(255, 228, 181); 
  stroke(139, 69, 19); 
  rect(150, 200, 200, 200); 
  fill(100, 149, 237);
  triangle(150, 200, 250, 100, 350, 200); 

  
  fill(100, 149, 237); 
  rect(240, 300, 60, 100);
  fill(255); 
  ellipse(245, 350, 5, 5);
  
  
  fill(176, 224, 230); 
  rect(180, 250, 40, 40);
  rect(280, 250, 40, 40);
}
