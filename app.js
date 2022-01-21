
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (amount) => {
    return amount/oneEuroIs['USD'] * oneEuroIs['JPY'];
}


const fromEuroToDollar = (amount) => {
    return amount*oneEuroIs['USD'];
}

const fromYenToPound = (amount) => {
    return amount/oneEuroIs['JPY'] * oneEuroIs['GBP'];
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
