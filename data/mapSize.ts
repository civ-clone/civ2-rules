// Civilization II's map size classes (OpenCiv2 `src/auto/game_setup.cpp`
//  `setup_choose_map_size`, richardpenman/civ2@49f26ec): a map of 6,000 squares or more is large,
//  and one of fewer than 3,000 is small. The game counts its squares as width × height before it doubles the width
//  for its staggered rows, so this is the number of squares the map has. Several rules read the class: the calendar
//  (`game_turn_to_year`), research costs, the caravan bonus and the score.
export const LARGE_MAP_SQUARES = 6000;
export const SMALL_MAP_SQUARES = 3000;
