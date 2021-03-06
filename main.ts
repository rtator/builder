namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
1 1 f f f f f 1 1 f f f f f 1 1 
1 1 f f f f f 1 1 f f f f f 1 1 
f f 1 f f f f 1 1 f f f f 1 f f 
f f f 1 1 f f 1 1 f f 1 1 f f f 
f f f 1 1 f 1 1 1 1 f 1 1 f f f 
f f f f f 1 1 1 1 1 1 f f f f f 
f f f f 1 1 1 1 1 1 1 1 f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f 1 1 1 1 1 1 1 1 f f f f 
f f f f f 1 1 1 1 1 1 f f f f f 
f f f f 1 f 1 1 1 1 f 1 f f f f 
f f 1 1 f f f 1 1 f f f 1 1 f f 
f f 1 1 f f f 1 1 f f f 1 1 f f 
1 1 f f f f f 1 1 f f f f f 1 1 
1 1 f f f f f 1 1 f f f f f 1 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 1 1 . 1 1 1 . . . . . . . . . 
1 . 1 . 1 . 1 . . 1 . 1 . 1 1 1 
1 1 1 . 1 . 1 . . 1 . 1 . 1 . 1 
. . 1 . 1 . 1 . . 1 . 1 . 1 1 1 
1 1 1 . 1 1 1 . . 1 1 1 . 1 . . 
. . . . . . . . . . . . . 1 . . 
. . . . . . . . . . . . . 1 . . 
1 1 1 . 1 1 . . 1 . 1 . . . . . 
. 1 . . 1 . . . 1 . 1 . . . . . 
1 1 1 . 1 1 . . 1 1 1 . . . . . 
. . . . 1 . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
1 1 1 . 1 . . . 1 1 1 . . . . . 
1 . 1 . 1 1 1 . 1 . 1 . . . . . 
1 1 1 . 1 . 1 . 1 1 1 . . . . . 
1 . 1 . 1 . . . 1 . . . . . . . 
. . . . . . . . 1 1 1 . . . . . 
. . . . . . . . . . . . 1 1 1 . 
1 1 1 . 1 1 1 . 1 . . . 1 . 1 . 
1 . 1 . 1 . 1 . 1 1 1 . 1 1 1 . 
1 1 1 . 1 1 1 . 1 . 1 . 1 . 1 . 
. . 1 . . . . . . . . . . . . . 
1 1 1 . . . 1 . . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
1 . 1 . 1 . 1 . 1 1 1 . . . . . 
. 1 . 1 . . 1 . 1 . 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.castle.tilePath5)
        tiles.setWallAt(location, true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.z += 64
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00040404040404040404040404040404040404040404040404040404040404040404040000000000000000000000040404040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000020000000600000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tilePath8,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . 5 f f 5 . . . . 
. . 5 f 5 f f 5 f 5 . . 
. f 5 f 5 f f 5 f 5 f . 
5 f 5 f 5 f f 5 f 5 f 5 
5 f 5 f 5 f f 5 f 5 f 5 
5 f 5 f 5 f f 5 f 5 f 5 
5 f 5 f 5 f f 5 f 5 f 5 
5 5 5 b f e e f b 5 5 5 
. f 4 1 f 4 4 f 1 4 f . 
. f e 4 4 4 4 4 4 e f . 
. f f f e e e e f f f . 
f e f 5 f 5 5 f 5 f e f 
e 4 f 5 5 f f 5 5 f 4 e 
e e f 5 5 f f 5 5 f e e 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
mySprite.ay += 200
scene.cameraFollowSprite(mySprite)
game.showLongText("get here to win", DialogLayout.Bottom)
game.showLongText("press A while moving to place a block", DialogLayout.Bottom)
