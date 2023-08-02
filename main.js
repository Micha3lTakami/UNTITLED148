// UNITITLED 148 PROJECT ;)

// enable JS Strict Mode
'use strict';

// define and configure main Phaser game object
let config = {

    // make pixel art crop
    render: {
        pixelArt: true
    },
    
    // set parent container for where playscreen should be displayed on webpage
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'Untitled148',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1200,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    scene: [ Loader , Start, Menu]
}

// define game
let game = new Phaser.Game(config);

// global variables 
let keyUP, keyLEFT, keyRIGHT, keyENTER;
const w = game.config.width;
const h = game.config.height;