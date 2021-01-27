class Paper{
    constructor(x, y,r) {
        var options = {
          
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.x=x
        this.y=y
        this.r=r 
        this.body = Bodies.circle(30,200,20,options);
       this.image=loadImage('paper.png')
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
      // translate(this.body.position.x, this.body.position.y);
      //  rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,40,40);
        pop();
      }
}