
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
        this.scene.customMaterial.apply();
        this.scene.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.rotate(Math.PI/4.0, 0, 0 , 1);
        this.scene.translate(1, 1, 0);
        this.materialPink.apply();
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.materialYellow.apply();
        this.scene.parallelogram.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.materialBlue.apply();
        this.scene.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        this.scene.rotate(-Math.PI/4.0, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.materialOrange.apply();
        this.scene.triangleBig.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(1,0,0);
        this.materialPurple.apply();
        this.scene.triangleSmall.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-2,-Math.sqrt(8)+2,0);
        this.scene.rotate(-Math.PI/2.0, 0, 0, 1);
        this.scene.translate(1,0,0);
        this.materialRed.apply();
        this.scene.triangleSmall2.display();
        this.scene.popMatrix();

    }

    initMaterials() {
    
        this.materialPink = new CGFappearance(this.scene);
        this.materialPink.setAmbient(1.0, 0.61, 0.82, 1.0);
        this.materialPink.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialPink.setSpecular(1.0, 0.61, 0.82, 1.0);
        this.materialPink.setShininess(10.0);
    
        this.materialYellow = new CGFappearance(this.scene);
        this.materialYellow.setAmbient(1.0, 1.0, 0.0, 1.0);
        this.materialYellow.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialYellow.setSpecular(1.0, 1.0, 0.0, 1.0);
        this.materialYellow.setShininess(10.0);
    
        this.materialOrange = new CGFappearance(this.scene);
        this.materialOrange.setAmbient(1.0, 0.61, 0.0, 1.0);
        this.materialOrange.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialOrange.setSpecular(1.0, 0.61, 0.0, 1.0);
        this.materialOrange.setShininess(10.0);
    
        this.materialBlue = new CGFappearance(this.scene);
        this.materialBlue.setAmbient(0.0, 0.61, 1.0, 1.0);
        this.materialBlue.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialBlue.setSpecular(0.0, 0.61, 1.0, 1.0);
        this.materialBlue.setShininess(10.0);
    
        this.materialRed = new CGFappearance(this.scene);
        this.materialRed.setAmbient(1.0, 0.08, 0.08, 1.0);
        this.materialRed.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialRed.setSpecular(1.0, 0.08, 0.08, 1.0);
        this.materialRed.setShininess(10.0);
    
        this.materialPurple = new CGFappearance(this.scene);
        this.materialPurple.setAmbient(0.67, 0.31, 0.76, 1.0);
        this.materialPurple.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.materialPurple.setSpecular(0.67, 0.31, 0.76, 1.0);
        this.materialPurple.setShininess(10.0);
        
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