/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {

		this.vertices = [
			//face negativa x (vermelho)
			-0.5, -0.5, -0.5, //D-	0
			-0.5, -0.5, 0.5, //C-	1
			-0.5, 0.5, -0.5, //B-	2
			-0.5, 0.5, 0.5, //A-	3
			//face positiva x (vermelho)
			0.5, -0.5, -0.5, //D+	4
			0.5, -0.5, 0.5,	// C+	5
			0.5, 0.5, -0.5, //B+	6
			0.5, 0.5, 0.5, //A+		7
			
			//face negativa x (vermelho)
			-0.5, -0.5, -0.5, //D-	8
			-0.5, -0.5, 0.5, //C-	9
			-0.5, 0.5, -0.5, //B-	10
			-0.5, 0.5, 0.5, //A-	11
			//face positiva x (vermelho)
			0.5, -0.5, -0.5, //D+	12
			0.5, -0.5, 0.5,	// C+	13
			0.5, 0.5, -0.5, //B+	14
			0.5, 0.5, 0.5, //A+		15
			
			//face negativa x (vermelho)
			-0.5, -0.5, -0.5, //D-	16
			-0.5, -0.5, 0.5, //C-	17
			-0.5, 0.5, -0.5, //B-	18
			-0.5, 0.5, 0.5, //A-	19
			//face positiva x (vermelho)
			0.5, -0.5, -0.5, //D+	20
			0.5, -0.5, 0.5,	// C+	21
			0.5, 0.5, -0.5, //B+	22
			0.5, 0.5, 0.5, //A+		23*/
			
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			6,7,5,
			6,5,4,
			2,3,7,
			2,7,6,
			3,2,0,
			3,0,1,
			4,5,1,
			4,1,0,
			7,3,1,
			7,1,5,
			2,6,4,
			2,4,0,
			
		];

		this.normals = [];


		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);

		
		


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

	}
}

