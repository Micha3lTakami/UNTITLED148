class menuPlanet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spritesheet, animation) {
        super(scene, x, y, spritesheet, animation);

        // Add object to the existing scene
        scene.add.existing(this);

        // set up 'attack' animation
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers(spritesheet, { start: 0, end: 899 }),
            frameRate: 40,
            repeat: -1
        });

        this.anims.create({
            key: 'spin1',
            frames: this.anims.generateFrameNumbers(spritesheet, { start: 0, end: 1224 }),
            frameRate: 25,
            repeat: -1
        });
        
        // start 'attack' animation and set callback function to loop animation
        if(animation == 0){
            this.anims.play('spin');
        }
        else if(animation == 1){
            this.anims.play('spin1'); 
        }
        
    }
    
    // Handles getting clicked on and changing levels
    // will need to be passed level change in instance
    update(){

    }
}