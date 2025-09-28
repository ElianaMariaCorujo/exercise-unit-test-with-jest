// test.js

// 1. Importamos todas las funciones desde app.js al principio del archivo
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// 2. Test para fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // La función expect() de Jest envuelve nuestro resultado
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

// 3. Test para fromDollarToYen
test("Ten dollars should be approximately 1462.61 yen", function() {
    const expected = (10 / 1.07) * 156.5;
    expect(fromDollarToYen(10)).toBeCloseTo(expected);
});

// 4. Test para fromYenToPound (Esta es la parte corregida)
test("One thousand yen should be approximately 5.559 pounds", function() {
    // "expected" es tu variable que guarda el número correcto
    const expected = (1000 / 156.5) * 0.87;
    
    // "expect()" es la función de Jest que inicia la prueba
    expect(fromYenToPound(1000)).toBeCloseTo(expected);
});