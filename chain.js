class Chain{

    constructor(body,pointB)
    {
        var options ={

            bodyA:body,
            pointB:pointB,
            stiffness:0.01,
            length:10, 
        }
        this.pointB=pointB
        this.bodyA=body

        this.chain=Constraint.create(options);
        World.add(world,this.chain);

    }
    attach(body){

        this.chain.bodyA = body ;


    }
    fly(){

        this.chain.bodyA = null;


    }
   


    display(){
if (this.chain.bodyA){
    
    var pointa=this.chain.bodyA.position
    var pointb=this.pointB
    
    strokeWeight(4);    
       line(pointa.x,pointa.y,pointb.x,pointb.y);

    }


    }











}