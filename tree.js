class Tree{

    constructor(x,y,width,height)
    {
        var options={

            isStatic:true


        }
        this.x=x
        this.y=y
        this.width=width;
        this.height=height;

        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,0,0,options);
        this.image=loadImage("tree.png");
        World.add(world,this.body);

    }
    display(){

        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();




    }











}