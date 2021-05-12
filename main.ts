controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projetile()
    projectile.setPosition(player_girl.x, player_girl.y + -10)
    pause(500)
})
function projetile () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player_girl, 0, -66)
}
function overlap () {
    while (astroid.overlapsWith(astroid)) {
        astroid.setPosition(randint(0, 99), 5)
    }
    astroid.setVelocity(0, 35)
    pause(200)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    astroid.destroy(effects.fire, 100)
    projectile.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let astroid: Sprite = null
let player_girl: Sprite = null
game.showLongText("Space Shooter", DialogLayout.Center)
player_girl = sprites.create(assets.image`girl`, SpriteKind.Player)
projetile()
player_girl.setStayInScreen(true)
player_girl.setPosition(80, 105)
controller.moveSprite(player_girl)
while (true) {
    for (let index = 0; index < 10; index++) {
        astroid = sprites.create(assets.image`asteroid`, SpriteKind.Enemy)
        astroid.setFlag(SpriteFlag.DestroyOnWall, true)
        for (let index = 0; index < 1; index++) {
            astroid.setPosition(randint(0, 99), 5)
            overlap()
        }
    }
    pause(7000)
}
