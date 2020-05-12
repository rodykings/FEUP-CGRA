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
        this.autopilotAngle= 72 * (Math.PI/180);
    }
    init(scene) {
        //scene.pyramid = new MyPyramid(scene, 4, 4);
        scene.airship = new MyAirShip(scene);
        scene.supply = new MySupply(scene, 0.4);
    }

    update(t){

        if(this.apmode){
            this.angle += this.autopilotAngle*t;
            this.x += t*this.autopilotVelocity*Math.sin(this.angle)/10000000000;
            this.z += t*this.autopilotVelocity*Math.cos(this.angle)/10000000000;
            this.heliceVelocity = t*this.autopilotVelocity;
            console.log(this.z);
        }else{
            this.x += t*this.velocity*Math.sin(this.angle);
            this.z += t*this.velocity*Math.cos(this.angle);
            this.heliceVelocity = t*this.velocity;
        }
        
        this.supply.update(t);
            
    }

    turn(val){
        this.angle += val;
        if(val > 0)
            this.lastTurn =  1;
        else
            this.lastTurn = -1;
    }

    accelerate(val){
        this.velocity += val;
    }

    
    autopilot(){
        this.apmode = true;
    }

    dropSupply(){
        this.scene.supply = new MySupply(this.scene, 0.3);
        this.supply.drop([this.x, this.y, this.z]);
    }

    reset(){
        this.apmode = false;
        this.velocity = 0;
        this.x = this.initialPosition[0];
        this.y = this.initialPosition[1];
        this.z = this.initialPosition[2];
        this.angle = this.initialAngle;
        this.lastTurn = 0;
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

        
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
