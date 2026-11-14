"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSize = void 0;
const mapSize_1 = require("../data/mapSize");
/** The size class of a map of `squares` squares (`data/mapSize`). */
const mapSize = (squares) => squares >= mapSize_1.LARGE_MAP_SQUARES
    ? 'large'
    : squares < mapSize_1.SMALL_MAP_SQUARES
        ? 'small'
        : 'normal';
exports.mapSize = mapSize;
exports.default = exports.mapSize;
//# sourceMappingURL=mapSize.js.map