
class MyTangram extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {
        scene.diamond = new MyDiamond(scene);
        scene.parallelogram = new MyParallelogram(scene);
        scene.triangle = new MyTriangle(scene);
        scene.triangleSmall = new MyTriangleSmall(scene);
        scene.triangleBig = new MyTriangleBig(scene);

    }
    display() {

        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.rotate(Math.PI/4.0, 0, 0 , 1);
        this.scene.translate(1, 1, 0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.scene.parallelogram.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.scene.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        this.scene.rotate(-Math.PI/4.0, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.scene.triangleBig.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(1,0,0);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-2,-Math.sqrt(8)+2,0);
        this.scene.rotate(-Math.PI/2.0, 0, 0, 1);
        this.scene.translate(1,0,0);
        this.scene.triangleSmall2.display();
        this.scene.popMatrix();

    }
}