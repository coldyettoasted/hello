// Declare variable for the horizontal position of the circle
let x = 25;
let p = 1;

function setup() {
  // Create the canvas
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT);
  textSize(75);
  text('Click to start or pause. \nMove your mouse to shift the colours.', 200, height/2);
  


  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

function draw() {
  // Clear the background
  //background(0);

  // Draw a circle, with hue determined by frameCount
  for (let i=-25; i<(height);i+=50){
  noStroke()
  fill(mouseX*mouseY/30000, 50, 100);
  circle(x-25-height+i, i, 50);}

  // Increase the x variable by 5
  x += 5;

  // Reset the circle position after it moves off the right side
  if (x > width + 25+height ) {
    x = -25;
  }

  describe('circle moving to the right');
}

function mousePressed() {
  if (p===1){
  p=p+1 
  textAlign(LEFT);
  textSize(75);
  fill('grey')
  text('Bye :(', width/3, height/2.5);}
  // Start/stop the animation loop
  
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}
