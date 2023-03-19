let a = 700;
let b = 700;

function setup() {
  createCanvas(a, b);
  background(0);
  noLoop();
  stroke(255);
  strokeWeight(1.5);
}

function draw() {
  let radiusLimit = min(a, b) / 2 - 100;
  let cx = a / 2;
  let cy = b / 2;

  for (let r = radiusLimit; r >= 100; r -= 8) {
    let circumference = 2 * PI * r;
    let n = floor(circumference / 8);

    fill(0);
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = map(i, 0, n, -0.1, TWO_PI + 0.1);
      let x = cx + r * cos(angle);
      let y = cy + r * sin(angle);

      let ord = (70 / (1 + pow(x - cx, 4) / pow(10, 7))) * noise(x / 35 + y);
      vertex(x, y - ord);

      stroke(i, 250 - i, i + 10);
    }
    endShape();
  }
}
