let width = document.body.clientWidth, height = document.body.clientHeight;
let stars = [];
let angle = angle_speed = 0, speed = 1;
let stars_number = (width > height) ? width * 2 : height * 2;

function setup() {
	createCanvas(width, height);
	for(let i = 0; i < stars_number; i++){
		stars[i] = new Star();
	}
}

function draw() {
	angle += angle_speed;
	background(0);
	translate(width/2, height/2);
	rotate(angle);
	for(let star of stars) {
		star.update();
		star.show();
	}
}

function keyPressed(){
	switch(keyCode){
		case UP_ARROW:
			speed++;
			break;
		case DOWN_ARROW:
			speed--;
			break;
		case LEFT_ARROW:
			angle_speed -= PI/360;
			break;
		case RIGHT_ARROW:
			angle_speed += PI/360;
			break;
		case ENTER:
			speed = 2;
			angle_speed = 0;
			break;
		default:
			return false;
	}
}

function mousePressed(){
	angle_speed = map(mouseY, 0, height, -PI/60, PI/60);
	speed = map(mouseX, 0 , width, -20, 20);
}