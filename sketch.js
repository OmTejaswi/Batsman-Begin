    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;

     var maxDrops = 100;
    // var arrayDrops = [];
    // var drops;
    var dropsArray = []
    var drop;

    var man;
    var rand;
    var thunder;

    var thunder1, thunder2, thunder3, thunder4;
    var thunderGroup;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500, 600);


	engine = Engine.create();
    world = engine.world; 

    man = new createUmbrella(200,300);

    thunderGroup = new Group();

    Engine.run(engine);
}

function draw(){
    background(0);

    if(frameCount%2===0) {
        drop = new createDrop(random(0,500), 0);
        dropsArray.push(drop);
    }
   
    for(var i =0; i < dropsArray.length; i++) {
        dropsArray[i].display();
       // dropsArray[i].update();
    }
   
   
   man.display();
   
   
   
   
   
   
   
    //var maxDrops = 100;

            // for(var i = 0; i< maxDrops; i++) {
            //     dropsArray.push(new createDrop(random(0,600), random(0,400)));
            //     dropsArray[i].display();
            //     dropsArray[i].update();
            // }
 
    // drops.display()
    // drops.update(); 
    thunderVolt();
    drawSprites();
    
}   

function thunderVolt() {
    rand = Math.round(random(1,4));
    if(frameCount%80===0) {
        //thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30),10,10);

        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            default: break;
        }
        thunderGroup.add(thunder);
        thunder.scale = random(0.3,0.6);
    }
    if(thunder && frameCount%20) {
        thunderGroup.destroyEach();
    }
}