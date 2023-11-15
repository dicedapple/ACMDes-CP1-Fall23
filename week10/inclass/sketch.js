let numRings = 10
let radius
let strWeigth = 20

let backColor

function setup(){
	createCanvas(800, 800)
	colorMode(HSB, TWO_PI, 1, 1)
	radius = width*0.1
    backColor = color(0, 0, 0)
	

    setTimeout(()=>{
        backColor = color(0, 0, 1)
    }, 5000)

    setInterval(()=>{
        backColor = color(random(TWO_PI), 0.8, 0.8)
    }, 2000)
}

function draw() {
	background(backColor);
	noFill();
	strokeWeight(strWeigth);
	for(let i = 0; i < numRings; i++){
		stroke(color(i*TWO_PI/numRings, 0.9, 0.9));
		
		push();
		translate(width/2, height/2);
		rotate( sin( millis()*0.001 * (i*0.5+1) ) );
		arc(0, 0, radius*2+strWeigth*i*2, radius*2+strWeigth*i*2, QUARTER_PI+HALF_PI, TWO_PI+ QUARTER_PI);
		pop();
	}
}