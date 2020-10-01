 //crude paint application
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    loop();
    ellipse(mouseX, mouseY, 40, 40);
    fill(0);

  }
}
