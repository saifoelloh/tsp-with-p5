let d1 = 0
let d2 = 0
let points = []

function setup() {
  // put setup code here
  input = createInput()
  input.position(20, 20)
  input.attribute('placeholder', 'banyak titik')

  button = createButton('submit')
  button.position(input.width + 30, 24)
  button.mousePressed(pointDrawer)

  canvas = createCanvas(1000, 500)
  background(0)
  canvas.position(20, 70)
}

function draw() {
  // put drawing code here
  if (points.length > 0) {
    background(0)
    fill(255)
    points.map(n => circle(n.x, n.y, 10))

    stroke(255)
    strokeWeight(1)
    noFill()
    beginShape()
    points.map(n => vertex(n.x, n.y))
    endShape()
  }
}

function pointDrawer() {
  const angka = parseInt(input.value())
  if (angka !== NaN) {
    for (var i = 0, len = angka; i < len; i++) {
      points[i] = createVector(random(width), random(height))
    }
  }
}

