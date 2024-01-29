const balances = ['$123.10', '$61 123.23', '$1,321,123.10', '$0.00', '$799.50', '$1 916 161 123.25'];

const balanceNums = balances.map(balance => {
    const numericValue = parseFloat(balance.replace(/[^\d.]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
});

console.log(balanceNums);