X_AXIS = 1;
Y_AXIS = 2;
function setup() {
  frameRate(60);
createCanvas(640,480);
no_of_circles = 5;
bc = [];
for(let i = 0;i < no_of_circles;i+=1){
bc.push({
          x:random(0,640),
          y:random(450,490),
          s:random(0.1,2),
          xvel:random(-1,1),
          density:random(0.5,2)
  
        });
}
  gravity = 1;
  c1 = color(12,120,255);
  c2 = color(20,150,255);
}



function draw() {
  setGradient(0, 0, 840, height, c1, c2, X_AXIS);
  
  //
  stroke(24,150,255);
  strokeWeight(50);
  for(let i=0;i<no_of_circles;i++){
    fill(255,255,255,200);
    ellipse(bc[i].x,bc[i].y,bc[i].s);
    bc[i].y -= gravity*bc[i].density;
    bc[i].x += bc[i].xvel;
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
