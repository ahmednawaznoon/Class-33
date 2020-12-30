class SlingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
          }
          this.sling1 = loadImage("sprites/sling1.png")
          this.sling2 = loadImage("sprites/sling2.png")
          this.sling3 = loadImage("sprites/sling3.png")
          this.pointB = pointB
          this.sling = Constraint.create(options)
          World.add(world,this.sling)
        
          
        
    }
    fly() {

        this.sling.bodyA = null
    }

    attach(body) {
        this.sling.bodyA = body
    }

    display(){
        
        image(this.sling1,200,190)
        image(this.sling2,173,190)
        //image(this.sling3,200,20)
        
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            strokeWeight(3)
            stroke("#311708")
            if  (pointA.x<220) {
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+25)
                line(pointA.x-20,pointA.y,pointB.x+25,pointB.y+20)
                image(this.sling3,pointA.x-30,pointA.y-15,15,30)

            }else{
                line(pointA.x+25,pointA.y+5,pointB.x-10,pointB.y+25)
                line(pointA.x+25,pointA.y+5,pointB.x+25,pointB.y+20)
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)


            }
            
            

        }

    }

    
}