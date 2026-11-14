"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.governmentIndex = void 0;
const governments_1 = require("../data/governments");
/**
 * The index of a government in Civilization II's order (`data/governments`), by its class name, which is how the
 * `base-government-*` classes are named (`Anarchy`, `Despotism`, ... `Democracy`). A government Civ2 doesn't have is
 * `-1`, so a comparison such as `>= MONARCHY` is false for it rather than throwing.
 */
const governmentIndex = (Government) => governments_1.governments.indexOf(Government.name);
exports.governmentIndex = governmentIndex;
exports.default = exports.governmentIndex;
//# sourceMappingURL=governmentIndex.js.map