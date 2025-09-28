const oneEuroIs = {
    "JPY": 156.5, // yen
    "USD": 1.07,  //  dollar
    "GBP": 0.87,  // pound
};

// 2. Función de Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// 3. Función de Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    const valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// 4. Función de Yen a Libra
const fromYenToPound = function(valueInYen) {
    const valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// 5. Exportamos todas las funciones para que los tests las puedan usar
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };