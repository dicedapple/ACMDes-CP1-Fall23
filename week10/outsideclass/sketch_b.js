function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    colorMode(HSB);
    frameRate(24);
    smooth(10)
  }
  
  function draw() {
    background(80, 90, 100);
  
    let size = 200;
    let numLines = 20;
    let numPoints = 200;
  
    for (let i = 0; i < numLines; i++) {
      let offsetY = 100 + i / 400;
      let y = offsetY + (i * i) / 1;
  
      numPoints -= 1;
      size += i / 4;
      let steps = size / 200;
  
      for (let j = -size; j < numPoints; j++) {
        let x = j * size + (cos(frameCount / 1) * i * i) / 1;
        let y2 = y + (sin(frameCount / 0.1) * cos(j) * i) / 10;
        let col = color(200, 90, 300);
  
        push();
        translate(x, y2);
        rotate(sin(j) / 3000 + (i * sin((frameCount + 0.003) / 1000)) / 10000);
  
        // PLACEHOLDER Circles (relatively fast)
        strokeWeight(size / 400);
        stroke(200, 30, 100);
        fill(0, 1, 1, 200);
        square(200, 12, 90);
        pop();
      }
    }
  }
  