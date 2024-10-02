import { DIRECTION } from '../common/direction';
import { TILE_SIZE } from '../game/config';
import { Coordinate } from '../types/typedef';
import { exhaustiveGuard } from './guard';

export function getTargetPositionFromGameObjectPositionAndDirection(
    currentPosition: Coordinate,
    direction: DIRECTION
) {
    const targetPosition = { ...currentPosition };
    switch (direction) {
        case DIRECTION.DOWN:
            targetPosition.y += TILE_SIZE;
            break;
        case DIRECTION.UP:
            targetPosition.y -= TILE_SIZE;
            break;
        case DIRECTION.LEFT:
            targetPosition.x -= TILE_SIZE;
            break;
        case DIRECTION.RIGHT:
            targetPosition.x += TILE_SIZE;
            break;
        case DIRECTION.NONE:
            break;
        default:
            exhaustiveGuard(direction as never);
    }
    return targetPosition;
}
