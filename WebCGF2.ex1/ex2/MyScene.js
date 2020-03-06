/**
 * MyScene
 * @constructor
 */
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.parallelogram = new MyParallelogram(this);
        this.triangleSmall = new MyTriangleSmall(this);
        this.triangleSmall2 = new MyTriangleSmall(this);
        this.triangleBig = new MyTriangleBig(this);
        this.triangleBig2 = new MyTriangleBig(this);
        this.unitCube = new MyUnitCube(this);
        this.unitCubeQuad = new MyUnitCubeQuad(this);
        this.tangram = new MyTangram(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        /*
        this.displayDiamond = true;
        this.displayTriangle = true;
        this.displayParallelogram = true;
        this.displayTriangleSmall = true;
        this.displayTriangleSmall2 = true;
        this.displayTriangleBig = true;
        this.displayTriangleBig2 = true;
        */
        this.displayTangram = true;
        this.displayUnitCube = true;
        this.displayUnitCubeQuad = true;
        this.scaleFactor = 1;
    }
    initLights() {3
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section
        /*
        if(this.displayDiamond == true){
            this.pushMatrix();
            this.translate(0,1,0);
            this.diamond.display();
            this.popMatrix();
        }

        if(this.displayTriangle == true){
            this.pushMatrix();
            this.translate(-1, 1, 0);
            this.rotate(Math.PI/4.0, 0, 0 , 1);
            this.translate(1, 1, 0);
            this.triangle.display();
            this.popMatrix();
        }

        if(this.displayParallelogram == true){
            this.pushMatrix();
            this.scale(-1, 1, 1);
            this.parallelogram.display();
            this.popMatrix();

        }

        if(this.displayTriangleBig2 == true){
            this.pushMatrix();
            this.translate(0, -Math.sqrt(8), 0);
            this.triangleBig2.display();
            this.popMatrix();
        }

        if(this.displayTriangleBig == true){
            this.pushMatrix();
            this.translate(2, 0, 0);
            this.rotate(-Math.PI/4.0, 0, 0, 1);
            this.translate(0, -2, 0);
            this.triangleBig.display();
            this.popMatrix();
        }

        if(this.displayTriangleSmall == true){
            this.pushMatrix();
            this.translate(1,0,0);
            this.triangleSmall.display();
            this.popMatrix();
        }

        if(this.displayTriangleSmall2 == true){
            this.pushMatrix();
            this.translate(-2,-Math.sqrt(8)+2,0);
            this.rotate(-Math.PI/2.0, 0, 0, 1);
            this.translate(1,0,0);
            this.triangleSmall2.display();
            this.popMatrix();
        }
        */
        if(this.displayTangram)
        {
            this.tangram.display();

        }
        if(this.displayUnitCube) {
            this.pushMatrix();
            this.translate(0.5,-0.5,-0.5);
            this.unitCube.display();
            this.popMatrix();
        }
        if(this.displayUnitCubeQuad){
            this.unitCubeQuad.display();
        }

        // ---- END Primitive drawing section
    }
}