"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMOCRACY = exports.REPUBLIC = exports.FUNDAMENTALISM = exports.COMMUNISM = exports.MONARCHY = exports.DESPOTISM = exports.ANARCHY = exports.governments = void 0;
// Civilization II's governments in the game's own order (OpenCiv2 `src/include/enums.h:134`, the 7 rows of RULES.TXT's
//  @GOVERNMENTS loaded in file order, `civ.cpp:1446`). Many rules compare the index rather than the government:
//  "Monarchy or below" or "Communism or above", which puts Fundamentalism between Communism and the Republic. A rule
//  set maps its government classes onto these indices with `governmentIndex`.
exports.governments = [
    'Anarchy',
    'Despotism',
    'Monarchy',
    'Communism',
    'Fundamentalism',
    'Republic',
    'Democracy',
];
exports.ANARCHY = 0;
exports.DESPOTISM = 1;
exports.MONARCHY = 2;
exports.COMMUNISM = 3;
exports.FUNDAMENTALISM = 4;
exports.REPUBLIC = 5;
exports.DEMOCRACY = 6;
exports.default = exports.governments;
//# sourceMappingURL=governments.js.map