
const SupplyStates =  {      
    INACTIVE: 0,     
    FALLING: 1, 
    LANDED: 2
}; 

class MySupply extends CGFobject {


    constructor(scene, size) {
        super(scene);
        this.size = size;
        this.init(scene);
        this.initMaterials(scene);
        //this.state=SupplyStates.INACTIVE; 
    }
    
    init(scene) {
        scene.quad1 = new MyQuad(scene, this.size);
    }

    

    land(){
        //this.state=SupplyStates.LANDED;
    }

    drop(dropPosition){
        //this.state=SupplyStates.FALLING;
    }

    update(t){

    }


    displayLanded(){


    }

    displayFalling(){
        this.invertTextCoords = [
            1, 1,
			0, 1,
			1, 0,
			0, 0
        ]

        this.normalTextCoords = [
            0, 1,
			1, 1,
			0, 0,
			1, 0
        ]


        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -this.size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //bottom
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -this.size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //top
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, this.size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();
        
        //side
        
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(this.size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();


    
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(-this.size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();
    }

    display() {

        this.invertTextCoords = [
            1, 1,
			0, 1,
			1, 0,
			0, 0
        ]

        this.normalTextCoords = [
            0, 1,
			1, 1,
			0, 0,
			1, 0
        ]


        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -this.size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //bottom
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -this.size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //top
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, this.size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();
        
        //side
        
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(this.size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();


    
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.translate(-this.size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();




    }

    initMaterials() {

        
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1);
        this.material.setDiffuse(0.0, 0.0, 0.0, 0);
        this.material.setSpecular(0.0, 0.0, 0.0, 0);
        this.material.setShininess(10.0);
        this.textureBox = new CGFtexture(this.scene, 'images/boxtexture.jpg');
        this.material.setTexture(this.textureBox);
        this.material.setTextureWrap('REPEAT', 'REPEAT');



        
        
    }
}