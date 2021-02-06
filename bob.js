class bob{
    constructor(x,y,r)
{
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2 
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body);
}

display()
{
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rotate(this.body.angle)
    fill("#527EEA")
    pop()
}
}