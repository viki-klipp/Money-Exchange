// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let amount = [50, 25, 10, 5, 1];
    let amountValue = ['H','Q','D','N','P'];
    let count = [0, 0, 0, 0, 0];
    let result = {};

    if (currency === 0) {
        return {};
    } else if (currency > 10000) {
        return {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let i = 0;

    while(currency > 0) {
        if (currency >= amount[i]) {
            currency -= amount[i];
            count[i]++;
        } else {
            i++;
        }

        if (i == count.length) {
            i = 0;
        }
    }

    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            result[amountValue[i]] = count[i];
        }
    }

    return result;
}
