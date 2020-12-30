class Log extends BaseClass{
    constructor(x,y,angle,height) {
        super(x,y,20,height,angle)
        this.image = loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.body,angle)

    }
        
    display(){
        super.display()
    }
}

