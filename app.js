let a = 400;
let b = 700;

function setup() {
  createCanvas(a, b);
  background(0);
  stroke(255);
}

function draw() {
  for (y = 100; y < b - 100; y += 8) {
    beginShape();
    fill(0);
    stroke(255);
    strokeWeight(1.5);

    for (x = 0; x < a; ++x) {
      vertex(
        x,
        y - (70 / (1 + pow(x - a / 2, 4) / pow(10, 7))) * noise(x / 35 + y)
      );
    }
    endShape();
  }
}
