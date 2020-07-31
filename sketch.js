class Flock {
  constructor() {
    this.boids = [];
    this.prevBoidSnapShot = [];
  }
  run() {
    for (let boid of this.boids) {
      boid.edges();
      this.prevBoidSnapShot = this.boids;
      boid.calculateFlockFactor(this.prevBoidSnapShot, 120);
      boid.move();
      boid.show();
    }
  }

  add(count){
    for (let i = 0; i < count; i++) {
      this.boids.push(new Boid());
    }
  }
}

let alignmentSlider, cohesionSlider, separationSlider;
let alignmentText, cohesionText, separationText;
let flock;

function setup() {
  createCanvas(1200, 800);
  alignmentSlider = createSlider(0, 5, 1, 0.1);
  alignmentText = createDiv("Alignment Slider");
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  cohesionText = createDiv("Cohesion Slider");
  separationSlider = createSlider(0, 5, 1, 0.1);
  separationText = createDiv("separation Slider");
  flock = new Flock();
  flock.add(300);
}

function draw() {
  background(51);
  flock.run();
}