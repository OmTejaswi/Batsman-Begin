class createUmbrella {
    constructor(x,y) {
        var physics = {
            isStatic: true
        }

        this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
        "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png"
        ,"images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");

        this.body = Bodies.circle(x,y,50,physics);
        World.add(world,this.body);

        
    }
    display() {
        var pos = this.body.position;
        //animationMode(CENTER);
        animation(this.image,pos.x,pos.y-(-100));
        //Animation(this.image,pos.x,pos.y);
    }
}