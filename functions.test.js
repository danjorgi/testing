const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('should return the integer 2', () => {
    expect(returnTwo()).toBe(2);
});

test('returns greeting "Hello, ${name}"', () => {
    expect(greeting('James')).toBe("Hello, James.");
    expect(greeting('Jill')).toBe("Hello, Jill.");
});

describe('Math functions', () => {
    test('should sum given nums', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    });
    
    test('should mulitiply given nums', () => {
        expect(multiply(5, 10)).toBe(50);
        expect(multiply(7, 7)).toBe(49);
    });
    
    test('should divide given nums', () => {
        expect(divide(10, 5)).toBe(2);
        expect(divide(12, 4)).toBe(3);
    });
    
    test('should subtract given nums', () => {
        expect(subtract(71, 10)).toBe(61);
        expect(subtract(3, 5)).toBe(-2);
    });
});