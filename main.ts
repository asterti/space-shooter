controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player_girl, 0, -66)
    projectile.setPosition(player_girl.x, player_girl.y + -10)
    pause(500)
})
let projectile: Sprite = null
let astroid: Sprite = null
let player_girl: Sprite = null
game.showLongText("Space Shooter", DialogLayout.Center)
game.setDialogTextColor(1)
player_girl = sprites.create(assets.image`girl`, SpriteKind.Player)
player_girl.setPosition(80, 105)
controller.moveSprite(player_girl)
while (true) {
    for (let index = 0; index < 10; index++) {
        astroid = sprites.create(assets.image`asteroid`, SpriteKind.Enemy)
        astroid.setPosition(randint(0, 99), 5)
        astroid.setVelocity(0, 35)
        if (true) {
        	
        }
    }
    pause(5000)
}
