const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () =>{
    //let total = sum(14,9);
    expect(sum(14,9)).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dollar should be 106.6 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(100)).toBe(10658); //1 dolar son 106.6 yenes, entonces 100 dolares deberian ser el valor entero de (100* 106.6)
});

test("One Yen should be 0.0063 pound", function(){
    // importo la funcion desde app.js
    const {fromYentoPound} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(100)).toBe(1); //1 Yen son 0.0063 Pounds, entonces 100 Yenes deberian ser el valor entero de (100* 0.0063)
});