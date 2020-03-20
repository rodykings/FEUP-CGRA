
class MyTriangleBig extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0,	//2
			-2, 0, 0,	//3
			2, 0, 0,	//4
			0, 2, 0,	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
		];

		this.normals = [];
		for(var i=0; i<=2;i++){
			this.normals.push(0, 0, 1);
		}

		for(var i=0; i<=2;i++){
			this.normals.push(0, 0, -1);
		}


		this.texCoords=[
			1, 1,
			1, 0,
			0.5, 0.5
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
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

