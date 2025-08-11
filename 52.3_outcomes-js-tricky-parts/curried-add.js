function curriedAdd(num) {
    if (num === undefined) return 0;
    let total = num;

    function adder(nextNum) {
        if (nextNum === undefined) return total;
        total += nextNum;
        return adder;
    }
    return adder;
}

module.exports = { curriedAdd };
