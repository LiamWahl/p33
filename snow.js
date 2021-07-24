class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            density:0.8,
            friction:1
         }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("snow4.webp");
        this.snowImg=loadImage("snow5.webp");
        //this.color=color(random(0,255) ,random (0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r)
        pop();
    }

};