let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,
    // Add Swiss values
    "CHF": 1.1787
};

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//  In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at
//  3.8959 BRL to 1 Euro.




// Got close thanks to https://stackoverflow.com/questions/11142884/fast-way-to-get-the-min-max-values-among-properties-of-object
// but can't figure out how to display the corresponded currency symbol instead of the highest value
let currency = Object.values(rates)
let max = Math.max(...currency)
console.log( `Highest currency value: ${max}` )