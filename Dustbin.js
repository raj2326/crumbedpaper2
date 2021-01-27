class Dustbin{
    constructor(x, y) {
        
        this.left = Bodies.rectangle(x, y,20,100,{isStatic:true});
        this.base = Bodies.rectangle(x+100, y+40,200,20,{isStatic:true});
        this.right = Bodies.rectangle(x+200, y,20,100,{isStatic:true});
        this.width=width
        this.height=height
       this.image=loadImage('dustbingreen.png')
        World.add(world, this.left);
        World.add(world, this.base);
        World.add(world, this.right);
      }
      display(){
        var lpos = this.left.position;
        var bpos = this.base.position;
        var rpos = this.right.position;
        push();
        
        fill('white')
        rect(lpos.x,lpos.y,20,100)
        rect(bpos.x,bpos.y,200,20)
        rect(rpos.x,rpos.y,20,100)
        imageMode(CENTER)
        image(this.image,900,350,200,200)
        pop();
      }
}