class Slingshot {
    constructor(point_A ,point_B){
        var options = {
            pointA : point_A,
            bodyB : point_B,
            stiffness : 0.5,
            length : 10,
        }
        this.sling = Constraint.create(options);
        Composite.add(world,this.sling);
    }
    fly(){
        this.sling.bodyB = null;
    }
    display(){
        if(this.sling.bodyB){
            var pointA = this.sling.pointA;
            var pointB = this.sling.bodyB.position;
            strokeWeight(5)
            stroke("green")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
