class Loader extends Phaser.Scene {
    constructor() {
        super('loaderScene');
    }
    
    // preload()
    // pre-load game assets
    preload() {
        // NEEDS COLOR CHANGE: updates CSS styling for start scene
        this.cameras.main.fadeIn(1000);
        
        // WORK NEEDED: NEEDS TYPOGRAPHY UPDATE
        let loadConfig = { 
            fontFamily: 'Helvetica', 
            fontSize: '48px', 
            fontStyle: 'bold', 
            fill: '#e6dfcc' 
        };
        
        // add text object for percentage loaded
        let progressText = this.add.text(game.config.width/2, game.config.height/2, '0%', loadConfig).setOrigin(0.5);

        // update the loading percentage as assets are loaded
        this.load.on('progress', function (value) {
            let percentage = Math.floor(value * 100) + '%';
            progressText.setText(percentage); 
        });

        this.load.path  = './assets/images/'
        this.load.image('start_screen', 'startBCKG.png');
        this.load.image('menu_bckg', 'preview2.png');
        this.load.image('question', 'question.png');

        //add tile info
        /*
        this.load.tilemapTiledJSON('tilemapJSON', './assets/tilemap_items/mindscapes_tilemaps.json');
        //add tile info
        this.load.tilemapTiledJSON('tilemapJSON2', './assets/tilemap_items/level_2.json');
        */

        // load audio file path
        this.load.path  = './assets/sounds/'
        // load audio
        /*this.load.audio('levelMusic', );
        this.load.audio('levelMusic2', );
        this.load.audio('menuMusic',);
        this.load.audio('select',);
        this.load.audio('jump',);
        this.load.audio('walkLeft',);
        this.load.audio('walkRight',);*/


        // load image file path
        this.load.path = "./assets/ui/"
        // load images
        this.load.image('fullscreen', 'fullscreen.png');
        this.load.image('fullscreen2', 'fullscreen2.png');
  

        /*
        this.load.image('platform', 'block.png' );
        this.load.image('X', 'xEmoji.png');
        this.load.image('credits', 'credits.png');
        this.load.image('enter', 'enter_text.png');*/

        //load fonts
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');



        // load spritesheet file path
        // planet frame formula image resolution width / pixel width, image resolution height / pixel
        this.load.path = "./assets/spritesheets/"
        // load spritesheets 
        this.load.spritesheet('blackHole', 'blackHole2.png', {frameWidth: 400, frameHeight: 400, startFrame:0, endFrame: 899});
        this.load.spritesheet('tutorialPlanet', 'earth1.png', {frameWidth: 250, frameHeight: 250, startFrame:0, endFrame: 1224});
        this.load.spritesheet('placeHolderPlanet', 'placeHolder.png', {frameWidth: 12, frameHeight: 12, startFrame:0, endFrame: 1224});
        //this.load.spritesheet('protagonist', 'protagonist.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1});
        //this.load.spritesheet('tutorialPlanet', 'tutorialPlanet2.png', {frameWidth: 1500,frameHeight: 1500,startFrame: 0, endFrame: 99});
        //this.load.spritesheet('placeholderPlanet', 'placeholderPlanet2.png', {frameWidth: 100,frameHeight: 100,startFrame: 0, endFrame: 399});
        
        /*
        this.load.spritesheet('runRight', 'main-run-right.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 5});
        this.load.spritesheet('jumpRight', 'main-jump-right.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 7});
        this.load.spritesheet('jumpLeft', 'main-jump-left.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 7});
        this.load.spritesheet('idleLeft', 'main-idle-left.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 3});
        this.load.spritesheet('idleRight', 'main-idle-right.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 3});
        this.load.spritesheet('death', 'main-death.png', {frameWidth: 32,frameHeight: 32,startFrame: 0, endFrame: 7});
        this.load.spritesheet('synapse', 'neuron.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 4});
        this.load.spritesheet('anger', 'anger.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 2});
        this.load.spritesheet('happy', 'happiness.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 2});
        this.load.spritesheet('sad', 'sadness.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 4});
        this.load.spritesheet('brainFlag', 'brainFlag.png', {frameWidth: 32, frameHeight: 50, startFrame: 0, endFrame: 4});
        this.load.spritesheet('jumpBlock', 'jumpBlock.png', {frameWidth: 32, frameHeight:32, startFrame:0, endFrame: 5 })
        this.load.spritesheet('GravityBlock', 'GravityBlock.png', {frameWidth: 32, frameHeight:32, startFrame:0, endFrame: 5 })
        this.load.spritesheet('anxiety', 'anxiety.png', {frameWidth: 32, frameHeight:32, startFrame:0, endFrame: 8 })
        this.load.spritesheet('depression', 'depression-new.png', {frameWidth: 32, frameHeight:32, startFrame:0, endFrame: 11 })
        */
        
        
        // change scene upon completion
        this.load.on('complete', function () {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.time.delayedCall(700, () =>{
                this.scene.start('startScene')});
        }, this);

    }
  
}