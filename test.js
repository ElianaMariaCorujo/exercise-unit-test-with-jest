const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js').default;

// Test para fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

// Test para fromDollarToYen
test("Ten dollars should be approximately 1462.61 yen", function() {
    const expected = (10 / 1.07) * 156.5;
    expect(fromDollarToYen(10)).toBeCloseTo(expected);
});

// Test para fromYenToPound
test("One thousand yen should be approximately 5.559 pounds", function() {
    const expected = (1000 / 156.5) * 0.87;
    expected(fromYenToPound(1000)).toBeCloseTo(expected);
});