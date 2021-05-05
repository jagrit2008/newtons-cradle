class Bob{
    constructor(x, y,  radius) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.2,
          'density':0.8
      }
      this.x=x;
      this.y=y;
      this.radius =radius;
    
      this.body = Bodies.circle(this.x,this.y,  (this.radius-20)/2, options);
     
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
     ellipseMode(RADIUS);
      fill("red");
     ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };
  