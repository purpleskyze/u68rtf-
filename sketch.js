var astronaut,bath,eat,sleep,gym,drink,move,bg,bgImg,gym2;
var edge1,edge2,edge3,edge4;
function preload(){
  
  bgImg = loadImage("iss.png");
  sleep =loadAnimation("sleep.png");
  eat=loadAnimation(" eat1.png","eat2.png");
  brush=loadAnimation("brush.png");
  gym =loadAnimation(" gym1.png","gym2.png"," gym1.png","gym2.png"," gym1.png","gym2.png"," gym11.png","gym12.png"," gym11.png","gym12.png"," gym11.png","gym12.png");
  bath=loadAnimation(" bath1.png","bath2.png");
  move =loadAnimation(" move.png","move1.png");
 
  
}

function setup(){
  
  createCanvas(600,400);
  
  bg = createSprite(200,200);
  bg.addImage(bgImg);
  bg.scale = 0.3;
  
  astronaut=createSprite(230,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  astronaut.setCollider("circle",60,-100,900);

  edge1 = createSprite(0,0,20,800);
  edge2 = createSprite(600,0,20,800);
  edge3 = createSprite(0,0,1500,20);
   edge4 = createSprite(0,400,1500,20);

   edge1.visible=false;
  edge2.visible=false;
  edge3.visible=false;
  edge4.visible=false;
 
}


function draw(){
        
  background("white");

  astronaut.bounceOff(edge1);
  astronaut.bounceOff(edge2);
  astronaut.bounceOff(edge3);
  astronaut.bounceOff(edge4);
  
  if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
  astronaut.x = 200;
  astronaut.y = 230;
  astronaut.velocityX=0;
  astronaut.velocityY = 0;
}
    if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
 astronaut.x = 200;
 astronaut.y = 230;
 astronaut.velocityX=0;
 astronaut.velocityY = 0;
}
  
  if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
 astronaut.x = 200;
 astronaut.y = 230;
 astronaut.velocityX=0;
 astronaut.velocityY = 0;
}
  
  if(keyDown("RIGHT_ARROW")){
 astronaut.addAnimation("eating",eat);
 astronaut.changeAnimation("eating");
 astronaut.x = 200;
 astronaut.y = 230;
 astronaut.velocityX=1;
 astronaut.velocityY = -1;
}
   
  if(keyDown("m")){
 astronaut.addAnimation("moving",move);
 astronaut.changeAnimation("moving");
 astronaut.x = 200;
 astronaut.y = 230;
 astronaut.velocityX=1-;
 astronaut.velocityY =-1;
}
  
  
  drawSprites();
}