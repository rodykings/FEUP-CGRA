
class MyUnitCubeQuad extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
        this.initMaterials(scene);
    }
    init(scene) {
        scene.quad1 = new MyQuad(scene);
    }
    display() {

         //side
        this.sideMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.quad1.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //bottom
        
        this.bottomMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //top
        this.topMaterial.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();
        
        //side
        this.sideMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();




    }

    initMaterials() {

        
        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.textureSide = new CGFtexture(this.scene, 'images/mineSide.png');
        this.sideMaterial.setTexture(this.textureSide);
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.textureBottom = new CGFtexture(this.scene, 'images/mineBottom.png');
        this.bottomMaterial.setTexture(this.textureBottom);
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');


        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.textureTop = new CGFtexture(this.scene, 'images/mineTop.png');
        this.topMaterial.setTexture(this.textureTop);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        
    }
}