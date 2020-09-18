class Stone{

    constructor(x,y,r)
    {
        var options ={

            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }


        this.radius=r;
        this.x=x;
        this.y=y;
        
        this.body=Bodies.circle(x,y,this.radius/2,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);

    }

    

    display(){

       

        push();
        translate(this.body.position.x,this.body.position.y);
       // this.body.position.x = mouseX
        //this.body.position.x = mouseY
         
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();




    }











}