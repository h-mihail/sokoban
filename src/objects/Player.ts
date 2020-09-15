import { InteractibleObject } from "./"

export class Player extends InteractibleObject {
  constructor(
    sprite: Phaser.GameObjects.Sprite,
    startTilePosX: number,
    startTilePosY: number
  ) {
    super(sprite, startTilePosX, startTilePosY, 12)
  }
}
