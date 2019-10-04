//import index explicitly as otherwise it'll import bundle!
import { isDistanceValid, isPositionValid, isCoordinateValid } from '../index';

describe('common-utils/checkers::isDistanceValid()', () => {
    it('should return true as 1 is a number and positive', () => {
        expect(isDistanceValid(1)).toBe(true);
    });
    it('should return true as 0 is valid distance', () => {
        expect(isDistanceValid(0)).toBe(true);
    });
    it('should return true as 9999999 is a number and positive', () => {
        expect(isDistanceValid(9999999)).toBe(true);
    });
    it('should return true as 99.456 is a number and positive', () => {
        expect(isDistanceValid(99.456)).toBe(true);
    });
});

describe('common-utils/checkers::isPositionValid()', () => {

});

describe('common-utils/checkers::isCoordinateValid()', () => {

});
