function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(135, 206, 235); // light blue sky
  
  // Draw Sun
  fill(255, 255, 0); // yellow
  ellipse(350, 50, 80, 80); // sun

  // Draw Ground
  fill(34, 139, 34); // green
  rect(0, 300, displayWidth, 900); // ground
  
  // Draw House
  fill(255, 228, 181); // peach
  stroke(139, 69, 19); // brown
  rect(150, 200, 200, 200); // main body
  fill(100, 149, 237);
  triangle(150, 200, 250, 100, 350, 200); // roof

  // Door
  fill(100, 149, 237); // cornflower blue
  rect(240, 300, 60, 100);
  fill(255); // white
  ellipse(245, 350, 5, 5);
  
  // Windows
  fill(176, 224, 230); // powder blue
  rect(180, 250, 40, 40);
  rect(280, 250, 40, 40);
}
