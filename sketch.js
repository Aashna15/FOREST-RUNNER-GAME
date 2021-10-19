var bg , backgroundImg;
var boy , boyRunning;
var obstacle1;
var gameState="play";

var ground;
var obstacleGroup;
var treeImg , treeGroup;
var score=0;
var obstacle , tree;
var boyStop;

function preload(){
  backgroundImg=loadImage('images/Forest bg 2.jpg')
  boyRunning=loadAnimation('images/RB1.PNG','images/RB2.PNG','images/RB3.PNG' )
  obstacle1=loadImage('images/ObstacleT1.PNG')
  treeImg=loadImage('images/TreeImg.png')
  boyStop=loadAnimation('images/RB1.png')

}

function setup(){
  createCanvas(1000,600)
  //bg=createSprite(800,300,2000,800)
  //bg.addImage(backgroundImg)
  //bg.scale=2;
  //bg.velocityX=-3;
  //bg.x=bg.width/2;
  boy=createSprite(100,590,50,90)
  boy.addAnimation('Running',boyRunning)
  boy.addAnimation('Stop',boyStop)
  console.log(boy.depth)
  //boy.depth=tree.depth;
  //boy.depth=boy.depth+1;
  ground=createSprite(10,600,2000,10);
  ground.visible=false;

  obstacleGroup=new Group()
  treeGroup= new Group()
}

function draw(){
  background ('lightblue');
  textSize(20)
  fill ("black")
  text ("Score : "+ score,10,20);
  

 if(gameState=="play"){
  score=score+1
  if (keyDown('space')){
    boy.velocityY=-5;
  }
  
  boy.velocityY=boy.velocityY+0.1;
   TreeFN()
    obstacles()
    
    


 }

  if(gameState=="end"){
  score=0;
  obstacleGroup.setVelocityXEach(0);
  treeGroup.setVelocityXEach(0)
  obstacleGroup.destroyEach()
  treeGroup.destroyEach()
  boy.changeAnimation('Stop',boyStop)
 }

 if(obstacleGroup.isTouching(boy)){
  gameState="end";
  
  }

 boy.collide(ground)
 drawSprites()
}

function obstacles(){
  if (frameCount%250===0){
  obstacle=createSprite(800,570,60,30)
  obstacle.addImage(obstacle1)
  obstacle.scale=0.8;
  obstacle.velocityX=-3;
  //console.log(obstacle.depth)
  
  //obstacle.depth=tree.depth;
  //obstacle.depth=obstacle.depth+1;
obstacleGroup.add(obstacle)




  }

  }
  
  function TreeFN(){
    if (frameCount%200===0){
    
       tree=createSprite(800,400,60,30)
      tree.addImage(treeImg)
      tree.scale=2;
      tree.velocityX=-3;
      treeGroup.add(tree)
    
      console.log(tree.depth)
      tree.depth=boy.depth;
      boy.depth=boy.depth+1;
      
  }
}



