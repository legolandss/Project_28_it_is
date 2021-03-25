  
class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.naihc = Constraint.create(options);
        World.add(world, this.naihc);
    }

    fly(){
        this.naihc.bodyA = null;
    }

    display(){
        if(this.naihc.bodyA){
            var pointA = this.naihc.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}