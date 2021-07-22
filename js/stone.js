class Stone {
    constructor(x,y,r){
        let options={
    restitution: 1,
    frictionAir:0.01,
    friction:0.02,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r= r
    World.add(world, this.body);
}
show() {
    var pos = this.body.position;
    
    rectMode(CENTER);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y,this.r);
    
  }


}
