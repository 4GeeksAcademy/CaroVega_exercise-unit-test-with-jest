const fromDollarToYen = (dollar) =>{
    let oneEuroIs = {
        "JPY": 127.9,
        "USD": 1.206,
        "GBP":0.8,
    };
    return (dollar/oneEuroIs.USD)*oneEuroIs.JPY;
}

module.exports = { fromDollarToYen };
console.log (fromDollarToYen(10));