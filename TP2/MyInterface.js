/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        /*
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');

        this.gui.add(this.scene, 'displayTriangle').name('Triangle');

        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');

        this.gui.add(this.scene, 'displayTriangleSmall').name('TriangleSmall');

        this.gui.add(this.scene, 'displayTriangleSmall2').name('TriangleSmall2');

        this.gui.add(this.scene, 'displayTriangleBig').name('TriangleBig');

        this.gui.add(this.scene, 'displayTriangleBig2').name('TriangleBig2');
        */
        this.gui.add(this.scene, 'displayTangram').name('Tangram');

        this.gui.add(this.scene, 'displayUnitCube').name('UnitCube');

        this.gui.add(this.scene, 'displayUnitCubeQuad').name('UnitCubeQuad');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}