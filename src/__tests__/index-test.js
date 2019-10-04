import { isFunction } from '../index';

describe('isFunction', () => {
    it('should return true if param is function', () => {
        const param = () => {};
        expect(isFunction(param)).toBe(true);
    });

    it('should return false if param is undefined', () => {
        const foo = {};
        expect(isFunction(foo.bar)).toBe(false);
    });

    it('should return false if param is not a function', () => {
        const param = 'random_string';
        expect(isFunction(param)).toBe(false);
    });
});
