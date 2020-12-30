class BaseClass {
    constructor(x,y,width,height,angle) {
        this.body = Bodies.rectangle(x,y,width,height, {restitution: 1})
        this.width = width
        this.height = height
        this.image = loadImage("sprites/base.png")

        World.add(world, this.body)
    }
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push();
        translate(position.x, position.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height)
        pop();
    }
}