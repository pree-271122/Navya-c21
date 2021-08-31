class Ground{

//properties
constructor(x,y,w,h){
    var groundoptions={
        isStatic:true
      }
      
      this.x = x;
      this.y = y;
      this.width =w;
      this.height = h;

      this.body=Bodies.rectangle(x,y,w,h,groundoptions);
      World.add(world,this.body)
}


//functions
show(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}

}