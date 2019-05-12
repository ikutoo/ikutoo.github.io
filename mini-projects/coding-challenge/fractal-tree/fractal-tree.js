var angle = 0;
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, TWO_PI, PI / 7, 0.01);
}

function draw() {
  background(0);
  angle = slider.value();
  stroke(255);
  strokeWeight(3);
  translate(width / 2, height);
  branch(height / 4);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 16) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}