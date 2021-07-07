var edges;
var trex, trex_running;
var ground;
var groundImage;
function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")  
groundImage = loadImage("ground2.png")
}

function setup(){
    createCanvas(600,200)
    
    //create a trex sprite
    trex = createSprite(50,150,10,40)
    trex.addAnimation("trexrunning", trex_running)
    trex.scale = 0.5

    //create edges
    edges = createEdgeSprites()
    
    //create ground
    ground = createSprite(200,200,600,5)
    ground.addImage("ground", groundImage)
    ground.x = ground.width/2
}

function draw(){
    background("white")
    //how to make t-rex jump
    if(keyDown("space")){
        trex.velocityY = -10
    }
    
    //gravity
    trex.velocityY = trex.velocityY + 0.5
    
    //to make t-rex run on the ground
    trex.collide(ground)
    
    //make the ground move infinitely
    ground.velocityX = -2
    console.log(ground.x)
    if(ground.x < 0){
      ground.x = ground.width/2
    }
    drawSprites()
}
