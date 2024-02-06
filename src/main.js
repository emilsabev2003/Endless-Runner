// Endless Runner
// Name: Emil Sabev
// Date: 2/5/2024

let config = 
{
    parent: "Rocket Patrol",
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scale: 
    {
        autoCenter: Phaser.Scale.CENTER_BOTH

    },
    physics:
    {
        default: "arcade", //enable arcade physics
        arcade: 
        {
            debug: true
        }
    },
    scene: [ Menu, Play ],

}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
