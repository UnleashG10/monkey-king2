
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(75,323,20,20)
  monkey.addAnimation("m",monkey_running)
  monkey.scale = 0.2;
  monkey.debug = true;

  invis = createSprite(300,393,600,20);
  invis.visible = false;
  
  ground = createSprite(30,390,600,20);
    ground.velocityX = -5;
  ground.x = ground.width /2;
  ground.shapeColor = "red";
  
  ground2=createSprite(902,390,600,20);
  ground2.velocityX = -5;
  ground2.shapeColor = "blue";
  
 score = 0;
  
  survivaltime = 0;
    
  foodGroup = new Group(); 
  obG = new Group();
  
}


function draw() {
background(220);
  
  
  if(keyDown("space") && monkey.y > 310){
    monkey.velocityY = -20;
           
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invis);
  
  b();
  g();
  g2();
  o();
  
  drawSprites();
  
  textSize(22);
  fill("red");
  text(" SCORE  =  " + score,450,50)
  
  textSize(22);
  fill("blue");
  text(" SURVIVAL  TIME  = " + survivaltime,10,50)
  survivaltime = survivaltime+1;
  
}


 function b(){
   
   if (frameCount % 170 === 0) {
     
   banana = createSprite(600,200,20,20);
  banana.addImage("b",bananaImage)
  banana.scale = 0.1;
  banana.velocityX = -5;
     banana.y = random(180,220);
     banana.debug = true;
     
     foodGroup.add(banana);
   }
     
     
     if(foodGroup.isTouching(monkey)){
        
       foodGroup.destroyEach();
       
       score = score+2;
       
        }
    
     
   
 }


function g(){
  
  if (ground.x === 0){
    ground.x = 300;
    
      
      }
    
}

function g2(){
  
  if (ground2.x === 602){
    ground2.x = 902;
    
      
      }
    
}

function o(){
  
  if (frameCount % 130 === 0) {
  
   ob = createSprite(600,360,20,20)
  ob.addImage("o",obstaceImage);
  ob.scale = 0.2
  ob.velocityX = -5;
    
    obG.add(ob);
    
  }
  
  if(obG.isTouching(monkey)){
    
    
    
    
  }
    
}
  

