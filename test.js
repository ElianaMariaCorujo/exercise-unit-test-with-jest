const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("10 dollars should be converted to yen correctly", function() {
    const expected = (10 / 1.07) * 156.5;
    expect(fromDollarToYen(10)).toBeCloseTo(expected);
});

test("1000 yen should be converted to pounds correctly", function() {
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBeCloseTo(expected);
});