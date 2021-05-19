enum ActionKind {
    Walking,
    Idle,
    Jumping,
    damaged
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projetile()
    projectile.setPosition(ship.x, ship.y + -10)
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
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, ship, 0, -66)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    hurt()
    sprite.destroy(effects.spray, 100)
    music.powerDown.play()
    info.changeLifeBy(-1)
    pause(1000)
    animation.stopAnimation(animation.AnimationTypes.All, ship)
})
function overlap () {
    while (astroid.overlapsWith(astroid)) {
        astroid.setPosition(randint(10, scene.screenWidth() - 10), 5)
    }
    astroid.setVelocity(0, 35)
    pause(200)
}
function hurt () {
    hurt_anim = animation.createAnimation(ActionKind.damaged, 150)
    animation.setAction(ship, ActionKind.damaged)
    animation.attachAnimation(ship, hurt_anim)
    hurt_anim.addAnimationFrame(assets.image`hit_ship`)
    hurt_anim.addAnimationFrame(assets.image`ship`)
}
function spawner (num: number) {
    while (true) {
        for (let index = 0; index < num; index++) {
            astroid = sprites.create(assets.image`asteroid`, SpriteKind.Enemy)
            astroid.setFlag(SpriteFlag.DestroyOnWall, true)
            for (let index = 0; index < 1; index++) {
                astroid.setPosition(randint(10, scene.screenWidth() - 10), 5)
                overlap()
            }
        }
        pause(7000)
    }
}
let hurt_anim: animation.Animation = null
let astroid: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
effects.starField.startScreenEffect()
game.showLongText("Space Shooter", DialogLayout.Center)
ship = sprites.create(assets.image`ship`, SpriteKind.Player)
ship.setPosition(79, 103)
projetile()
info.setLife(3)
ship.setStayInScreen(true)
controller.moveSprite(ship)
pause(2000)
let num = 10
spawner(num)
