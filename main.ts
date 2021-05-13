controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projetile()
    projectile.setPosition(player_girl.x, player_girl.y + -10)
    music.pewPew.play()
    pause(500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.spray, 100)
    music.zapped.play()
    info.changeScoreBy(1)
})
function projetile () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player_girl, 0, -66)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    music.powerDown.play()
    info.changeLifeBy(-1)
})
function overlap () {
    while (astroid.overlapsWith(astroid)) {
        astroid.setPosition(randint(0, 99), 5)
    }
    astroid.setVelocity(0, 35)
    pause(200)
}
let projectile: Sprite = null
let astroid: Sprite = null
let player_girl: Sprite = null
effects.starField.startScreenEffect()
game.showLongText("Space Shooter", DialogLayout.Center)
player_girl = sprites.create(assets.image`girl`, SpriteKind.Player)
player_girl.setPosition(79, 103)
projetile()
info.setLife(3)
pause(2000)
player_girl.setStayInScreen(true)
controller.moveSprite(player_girl)
while (true) {
    for (let index = 0; index < 10; index++) {
        astroid = sprites.create(assets.image`asteroid`, SpriteKind.Enemy)
        astroid.setFlag(SpriteFlag.DestroyOnWall, true)
        for (let index = 0; index < 1; index++) {
            astroid.setPosition(randint(0, scene.screenWidth()), 5)
            overlap()
        }
    }
    pause(7000)
}
