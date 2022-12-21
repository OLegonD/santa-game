namespace SpriteKind {
    export const error = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -220
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
})
let mySprite: Sprite = null
let errorvar = 0
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 2 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . 2 . . 
    . . . . . 1 1 1 1 1 . . . 2 2 . 
    . . . . 1 1 1 d d 1 . . . 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 1 1 1 1 1 1 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . 2 2 2 . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
effects.blizzard.startScreenEffect()
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . 2 . 2 . . 2 . 2 . . . . 
    . . . . . . . 2 2 . 2 . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . 2 . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 2 2 2 2 2 2 2 2 2 2 7 . . 
    . . 7 2 2 2 2 2 2 2 2 2 2 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 2 2 2 2 2 2 2 2 7 7 . . 
    . . 7 7 2 2 2 2 2 2 2 2 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 2 2 2 2 2 2 7 7 7 . . 
    . . 7 7 7 2 2 2 2 2 2 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 2 2 2 2 7 7 7 7 . . 
    . . 7 7 7 7 2 2 2 2 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 2 2 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 d d 1 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `,img`
    . . . . . 7 7 . . . . . . . 7 . 
    7 . . . 7 . . . . . . 7 7 7 . . 
    7 7 . 1 2 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . 7 . 2 . . 
    . . . . . 1 1 1 1 1 . 7 7 2 2 . 
    . . . . 1 1 1 d d 1 . . 7 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . 7 . 
    7 7 . 1 1 1 1 1 1 1 1 2 2 . 7 7 
    . . . 2 2 2 2 2 2 2 2 2 2 . . 7 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . 7 7 7 7 . . . 2 2 2 . 
    `,img`
    . . . . . 7 7 . . . . . . . 7 . 
    7 . . . 7 . . . . . . 7 7 7 . . 
    7 7 . 1 2 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . 7 . 2 . . 
    . . . . . 1 1 1 1 1 . 7 7 2 2 . 
    . . . . 1 1 1 d d 1 . . 7 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . 7 . 
    7 7 . 1 1 1 1 1 1 1 1 2 2 . 7 7 
    . . . 2 2 2 2 2 2 2 2 2 2 . . 7 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . 7 7 7 7 . . . 2 2 2 . 
    `,img`
    . . . . 7 . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 . . . . 
    7 . . 1 2 2 2 2 2 . . 7 7 . . . 
    . . . . . 2 2 2 2 2 . . 7 2 . . 
    . . . . . 1 1 1 1 1 . . . 2 2 . 
    . . . . 1 1 1 d d 1 . . . 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . 7 
    . . . 1 1 1 1 1 1 1 1 2 2 . . 7 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . 2 2 2 . 
    `,img`
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . 7 7 . . . 
    . . . 1 2 2 2 2 2 . . . 7 . . . 
    . . . . . 2 2 2 2 2 . . . 2 . . 
    . . . . . 1 1 1 1 1 . . . 2 2 . 
    . . . . 1 1 1 d d 1 . . . 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 1 1 1 1 1 1 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . 2 2 2 . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 2 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . 2 . . 
    . . . . . 1 1 1 1 1 . . . 2 2 . 
    . . . . 1 1 1 d d 1 . . . 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 1 1 1 1 1 1 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . 2 2 2 . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 2 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . 2 . . 
    . . . . . 1 1 1 1 1 . . . 2 2 . 
    . . . . 1 1 1 d d 1 . . . 1 1 . 
    2 2 2 2 1 1 1 1 1 1 2 2 2 2 2 . 
    2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
    1 1 . 2 2 2 2 2 2 2 2 2 . . . . 
    2 2 . 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . f f f f 5 f f f f . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 1 1 1 1 1 1 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . 2 2 2 . 
    `],
100,
false
)
pause(3500)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 501
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . e . . . . . 
    . . . . . . . e e e e . . . . . 
    . . e . . . . . e e . . . . . . 
    . . . e e e e e e e 2 . . . . . 
    . e e e e e e e e . . . . . . . 
    . . . e . . . e e e . . . . . . 
    . . e e . . e e . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 8))
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 2 2 1 1 1 1 1 . . . . 
    . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite3,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 2 2 1 1 1 1 1 . . . . 
    . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 1 1 2 2 1 1 1 1 1 . . . . 
    . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    `],
500,
true
)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 5))
