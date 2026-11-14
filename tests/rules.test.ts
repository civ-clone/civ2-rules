import {
  ANARCHY,
  COMMUNISM,
  DEMOCRACY,
  DESPOTISM,
  FUNDAMENTALISM,
  MONARCHY,
  REPUBLIC,
  governments,
} from '../data/governments';
import cosmic from '../data/cosmic';
import { expect } from 'chai';
import governmentIndex from '../lib/governmentIndex';
import mapSize from '../lib/mapSize';

describe('cosmic', (): void => {
  it('holds the 22 effective values', (): void => {
    expect(Object.keys(cosmic)).length(22);
    expect(Object.isFrozen(cosmic)).true;
  });

  it('uses the clamped values, not the ones RULES.TXT asks for', (): void => {
    expect(cosmic.fundamentalismFreeSupport).equal(8);
    expect(cosmic.communismPalaceDistance).equal(1);
  });

  it('keeps an even number of food box rows', (): void => {
    expect(cosmic.foodBoxRows % 2).equal(0);
  });
});

describe('governments', (): void => {
  it('are in the game order, Fundamentalism between Communism and the Republic', (): void => {
    expect(governments).length(7);
    expect([
      ANARCHY,
      DESPOTISM,
      MONARCHY,
      COMMUNISM,
      FUNDAMENTALISM,
      REPUBLIC,
      DEMOCRACY,
    ]).eql([0, 1, 2, 3, 4, 5, 6]);
  });

  it('index government classes by name, and -1 for one Civ2 lacks', (): void => {
    class Monarchy {}
    class Fundamentalism {}
    class Theocracy {}

    expect(governmentIndex(Monarchy)).equal(MONARCHY);
    expect(governmentIndex(Fundamentalism)).equal(FUNDAMENTALISM);
    expect(governmentIndex(Theocracy)).equal(-1);
  });
});

describe('mapSize', (): void => {
  it('is small under 3,000 squares, large from 6,000', (): void => {
    expect(mapSize(2999)).equal('small');
    expect(mapSize(3000)).equal('normal');
    // Civ2's normal map, 50 × 80.
    expect(mapSize(4000)).equal('normal');
    expect(mapSize(5999)).equal('normal');
    expect(mapSize(6000)).equal('large');
  });
});
