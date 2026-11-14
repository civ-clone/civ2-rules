// Civilization II's governments in the game's own order (OpenCiv2 `src/include/enums.h:134`, the 7 rows of RULES.TXT's
//  @GOVERNMENTS loaded in file order, `civ.cpp:1446`). Many rules compare the index rather than the government:
//  "Monarchy or below" or "Communism or above", which puts Fundamentalism between Communism and the Republic. A rule
//  set maps its government classes onto these indices with `governmentIndex`.
export const governments = [
  'Anarchy',
  'Despotism',
  'Monarchy',
  'Communism',
  'Fundamentalism',
  'Republic',
  'Democracy',
] as const;

export type GovernmentKey = (typeof governments)[number];

export const ANARCHY = 0;
export const DESPOTISM = 1;
export const MONARCHY = 2;
export const COMMUNISM = 3;
export const FUNDAMENTALISM = 4;
export const REPUBLIC = 5;
export const DEMOCRACY = 6;

export default governments;
