def on_a_pressed():
    projetile()
    projectile.set_position(player_girl.x, player_girl.y + -10)
    music.pew_pew.play()
    pause(500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.spray, 100)
    music.zapped.play()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

def projetile():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""bullet"""), player_girl, 0, -66)

def on_on_overlap2(sprite, otherSprite):
    sprite.destroy(effects.spray, 100)
    music.power_down.play()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap2)

def overlap():
    while astroid.overlaps_with(astroid):
        astroid.set_position(randint(0, 99), 5)
    astroid.set_velocity(0, 35)
    pause(200)
def spawner(num: number):
    global astroid
    while True:
        for index in range(num):
            astroid = sprites.create(assets.image("""
                asteroid
            """), SpriteKind.enemy)
            astroid.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
            for index2 in range(1):
                astroid.set_position(randint(0, scene.screen_width()), 5)
                overlap()
        pause(7000)
astroid: Sprite = None
projectile: Sprite = None
player_girl: Sprite = None
effects.star_field.start_screen_effect()
game.show_long_text("Space Shooter", DialogLayout.CENTER)
player_girl = sprites.create(assets.image("""
    girl
"""), SpriteKind.player)
player_girl.set_position(79, 103)
projetile()
info.set_life(3)
player_girl.set_stay_in_screen(True)
controller.move_sprite(player_girl)
pause(2000)
num = 10
if info.score() >= 25:
    num += 5
spawner(num)