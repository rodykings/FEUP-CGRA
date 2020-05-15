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


        this.scaleFactor = 1;
        this.speedFactor = 1;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        //this.incompleteSphere = new MySphere(this, 16, 8);
        //this.cylinder = new MyCylinder(this, 12);
        //this.cube = new MyUnitCubeQuad(this);
        //this.pyramid = new MyPyramid(this, 4, 4);
        //this.terrain = new MyTerrain(this);
        this.vehicle = new MyVehicle(this, 0, 0, 5, 0);
        this.lastupdate = 0;
        

        
        //Init material
        this.materialWorld = new CGFappearance(this);
        this.materialWorld.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWorld.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWorld.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWorld.setShininess(10.0);
        this.texture = new CGFtexture(this, 'images/earth.jpg');
        this.materialWorld.setTexture(this.texture);
        this.materialWorld.setTextureWrap('REPEAT', 'REPEAT');

        //Objects connected to MyInterface
        this.displayAxis = true;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }


    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //console.log("UPDATE");
        if(this.lastupdate == 0){
            this.lastupdate = t;
        }

        var elapsedtime = t - this.lastupdate;

        this.lastupdate = t;


        this.vehicle.update(elapsedtime);


        this.ang += 0.08*(elapsedtime/50);


        this.checkKeys();
    }

    checkKeys()  {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";keysPressed=true;
            this.vehicle.accelerate(0.001*this.speedFactor);
        }if (this.gui.isKeyPressed("KeyS")){
            text+=" S ";keysPressed=true;
            this.vehicle.accelerate(-0.001*this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
                text+=" A ";keysPressed=true;
                this.vehicle.turn(Math.PI/8);
        }if (this.gui.isKeyPressed("KeyD")){
                text+=" D ";keysPressed=true;
                this.vehicle.turn(-Math.PI/8);
        }if (this.gui.isKeyPressed("KeyP")){
                text+=" P ";keysPressed=true;
                this.vehicle.autopilot();
        } if (this.gui.isKeyPressed("KeyR")){
                text+=" R ";keysPressed=true;
                this.vehicle.reset();
        } if (keysPressed)
            console.log(text);
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


        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // ---- BEGIN Primitive drawing section
        
        //This sphere does not have defined texture coordinates

        /* SPHERE DISPLAY
        this.materialWorld.apply();
        this.incompleteSphere.display();
        */

        /*  PYRAMID DISPLAY*/
        
        /*
       this.pushMatrix();
       this.translate(0, 0, -0.5);
       this.rotate(Math.PI/2.0, 1, 0,  0);
       this.pyramid.display();
       this.popMatrix();*/


        this.vehicle.display();
        //this.terrain.display();

        //this.cube.display();
        //this.pyramid.display();
        //this.cylinder.display();
        //this.plane.display();
        // ---- END Primitive drawing section
    }
}