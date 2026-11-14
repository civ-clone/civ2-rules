// Civilization II's @COSMIC values as the game uses them: each clamped as the loader clamps it (OpenCiv2
//  `src/auto/civ.cpp` `rules_load_cosmic`, richardpenman/civ2@49f26ec). OpenCiv2 bakes the same values into
//  `src/game/rules.cpp` (`rules_cosmic`). Numbers only: each row gives the field, its @COSMIC row (the n-th value
//  line of the section) and the loader's clamp range.
//
// The names follow civ2-asset-extractor's `CosmicRecord`, so `tests/rulesTxt.test.ts` compares the two directly.
export interface Cosmic {
  roadMoveMultiplier: number;
  triremeLossChance: number;
  foodPerCitizen: number;
  foodBoxRows: number;
  shieldBoxRows: number;
  settlerFoodLow: number;
  settlerFoodHigh: number;
  unhappySize: number;
  riotFactor: number;
  aqueductSize: number;
  sewerSize: number;
  techParadigm: number;
  transformTime: number;
  monarchyFreeSupport: number;
  communismFreeSupport: number;
  fundamentalismFreeSupport: number;
  communismPalaceDistance: number;
  fundamentalismScienceLoss: number;
  changePenalty: number;
  paradropRange: number;
  massThrustParadigm: number;
  fundamentalismMaxScience: number;
}

export const cosmic: Readonly<Cosmic> = Object.freeze({
  // Row 1, clamp 1-10.
  roadMoveMultiplier: 3,
  // Row 2, clamp 1-100.
  triremeLossChance: 2,
  // Row 3, clamp 0-10.
  foodPerCitizen: 2,
  // Row 4, clamp 4-20, odd rounded up to even.
  foodBoxRows: 10,
  // Row 5, clamp 4-20.
  shieldBoxRows: 10,
  // Row 6, clamp 0-10.
  settlerFoodLow: 1,
  // Row 7, clamp 0-10.
  settlerFoodHigh: 2,
  // Row 8, clamp 4-12.
  unhappySize: 7,
  // Row 9, clamp 10-100.
  riotFactor: 14,
  // Row 10, clamp 4-50.
  aqueductSize: 8,
  // Row 11, clamp 4-50.
  sewerSize: 12,
  // Row 12, clamp 3-10.
  techParadigm: 10,
  // Row 13, clamp 5-100.
  transformTime: 20,
  // Row 14, clamp 0-8.
  monarchyFreeSupport: 3,
  // Row 15, clamp 0-8.
  communismFreeSupport: 3,
  // Row 16, clamp 0-8; clamped.
  fundamentalismFreeSupport: 8,
  // Row 17, clamp 1-20; clamped.
  communismPalaceDistance: 1,
  // Row 18, clamp 0-100.
  fundamentalismScienceLoss: 50,
  // Row 19, clamp 0-100.
  changePenalty: 50,
  // Row 20, clamp 4-100.
  paradropRange: 10,
  // Row 21, clamp 25-200.
  massThrustParadigm: 75,
  // Row 22, clamp 0-10.
  fundamentalismMaxScience: 5,
});

export default cosmic;
