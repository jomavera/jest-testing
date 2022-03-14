
const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test("Un euro debe ser 1.206 dolares", function(){

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    expect(dollars).toBe(expected); 

})

test("Un dolar debe ser 106.5833 yenes ", function(){

    const yens = fromDollarToYen(4.0)

    const expected = (4.0/1.2)* 127.9; 
    
    expect(yens).toBe(expected);
})


test("Un yen debe ser 0.00625 libras esterlinas", function(){

    const pounds = fromYenToPound(410.23)

    const expected = (410.23/127.9)* 0.8; 
    
    expect(pounds).toBe(expected);
})