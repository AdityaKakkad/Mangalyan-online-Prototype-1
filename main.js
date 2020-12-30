canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

bg_image = "mars.jpg";

rvr_img = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    bg_image_tag = new Image();
    bg_image_tag.onload = uploadBackground;
    bg_image_tag.src = bg_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rvr_img;
}

function uploadBackground() {
    ctx.drawImage(bg_image_tag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e) {
key_pressed = e.keyCode;
console.log(key_pressed);
if(key_pressed=='38'){
    //up();
    console.log("UP");
}

if(key_pressed=='37'){
    //left();
    console.log("LEFT");
}

if(key_pressed=='39'){
    //right();
    console.log("RIGHT");
}

if(key_pressed=='40'){
    //down();
    console.log("DOWN");
}
}