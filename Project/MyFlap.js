/**
* MyFlap
* @constructor
*/
class MyFlap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        
    }
    init(scene) {
        scene.quad = new MyQuad(scene);
        scene.triangle = new MyTriangle(scene);
    }


    display(){

        this.scene.pushMatrix();
        
        this.scene.rotate(Math.PI/2.0, 0, 1, 0);
        this.scene.scale(0.01,0.01,0.01);
        this.scene.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.045, 0.55);
        this.scene.scale(0.3, 0.3, 0.3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.triangle.display();
        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
