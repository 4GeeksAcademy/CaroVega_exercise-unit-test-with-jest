const sum = (a,b) =>{
    return a+b;
}

const fromEuroToDollar = (euros) =>{
    let oneEuroIs = {
        "JPY": 127.9,
        "USD": 1.20,
        "GBP":0.8,
    };
    return euros*oneEuroIs.USD;
    
};

const fromDollarToYen = (dollar) =>{
    let oneEuroIs = {
        "JPY": 127.9,
        "USD": 1.20,
        "GBP":0.8,
    };
    return Math.round((dollar/oneEuroIs.USD)*oneEuroIs.JPY);
}


const fromYentoPound = (yen) =>{
    let oneEuroIs = {
        "JPY": 127.9,
        "USD": 1.20,
        "GBP":0.8,
    };

    return Math.round((yen/oneEuroIs.JPY)*oneEuroIs.GBP);
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound};





