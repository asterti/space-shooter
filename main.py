def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        bullet
    """), player_girl, 0, -25)
    projectile.set_position(player_girl.x, 55)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

projectile: Sprite = None
player_girl: Sprite = None
player_girl = sprites.create(assets.image("""
    girl
"""), SpriteKind.player)