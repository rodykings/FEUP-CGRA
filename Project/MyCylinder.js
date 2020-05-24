class MyCylinder extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
   */
  constructor(scene, slices) {
    super(scene);
    this.divs = slices;

    this.initBuffers();
  }

  /**
   * @method initBuffers
   * Initializes the sphere buffers
   * TODO: DEFINE TEXTURE COORDINATES
   */
  initBuffers() {

    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var theta = 0;
    var thetaInc = (2 * Math.PI) / this.divs;
    //var latVertices = this.longDivs + 1;

    this.vertices.push(0,0,0);
    this.vertices.push(0,1,0);
    this.normals.push(0,-1,0);
    this.normals.push(0,1,0);
    // build an all-around stack at a time, starting on "north pole" and proceeding "south"
    
    var counter = 0;

    for (let edges = 0; edges < this.divs; edges++) {
      //console.log("ANGULO:" + thetaInc + "\n");
      var x = Math.cos(theta);
      var z = Math.sin(theta);
      this.vertices.push(x, 0, z);
      this.normals.push(x, 0, z);
      this.vertices.push(x, 1, z);
      this.normals.push(x, 0, z);
      theta+= thetaInc;
      counter+=2;

    }

  
    for (var i = 2; i <= counter; i+=2){
      if(i == counter){
        this.indices.push(0,i,2);
        this.indices.push(3,i+1,1);
        this.indices.push(3, 2 , i);
        this.indices.push(i, i+1, 3);
      }else{
        this.indices.push(0,i,i+2);
        this.indices.push(i+3,i+1,1);
        this.indices.push(i+3, i+2, i);
        this.indices.push(i, i+1, i+3);
      }
        
    }

    this.texCoords = [
      
    ];

    for(var i=0; i <= this.divs; i++){
      this.texCoords.push((this.divs-i)/this.divs, 1);
      this.texCoords.push((this.divs-i)/this.divs, 0);
    }
  
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}
