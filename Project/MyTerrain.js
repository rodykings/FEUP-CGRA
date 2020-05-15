/**
* MyFlap
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.shader = new CGFshader(scene.gl,"shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });
        
    }
    init(scene) {
        scene.plane = new MyPlane(scene, 20);

		this.material = new CGFappearance(scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.texture = new CGFtexture(scene, 'images/terrain.jpg');
        this.texture2 = new CGFtexture(scene, 'images/heightmap.jpg');
        this.material.setTexture(this.texture);
        this.material.setTextureWrap('REPEAT', 'REPEAT');


        scene.gl.clearDepth(10000.0);
		scene.gl.clearColor(1, 1, 1, 1.0);
		scene.gl.enable(scene.gl.DEPTH_TEST);
		scene.gl.enable(scene.gl.CULL_FACE);
		scene.gl.depthFunc(scene.gl.LEQUAL);

    }

    display(){

        this.scene.setActiveShader(this.shader);

        this.texture.bind();
        this.texture2.bind(1);
        scene.gl.texParameteri(scene.gl.TEXTURE_2D, scene.gl.TEXTURE_WRAP_S, scene.gl.REPEAT);
        scene.gl.texParameteri(scene.gl.TEXTURE_2D, scene.gl.TEXTURE_WRAP_T, scene.gl.REPEAT);


        this.scene.pushMatrix();
        this.scene.scale(50,1,50);
        this.scene.rotate(-Math.PI/2, 1, 0 ,0);
        //this.material.apply();
        this.scene.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(scene.defaultShader);
        
		
        
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }


    
}
