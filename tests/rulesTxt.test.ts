import cosmic from '../data/cosmic';
import { expect } from 'chai';
import { governments } from '../data/governments';
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  readCosmic,
  readGovernments,
} from '@civ-clone/civ2-asset-extractor/rules';

// Compares the committed tables with the player's own RULES.TXT. Skipped unless `CIV2_PATH` names the game's folder,
//  so CI, which has no copy of the game, never runs it. Only numbers and counts are compared.
const path = process.env.CIV2_PATH;

(path ? describe : describe.skip)('RULES.TXT', (): void => {
  const rules = path ? readFileSync(join(path, 'RULES.TXT'), 'latin1') : '';

  it('@COSMIC: every effective value matches', (): void => {
    expect(readCosmic(rules).effective).eql({ ...cosmic });
  });

  it('@COSMIC: only rows 16 and 17 are clamped', (): void => {
    const { raw, effective } = readCosmic(rules),
      clamped = Object.keys(raw)
        .map((key, index): [string, number] => [key, index + 1])
        .filter(
          ([key]) =>
            raw[key as keyof typeof raw] !==
            effective[key as keyof typeof effective]
        )
        .map(([, row]) => row);

    expect(clamped).eql([16, 17]);
  });

  it('@GOVERNMENTS: 7 rows, one per index', (): void => {
    expect(readGovernments(rules)).length(governments.length);
  });
});
