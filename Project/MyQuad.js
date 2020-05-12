/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene, size) {
		super(scene);
		this.initBuffers(size);
	}
	
	initBuffers(size) {
		this.vertices = [
			-size, -size, 0,	//0
			size, -size, 0,	//1
			-size, size, 0,	//2
			size, size, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			2, 1, 0,
			2, 3, 1
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

