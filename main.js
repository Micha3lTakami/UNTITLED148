// UNITITLED 148 PROJECT ;)

// enable JS Strict Mode
'use strict';

// define and configure main Phaser game object
let config = {
    type: Phaser.AUTO,
    // make pixel art crip
    render: {
        pixelArt: true
    },
    
    // set parent container for where playscreen should be displayed on webpage
    parent : 'Untitled148',
    height: 320  ,
    width: 480,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
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
    zoom: 2,
    scene: [ Loader, Menu, Play, Play2, Start ]
}

// define game
let game = new Phaser.Game(config);
