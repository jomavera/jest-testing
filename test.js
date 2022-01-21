
const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test("One euro should be 1.206 dollars", function(){

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    expect(dollars).toBe(expected); 

})

test("Test fromDollarToYen", function(){

    const yens = fromDollarToYen(4.0)

    const expected = (4.0/1.2)* 127.9; 
    
    // this is the comparison for the unit test
    expect(yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("Test fromYenToPound", function(){

    const pounds = fromYenToPound(410.23)

    const expected = (410.23/127.9)* 0.8; 
    
    // this is the comparison for the unit test
    expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})