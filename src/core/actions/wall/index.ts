import type { IActionGroup } from '../../@types/IActionGroup'
import type { IWallAction } from '../@types/IWallAction'

export const WallActions: IActionGroup<IWallAction, 'wall'> = {
  '@wall/speedboost': (a, e, w) => {
    // const player = w.get('player').data
    // const wall = e.data
    // wall.shape.color = 0x2bcbba
    // player.movement.speed = 5
    // player.texture.glowColor = '#2bcbba'
    // setTimeout(() => {
    //   wall.shape.color = 0xeb3b5a
    //   player.movement.speed = 10
    //   player.texture.glowColor = '#fed330'
    // }, 2000)
  },
}
