class Mango{

    constructor(x,y,r)
    {
        var options ={

            isStatic:true,
            restitution:0,
            friction:1,
           
        }


        this.radius=r
        this.x=x;
        this.y=y
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        this.image=loadImage("mango.png");
        World.add(world,this.body);

    }
    display(){

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();




    }











}