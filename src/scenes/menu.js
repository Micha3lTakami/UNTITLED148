class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    create() {
        this.cameras.main.fadeIn(1000);
        
        this.BCKG = this.add.tileSprite(w/2, h/2, 1000, 1000, 'menu_bckg').setOrigin(0.5).setScale(1.25);
        this.cursors = this.input.keyboard.createCursorKeys();
        const button2 = this.add.image(game.config.width - 30, 30, 'fullscreen2', 0).setOrigin(0.5).setInteractive();
        button2.setScale(0.03);
        button2.on('pointerup', function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        }, this);

        this.blackHole = new menuPlanet(this, w/2, h/2, 'blackHole', 0);
        this.tutorialPlanet = new menuPlanet(this, w/8, h/5, 'tutorialPlanet', 1).setScale(0.6);
        this.placeHolderPlanet = new menuPlanet(this, w/10, h*.6, 'placeHolderPlanet', 1).setScale(13);
        this.placeHolderPlanet2 = new menuPlanet(this, w/4, h*.8, 'placeHolderPlanet', 1).setScale(13);
        
    }

    update() {
        // Scroll the background image horizontally
        this.BCKG.tilePositionX -= .35;
        
        // Wrap the background image when it goes off the screen
        const halfWidth = this.BCKG.displayWidth / 2;
        if (this.BCKG.x > game.config.width + halfWidth) {
            this.BCKG.x = -halfWidth;
        }

        this.blackHole.rotation -= 0.002;
    }
}