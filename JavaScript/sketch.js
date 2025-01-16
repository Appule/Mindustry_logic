function setup(){
  createCanvas(200, 200);
}

const dayLength = 100000;
const scl = 5;
const dayLati = 0.0;

function draw(){
  background(255);
  let time = Date.now();

  let dayTime = time / dayLength * TWO_PI;

  let darkness = sin(dayTime)-dayLati;

  background(0, 0, 0, min(max(darkness*255*scl, 0), 255));
  stroke(255);
  fill(0);

  let clockTime = ((dayTime-HALF_PI)%TWO_PI)/TWO_PI * 24;
  let hourTime = floor(clockTime);
  text(hourTime, 10, 10);
  let minTime = floor((clockTime%1)*60);
  text(minTime, 10, 20);
}