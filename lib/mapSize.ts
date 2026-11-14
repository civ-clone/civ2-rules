import { LARGE_MAP_SQUARES, SMALL_MAP_SQUARES } from '../data/mapSize';

export type MapSize = 'small' | 'normal' | 'large';

/** The size class of a map of `squares` squares (`data/mapSize`). */
export const mapSize = (squares: number): MapSize =>
  squares >= LARGE_MAP_SQUARES
    ? 'large'
    : squares < SMALL_MAP_SQUARES
    ? 'small'
    : 'normal';

export default mapSize;
