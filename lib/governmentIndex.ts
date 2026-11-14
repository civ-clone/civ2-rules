import { GovernmentKey, governments } from '../data/governments';

/**
 * The index of a government in Civilization II's order (`data/governments`), by its class name, which is how the
 * `base-government-*` classes are named (`Anarchy`, `Despotism`, ... `Democracy`). A government Civ2 doesn't have is
 * `-1`, so a comparison such as `>= MONARCHY` is false for it rather than throwing.
 */
export const governmentIndex = (Government: { name: string }): number =>
  governments.indexOf(Government.name as GovernmentKey);

export default governmentIndex;
