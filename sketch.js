const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world; 

var backgroundImg;
var snowfall = [];
var snow;


function preload(){

  backgroundImg=loadImage("snow1.jpg");
  //snowImg=loadImage("snow4.webp");
    
  }



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 
  engine = Engine.create();
  world=engine.world;

  snow = new Snow(random(0,400),10);


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);



  if(frameCount%60===0){
    snowfall.push(new Snow(random (width/2-30,width/2+30),10,10));
    }

  //snowfall.display();
  snow.display();
  
  
  drawSprites();



//spawnSnow();

}
function spawnSnow(){
  if(frameCount % 300 === 0){
  snow = createSprite(800,0);
  snow.addImage(snowImg);
  snow.scale = .5
  
  snow.velocityY = 1;
    
  snow.x = Math.round(random(120,400));
    
  snow.lifetime = 800;
    
  snow.depth = background.depth
  snow.depth = snow.depth+1;
  
  
  
  snowGroup.add(snow);
  }
    
    
  }