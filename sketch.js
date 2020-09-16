var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(600,400,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background("black");  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x === movingRect.width/2+fixedRect.width/2
     || movingRect.x-fixedRect.x === -(movingRect.width/2+fixedRect.width/2) 
     || movingRect.y-fixedRect.y === movingRect.height/2+fixedRect.height/2 
     || movingRect.y-fixedRect.y === -(movingRect.height/2+fixedRect.height/2)) 
  {
    fixedRect.shapeColor="white";
    movingRect.shapeColor="white";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}