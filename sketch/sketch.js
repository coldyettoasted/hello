function setup() {
  createCanvas(3508, 2480);  //Canvas size
  background(255,200,199); //background color     
  strokeWeight(4);
  frameRate(30);
}


function draw() {
  fill(mouseX/4,mouseY/2,mouseX/2)
  rect(400,100+(mouseX/20)+(mouseY/40),300,200-(mouseX/20)-(mouseY/40));
  triangle(1100,100,900,400,1200,400);
  fill(255,255,255);
  circle(700,500,200);
  line(600,400,800,600);
  line(800,400,600,600);
  triangle(400,700,1100,700,600,900);

}
