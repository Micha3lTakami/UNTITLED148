class Start extends Phaser.Scene{
    constructor(){
        super('startScene')
    }
    // create()
    // create start scene
    create() {
        this.cameras.main.fadeIn(1000);
        
        let bckg = this.add.image(w/2+1, h/2, 'start_screen')
        bckg.setOrigin(0.5).setScale(0.5);

        const startText = this.add.text(w/2, h/2, 'Press Enter To Start').setOrigin(0.5)
        this.cursors = this.input.keyboard.createCursorKeys();
        const button = this.add.image(game.config.width-30, 30, 'fullscreen', 0).setOrigin(0.5).setInteractive();
        button.setScale(0.1);
        button.on('pointerup', function ()
        {

            if (this.scale.isFullscreen)
            {
                button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else
            {
                button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);
        this.cameras.main.setBackgroundColor('#310047');
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        
    }

    // update()
    // menu update function
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            // NEEDS TESTING: Uses callback to start the next scene
            this.cameras.main.fadeOut(1000,10,20,30,);
            this.time.delayedCall(1100, () =>{
            this.scene.start('menuScene'); 
            });
        }
    }
}