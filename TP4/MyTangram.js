
class MyTangram extends CGFobject {

    constructor(scene) {
        super(scene);
        
        this.init(scene);
        this.initMaterials(scene);
        
    }
    init(scene) {
        scene.diamond = new MyDiamond(scene);
        scene.parallelogram = new MyParallelogram(scene);
        scene.triangle = new MyTriangle(scene);
        scene.triangleSmall = new MyTriangleSmall(scene);
        scene.triangleSmall2 = new MyTriangleSmall(scene);
        scene.triangleBig = new MyTriangleBig(scene);
        scene.triangleBig2 = new MyTriangleBig(scene);


        this.normals = [];

    }
    display() {

        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.materialTangram.apply();
        this.scene.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.rotate(Math.PI/4.0, 0, 0 , 1);
        this.scene.translate(1, 1, 0);
        this.materialTangram.apply();
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.materialTangram.apply();
        this.scene.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        this.scene.rotate(-Math.PI/4.0, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.materialTangram.apply();
        this.scene.triangleBig.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.newtexCoords2=[
            0, 0,
            1, 0,
            0.5, 0.5
        ];
        this.scene.triangleBig2.updateTexCoords(this.newtexCoords2)
        this.materialTangram.apply();
        this.scene.triangleBig2.display();
        this.scene.popMatrix();
        


        this.scene.pushMatrix();
        this.scene.translate(1,0,0);
        this.materialTangram.apply();
        this.scene.triangleSmall.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-2,-Math.sqrt(8)+2,0);
        this.scene.rotate(-Math.PI/2.0, 0, 0, 1);
        this.scene.translate(1,0,0);
        this.newtexCoords=[
			0.25, 0.75,
			0.5, 0.5,
            0.75, 0.75,
        ];
        this.scene.triangleSmall2.updateTexCoords(this.newtexCoords);
        this.materialTangram.apply();
        this.scene.triangleSmall2.display();
        this.scene.popMatrix();

    }

    initMaterials() {

        
        this.materialTangram = new CGFappearance(this.scene);
        this.materialTangram.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTangram.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTangram.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTangram.setShininess(10.0);
        this.texture = new CGFtexture(this.scene, 'images/tangram.png');
        this.materialTangram.setTexture(this.texture);
        this.materialTangram.setTextureWrap('REPEAT', 'REPEAT');
        
    }


    enableNormalViz()
    {
        
        this.scene.triangle.enableNormalViz();
        this.scene.triangleBig.enableNormalViz();
        this.scene.triangleBig2.enableNormalViz();
        this.scene.triangleSmall.enableNormalViz();
        this.scene.triangleSmall2.enableNormalViz();
        this.scene.parallelogram.enableNormalViz();
        
        this.scene.diamond.enableNormalViz();
    }

    disableNormalViz()
    {
        
        this.scene.triangle.disableNormalViz();
        this.scene.triangleBig.disableNormalViz();
        this.scene.triangleBig2.disableNormalViz();
        this.scene.triangleSmall.disableNormalViz();
        this.scene.triangleSmall2.disableNormalViz();
        this.scene.parallelogram.disableNormalViz();
        
        this.scene.diamond.disableNormalViz();
    }
    updateBuffers(complexity){


        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

  

    
}