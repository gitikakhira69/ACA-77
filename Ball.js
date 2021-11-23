class Ball {
    constructor(x,y,r){
        var options = {
            friction: 2,
            restitution: 0.2,
            density: 1
        };
        this.body = Bodies.circle(x, y,r, options);
        this.radius = r;
        this.image = loadImage("sprites/golf-ball.png");
        Composite.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER); 
        this.image.resize(10,10) 
        image(this.image,pos.x, pos.y, this.radius,this.radius);        
        pop();
    }
}

