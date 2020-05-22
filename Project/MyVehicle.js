/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, angle, x, y, z) {
        super(scene);
        this.init(scene);
        this.apmode = false;
        this.velocity = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;
        this.initialAngle = angle;
        this.initialPosition = [x, y, z];
        this.lastTurn = 0;
        this.autopilotVelocity = Math.PI*2/1000;
        this.autopilotAngle= 72*Math.PI/180;
        this.centerAngle = 0;
        this.autopilotCenter = [0,0];
    }
    init(scene) {
        //scene.pyramid = new MyPyramid(scene, 4, 4);
        scene.airship = new MyAirShip(scene);
        this.supplies = [];
    }

    update(t){
        
        if(this.apmode){
            this.angle += this.autopilotAngle*t;
            this.centerAngle += this.autopilotAngle*t;
            this.x = this.autopilotCenter[0] - 5*Math.sin(this.centerAngle);
            this.z = this.autopilotCenter[1] - 5*Math.cos(this.centerAngle);
            this.heliceVelocity = t*this.autopilotVelocity*10;
        }else{
            this.x += t*this.velocity*Math.sin(this.angle);
            this.z += t*this.velocity*Math.cos(this.angle);
            this.heliceVelocity = t*this.velocity*10;
        }
        
        if(this.supplies.length > 0){
            for(var i=0; i < this.supplies.length; i++){
                this.supplies[i].update(t);
            }
        }

        this.scene.airship.update(t, this.velocity);
            
            
    }

    turn(val){
        if(this.apmode){
            return;
        }
        this.angle += val;
        if(val > 0)
            this.lastTurn =  1;
        else
            this.lastTurn = -1;
    }

    accelerate(val){
        if(this.apmode){
            return;
        }
        this.velocity += val;
    }

    
    autopilot(){
        if(!this.apmode){
            this.apmode = true;
            this.centerAngle =  Math.PI/2 + this.angle;
            this.autopilotCenter = [this.x + 5*Math.sin(this.centerAngle), this.z + 5*Math.cos(this.centerAngle)];
           
        }else{
            this.apmode = false;
        }
    }

    dropSupply(){
        this.supply = new MySupply(this.scene, 0.3, this.x, this.y, this.z);
        this.supply.drop();
        this.supplies.push(this.supply);
        console.log("CRIOU");
    }

    reset(){
        this.velocity = 0;
        this.x = this.initialPosition[0];
        this.y = this.initialPosition[1];
        this.z = this.initialPosition[2];
        this.angle = this.initialAngle;
        this.lastTurn = 0;
        this.supplies = [];

        if(this.apmode){
            this.centerAngle =  Math.PI/2 + this.angle;
            this.autopilotCenter = [this.x + 5*Math.sin(this.centerAngle), this.z + 5*Math.cos(this.centerAngle)];
        }
    }

    display(){
        /*
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.rotate(Math.PI/2.0, 1, 0,  0);
        this.scene.pyramid.display();
        this.scene.popMatrix();
*/
        

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.airship.display(this.heliceVelocity, this.lastTurn);
        this.scene.popMatrix();

        if(this.supplies.length > 0){
            for(var i=0; i < this.supplies.length; i++){
                this.supplies[i].display();
            }
        }
        
        
    }

    printPosition(){
        console.log("X", this.x);
        console.log("Y", this.y);
        console.log("Z", this.z);
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
