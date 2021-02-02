class createDrop {
    constructor(x,y) {
        var physics = {
            friction: 1,
        }


        this.body = Bodies.circle(x,y,10,physics);
        World.add(world,this.body);
         this.x = x;
         this.y = y;
    }
    display() {
        var pos = this.body.position;
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,5); 


        
    }
    update() {
        var pos = this.body.position;
        if(pos.y > height) {
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0,400)});
        }
    }
}