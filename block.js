class Block  {
    constructer(x,y,width,height){
    var options ={
      restitution:0.04,
      friction:0.0,
    } 
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height;
    World.add(world,this.body);
  }
  display(){
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,pos.x,pos.y);
pop();
  }
  };
  