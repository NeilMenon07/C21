
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,200,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300,200,50,50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }

  else if(isTouching(gameObject2,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  
  else if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject1.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



