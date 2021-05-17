controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(blue_player_ball, 0, 50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(blue_player_ball, 50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(blue_player_ball, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    blue_player_ball.destroy(effects.spray, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(blue_player_ball, 0, 50)
})
let blue_player_ball: Sprite = null
blue_player_ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f 1 8 8 8 8 f . . . . . . 
    . . f 1 8 8 8 8 8 8 f . . . . . 
    . . f 8 8 8 8 8 8 8 f . . . . . 
    . . f 8 8 8 8 8 8 8 f . . . . . 
    . . f 8 8 8 8 8 8 8 f . . . . . 
    . . f 8 8 8 8 8 8 8 f . . . . . 
    . . . f 8 8 8 8 8 f . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let red_enemy_ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 1 2 2 2 2 f . . . . 
    . . . f 2 1 2 2 2 2 2 2 f . . . 
    . . . f 1 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
blue_player_ball.setPosition(120, 20)
blue_player_ball.setVelocity(100, 100)
red_enemy_ball.setPosition(70, 100)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(500, function () {
    red_enemy_ball.x = scene.screenWidth()
    red_enemy_ball.vx = -20
})
