class Tree{
    constructor(x, y) {
            this.x=x;
            this.y=y;
            this.width = 200;
            this.height = 600;
            this.image = loadImage("Pluckingmangoes/tree.png");
            this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
            World.add(world, this.body);
          }
          display(){
            
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
    
}