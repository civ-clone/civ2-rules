# civ2-rules

Civilization II's rule constants, shared by the `civ2-*` packages. It's a library: it has no `main` and registers
nothing, so import its modules directly.

- `data/cosmic`: the 22 @COSMIC values as the game uses them, after the loader's clamps (Fundamentalism's free support
  is 8, and Communism's capital distance is 1).
- `data/governments`, `lib/governmentIndex`: the seven governments in the game's order, Anarchy 0 to Democracy 6, with
  Fundamentalism at 4. Rules that compare governments ("Monarchy or below") compare these indices.
- `data/mapSize`, `lib/mapSize`: small under 3,000 squares, large from 6,000.

Every number cites the RULES.TXT row it comes from and the OpenCiv2 function that reads it (`src/auto/civ.cpp`
`rules_load_cosmic`, richardpenman/civ2@49f26ec). No RULES.TXT text is included.

## Checking against your own RULES.TXT

`tests/rulesTxt.test.ts` compares the tables with a copy of the game, using civ2-asset-extractor's parsers. It runs only
when `CIV2_PATH` is set to the game's folder:

```sh
CIV2_PATH=~/Games/Civ2 npm test
```
