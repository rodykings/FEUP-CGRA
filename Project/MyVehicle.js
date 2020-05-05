/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, angle, x, y, z) {
        super(scene);
        this.velocity = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;
        this.initialAngle = angle;
        this.initialPosition = [x, y, z];
        this.init(scene);
    }
    init(scene) {
        scene.pyramid = new MyPyramid(scene, 4, 4);
    }

    update(t){
        this.x += t*this.velocity*Math.sin(this.angle)/100000000000;
        this.z += t*this.velocity*Math.cos(this.angle)/100000000000;
        console.log(this.z);
    }

    turn(val){
        this.angle += val;
    }

    accelerate(val){
        this.velocity += val;
    }

    reset(){
        this.velocity = 0;
        this.x = this.initialPosition[0];
        this.y = this.initialPosition[1];
        this.z = this.initialPosition[2];
        this.angle = this.initialAngle;
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.rotate(Math.PI/2.0, 1, 0,  0);
        this.scene.pyramid.display();
        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
