const pars = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
};
const MAX_CURRENCY = 10000;

module.exports = function makeExchange(currency) {
    if (currency > MAX_CURRENCY) {
        return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
    }

    const coinsNumber = {};

    if (currency >= pars.H) {
        const rest = currency % pars.H;
        coinsNumber.H = (currency - rest) / pars.H;
        currency = rest;
    }
    if (currency >= pars.Q) {
        const rest = currency % pars.Q;
        coinsNumber.Q = (currency - rest) / pars.Q;
        currency = rest;
    }
    if (currency >= pars.D) {
        const rest = currency % pars.D;
        coinsNumber.D = (currency - rest) / pars.D;
        currency = rest;
    }
    if (currency >= pars.N) {
        const rest = currency % pars.N;
        coinsNumber.N = (currency - rest) / pars.N;
        currency = rest;
    }
    if (currency >= pars.P) {
        const rest = currency % pars.P;
        coinsNumber.P = (currency - rest) / pars.P;
    }

    return coinsNumber;
};
