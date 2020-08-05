function setup() {
  createCanvas(400, 400);
  r1 = {
    x1:0,
    y1:100,
    x2:200,
    y2:100
  }
}

function draw() {
  background(42);
  noStroke();
  fill(125);
  //rectMode(CENTER);
  rect(r1.x1,r1.y1,r1.x2,r1.y2);
  r1.x1 += 1;
  r1.y2 += 1;
  
}
