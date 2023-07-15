class synapse extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spritesheet) {
        super(scene, x, y, spritesheet);

        // Add object to the existing scene
        scene.add.existing(this);

        // Enable physics on the sprite
        scene.physics.add.existing(this);
    }

    update(){

    }
}