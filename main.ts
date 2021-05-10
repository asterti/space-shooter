controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player_girl, 0, -66)
    projectile.setPosition(player_girl.x, player_girl.y + -10)
})
let projectile: Sprite = null
let player_girl: Sprite = null
player_girl = sprites.create(assets.image`girl`, SpriteKind.Player)
controller.moveSprite(player_girl)
