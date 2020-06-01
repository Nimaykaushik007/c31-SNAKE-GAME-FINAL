let snake; 
let pixel = 25;
let treet;
let w;
let h;
let treetIMG;


function setup(){
    createCanvas(500,500);
    treetIMG = loadImage("sprites/apple.png");
    w = floor(width / pixel);
    h = floor(height / pixel);
    frameRate(5)
    snake = new Snake();
    
    treetLocation();
}
function treetLocation(){
    let x = floor(random(w));
    let y = floor(random(h));
    treet = createVector(x,y);
}
function draw(){
    scale(pixel);
    background(80,80,80);
    if(snake.consume(treet)){
        treetLocation();
    }
    snake.consume(treet);
    snake.update();
    snake.show();
   if(snake.die()){
       background(255,0,0);
       noLoop();
   }
   
    noStroke();
    fill(255,0,0);
    image(treetIMG,treet.x,treet.y,1,1)
    
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake.setDir(-1,0);
}
    else if(keyCode === RIGHT_ARROW){
        snake.setDir(1,0);
}
    else if(keyCode === UP_ARROW){
        snake.setDir(0,-1);
}
    else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1);
    }
}