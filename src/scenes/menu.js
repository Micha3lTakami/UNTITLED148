class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    // create()
    // create start scene
    create() {
        this.cameras.main.fadeIn(1000);
        
        const BCKG = this.add.image(w/2, h/2, 'menu_bckg').setOrigin(0.5).setScale(1.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        const button2 = this.add.image(game.config.width-30, 30, 'fullscreen2', 0).setOrigin(0.5).setInteractive();
        button2.setScale(0.03);
        button2.on('pointerup', function ()
        {

            if (this.scale.isFullscreen)
            {

                this.scale.stopFullscreen();
            }
            else
            {


                this.scale.startFullscreen();
            }

        }, this);

        const tutorialPlanet = new menuPlanet(this, w/2, h/2, 'tutorialPlanet')
        tutorialPlanet.setScale(.25)
    }
    update(){

    }
}

