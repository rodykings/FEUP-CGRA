/**
* MyFlap
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        
    }
    init(scene) {
        scene.plane = new MyPlane(scene, 20);
        scene.texture2 = new CGFtexture(scene, "textures/FEUP.jpg");

    }
    display(){
        this.scene.pushMatrix();
        this.scene.scale(50,1,50);
        this.scene.rotate(-Math.PI/2, 1, 0 ,0);
        this.scene.texture2.apply();
        this.scene.plane.display();
        this.scene.popMatrix();
        
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
