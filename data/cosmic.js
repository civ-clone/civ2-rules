"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmic = void 0;
exports.cosmic = Object.freeze({
    // @COSMIC row 1, civ.cpp:901 (1 to 10): move points are stored times this; a road step costs one of them.
    roadMoveMultiplier: 3,
    // Row 2, civ.cpp:902 (1 to 100): a coast-bound ship away from land is lost 1 time in this many.
    triremeLossChance: 2,
    // Row 3, civ.cpp:903 (0 to 10): food each citizen eats.
    foodPerCitizen: 2,
    // Row 4, civ.cpp:904-907 (4 to 20, rounded up to even): rows in the food box.
    foodBoxRows: 10,
    // Row 5, civ.cpp:908 (4 to 20): rows in the shield box, which multiplies every build cost.
    shieldBoxRows: 10,
    // Row 6, civ.cpp:909 (0 to 10): food a Settlers eats up to Monarchy.
    settlerFoodLow: 1,
    // Row 7, civ.cpp:910 (0 to 10): food a Settlers eats from Communism up.
    settlerFoodHigh: 2,
    // Row 8, civ.cpp:911 (4 to 12): content citizens before the difficulty is taken off.
    unhappySize: 7,
    // Row 9, civ.cpp:912 (10 to 100): the empire size unhappiness steps by.
    riotFactor: 14,
    // Row 10, civ.cpp:913 (4 to 50): the size a city can't pass without an Aqueduct.
    aqueductSize: 8,
    // Row 11, civ.cpp:914 (4 to 50): the size a city can't pass without a Sewer System.
    sewerSize: 12,
    // Row 12, civ.cpp:915 (3 to 10): research costs times this / 10.
    techParadigm: 10,
    // Row 13, civ.cpp:916 (5 to 100): an Engineer's transformation takes the terrain's move cost times this.
    transformTime: 20,
    // Row 14, civ.cpp:917 (0 to 8): units each city supports free under Monarchy.
    monarchyFreeSupport: 3,
    // Row 15, civ.cpp:918 (0 to 8): units each city supports free under Communism.
    communismFreeSupport: 3,
    // Row 16, civ.cpp:919 (0 to 8): units each city supports free under Fundamentalism. RULES.TXT asks for more than the
    //  loader allows, so the game uses 8.
    fundamentalismFreeSupport: 8,
    // Row 17, civ.cpp:920 (1 to 20): the fixed distance to the capital under Communism, for corruption. RULES.TXT asks
    //  for less than the loader allows, so the game uses 1.
    communismPalaceDistance: 1,
    // Row 18, civ.cpp:921 (0 to 100): the percentage of science lost under Fundamentalism.
    fundamentalismScienceLoss: 50,
    // Row 19, civ.cpp:922 (0 to 100): the percentage of shields lost changing what a city builds between categories.
    changePenalty: 50,
    // Row 20, civ.cpp:923 (4 to 100): the furthest a paratrooper drops.
    paradropRange: 10,
    // Row 21, civ.cpp:924 (25 to 200): the spaceship flight-time multiplier.
    massThrustParadigm: 75,
    // Row 22, civ.cpp:925 (0 to 10): the highest science rate under Fundamentalism, in tenths.
    fundamentalismMaxScience: 5,
});
exports.default = exports.cosmic;
//# sourceMappingURL=cosmic.js.map