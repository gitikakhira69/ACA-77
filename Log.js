class Log extends BaseClass{
    constructor(x,y,w,h,angle){
        super(x,y,w,h)
        this.image = loadImage("sprites/wood.png")
        Matter.Body.setAngle(this.body, angle);
    }
    
}