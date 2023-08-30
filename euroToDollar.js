const fromEuroToDollar = (euros) =>{
    let oneEuroIs = {
        "JPY": 127.9,
        "USD": 1.20,
        "GBP":0.8,
    };
    return euros*oneEuroIs.USD;
    
};


console.log(fromEuroToDollar (30));
module.exports = { fromEuroToDollar };