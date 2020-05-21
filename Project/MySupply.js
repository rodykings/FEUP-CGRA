
const SupplyStates =  {      
    INACTIVE: 0,     
    FALLING: 1, 
    LANDED: 2
}; 

class MySupply extends CGFobject {


    constructor(scene, size, x, y, z) {
        super(scene);
        this.size = size;
        this.init(scene);
        this.state=SupplyStates.INACTIVE; 
        this.x = x;
        this.y = y;
        this.z = z;
        this.velocity = this.y/3;
    }
    
    init(scene) {
        this.cube = new MyCube(scene, this.size);
    }

    

    land(){
        this.state=SupplyStates.LANDED;
    }

    drop(){
        this.state=SupplyStates.FALLING;
    }

    update(t){

        
        if(this.state == SupplyStates.FALLING){
            if(this.y > 0.3){
                this.y -= this.velocity*t;
            }
            if(this.y < 0.3)
            {
                this.y = 0.01;
                this.state = SupplyStates.LANDED;
            }
                
        }
    }




    display() {
       
        if(this.state == SupplyStates.LANDED){
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.cube.displayOpenCube();
            this.scene.popMatrix();
        }else{
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.cube.display();
            this.scene.popMatrix();
        }
        
        


    }

    
}