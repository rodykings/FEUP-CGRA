
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

        var size = 25;

        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.backMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.frontMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -size);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //bottom
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.bottomMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();

        //top
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, size, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();
        
        //side
        
        this.scene.quad1.updateTexCoords(this.invertTextCoords);
        this.rightMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();


    
        this.scene.quad1.updateTexCoords(this.normalTextCoords);
        this.leftMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-size, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.quad1.display();
        this.scene.popMatrix();




    }

    initMaterials() {

        
        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.leftMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.leftMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.leftMaterial.setShininess(10.0);
        this.textureLeft = new CGFtexture(this.scene, 'images/split_cubemap/left.png');
        this.leftMaterial.setTexture(this.textureLeft);
        this.leftMaterial.setTextureWrap('REPEAT', 'REPEAT');


        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.rightMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.rightMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.rightMaterial.setShininess(10.0);
        this.textureRight = new CGFtexture(this.scene, 'images/split_cubemap/right.png');
        this.rightMaterial.setTexture(this.textureRight);
        this.rightMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.frontMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.frontMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.frontMaterial.setShininess(10.0);
        this.textureFront = new CGFtexture(this.scene, 'images/split_cubemap/front.png');
        this.frontMaterial.setTexture(this.textureFront);
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.backMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.backMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.backMaterial.setShininess(10.0);
        this.textureBack = new CGFtexture(this.scene, 'images/split_cubemap/back.png');
        this.backMaterial.setTexture(this.textureBack);
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');


        
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.bottomMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.bottomMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.bottomMaterial.setShininess(10.0);
        this.textureBottom = new CGFtexture(this.scene, 'images/split_cubemap/bottom.png');
        this.bottomMaterial.setTexture(this.textureBottom);
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');


        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(1.0, 1.0, 1.0, 1);
        this.topMaterial.setDiffuse(0.0, 0.0, 0.0, 0);
        this.topMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.topMaterial.setShininess(10.0);
        this.textureTop = new CGFtexture(this.scene, 'images/split_cubemap/top.png');
        this.topMaterial.setTexture(this.textureTop);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        
    }
}