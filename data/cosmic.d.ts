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
export declare const cosmic: Readonly<Cosmic>;
export default cosmic;
