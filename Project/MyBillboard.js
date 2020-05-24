class MyBillboard extends CGFobject {


    constructor(scene) {
        super(scene);
        this.init(scene);
        this.initMaterials();

    }
    
    init(scene) {
        this.board = new MyPlane(scene);
        
    }

    display(nSupplies) {

        this.scene.pushMatrix();

        this.scene.translate(-4,0,3);
        
        
        //score
        this.scene.setActiveShader(this.scene.scoreShader);

        this.scoreMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.1, 1.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(1.5, 0.2, 1);
        this.board.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

        //board
        this.scene.pushMatrix();
        this.boardMaterial.apply();
        this.scene.translate(0, 1.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(2, 1, 1);
        this.board.display();
        this.scene.popMatrix();



        //legs
        this.scene.pushMatrix();
        this.legMaterial.apply();
        this.scene.translate(0, 0.5, -0.8);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.1, 1, 0.1);
        this.board.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.8);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.1, 1, 0.1);
        this.board.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();


    }

    initMaterials() {

        this.boardMaterial = new CGFappearance(this.scene);
        this.boardMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.boardMaterial.setDiffuse(0.8, 0.8, 0.8, 1);
        this.boardMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.boardMaterial.setShininess(10.0);

        this.legMaterial = new CGFappearance(this.scene);
        this.legMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.legMaterial.setDiffuse(0.3, 0.3, 0.3, 1);
        this.legMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.legMaterial.setShininess(10.0);

        this.scoreMaterial = new CGFappearance(this.scene);
        this.scoreMaterial.setAmbient(0.4, 0.4, 0.4, 1);
        this.scoreMaterial.setDiffuse(0.4, 0.4, 0.4, 1);
        this.scoreMaterial.setSpecular(0.0, 0.0, 0.0, 0);
        this.scoreMaterial.setShininess(10.0);
        
    }

    
}