class BaseClass{
    constructor(x, y, width, height,angle){
        var options = {
            friction: 2,
            restitution: 0.2,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./sprites/base.png");
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        this.image.resize(this.width,this.height)
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
