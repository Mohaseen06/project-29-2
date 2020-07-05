class SlingShot{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        console.log("Inside Slingshot");
        //this.sling1 = loadImage('sprites/sling1.png');
       // this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
         console.log("Inside After Point B       "+bodyA, pointB);
        this.sling = Constraint.create(options);
        console.log("Inside After This.sling B");
        this.pointB = pointB
        World.add(world, this.sling);
        console.log("Inside After add world B");

    }
    
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                //image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}