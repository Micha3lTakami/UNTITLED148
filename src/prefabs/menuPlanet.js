class menuPlanet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spritesheet) {
        super(scene, x, y, spritesheet);

        // Add object to the existing scene
        scene.add.existing(this);

        // set up 'attack' animation
        this.anims.create({
            key: 'spin400',
            frames: this.anims.generateFrameNumbers(spritesheet, { start: 0, end: 899 }),
            frameRate: 40,
            repeat: -1
        });
        
        // start 'attack' animation and set callback function to loop animation
        this.anims.play('spin400');
        
    }
    
    // Handles getting clicked on and changing levels
    // will need to be passed level change in instance
    update(){

    }
}