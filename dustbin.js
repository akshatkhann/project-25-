class Dustbin{

    constructor(x, y, width, height) {
        var options = {
           isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.image = loadImage("dustbingreen.png");
World.add(world,this.body)






    }

display(){
   

    
    imageMode(CENTER)
    fill("green")
    
     image(this.image, 750,300, this.width, this.height);

    
}








    
}




