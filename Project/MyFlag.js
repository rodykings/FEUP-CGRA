/**
* MyFlag
* @constructor
*/
class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.initMaterials();
        this.deltax = 0;
        this.factor = 0;
    }
    init(scene) {
        scene.flagPlane = new MyPlane(scene, 100);
    }

    update(t, velocity){
        this.deltax += 10*t*(velocity+1);
        this.scene.flagShader.setUniformsValues({ timeFactor: this.deltax });
        this.scene.flagBackShader.setUniformsValues({ timeFactor: this.deltax });
    }


    display(){
    
        
        this.scene.setActiveShader(this.scene.flagShader);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -4);
        this.scene.rotate(Math.PI/2, 0 , 1 , 0);
        this.scene.scale(1.5, 1, 1);
        this.scene.flagPlane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.setActiveShader(this.scene.flagBackShader);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -4);
        this.scene.rotate(-Math.PI/2, 0 , 1 , 0);
        this.scene.scale(1.5, 1, 1);
        this.scene.flagPlane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

    }

    initMaterials() {
 
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 0);
        this.material.setShininess(10.0);
        this.flagTexture = new CGFtexture(this.scene, 'images/flag.png');
        this.material.setTexture(this.flagTexture);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
        
    }
      
}