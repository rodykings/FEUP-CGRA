/**
* MyAirShip
* @constructor
*/
class MyAirShip extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.initMaterials();
    }
    init(scene) {
        scene.sphere = new MySphere(scene, 40, 20);
        scene.flap = new MyFlap(scene);
        scene.cylinder = new MyCylinder(scene, 20);
        scene.flag = new MyPlane(scene);

        scene.flagShader = new CGFshader(scene.gl,"shaders/flag.vert", "shaders/flag.frag");
        scene.flagShader.setUniformsValues({ uSampler2: 1 });
    }


    display(velocity, turn){
    

        //down
        this.scene.pushMatrix();
        this.scene.translate(0, -0.9, -0.5);
        this.scene.scale(0.2, 0.2, 1.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.9, -0.5);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.sphere.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, -0.9, 1);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.sphere.display();
        this.scene.popMatrix();
       
        
        //body
        this.scene.pushMatrix();
        this.scene.scale(1,1,1.8);
        this.scene.sphere.display();
        this.scene.popMatrix();

        


        //flaps
        this.scene.pushMatrix();
        this.scene.translate(0, 0.9, -1.5);
        this.scene.rotate(turn*Math.PI/4, 0, 0, 1);
        this.scene.flap.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.translate(0, 0.9, -1.5);
        this.scene.flap.display();
        this.scene.popMatrix();

        //down
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.translate(0, 0.9, -1.5);
        this.scene.rotate(-turn*Math.PI/4, 0, 0, 1);
        this.scene.flap.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.translate(0, 0.9, -1.5);

        this.scene.flap.display(0);
        this.scene.popMatrix();


        
        //front and back
        this.scene.pushMatrix();
        this.scene.scale(0.2,0.2,2);
        this.scene.sphere.display();
        this.scene.popMatrix();

        //front and back
        this.scene.pushMatrix();
        this.scene.translate(0, -0.9, 1.2);
        this.scene.rotate(velocity, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.02,0.02,0.15);
        this.scene.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.9, 1.2);
        this.scene.rotate(velocity, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.02,0.02,0.15);
        this.scene.sphere.display();
        this.scene.popMatrix();


        //flag
        this.material.apply();



        this.scene.setActiveShader(this.scene.flagShader);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -4);
        this.scene.rotate(Math.PI/2, 0 , 1 , 0);
        this.scene.scale(1.5, 1, 1);
        
        this.scene.flag.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

    }

    initMaterials() {

        
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 0);
        this.material.setShininess(10.0);
        this.textureBox = new CGFtexture(this.scene, 'images/flag.jpg');
        this.material.setTexture(this.textureBox);
        this.material.setTextureWrap('REPEAT', 'REPEAT');



        
        
    }
    
    updateBuffers(complexity){

        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
