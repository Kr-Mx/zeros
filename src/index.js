module.exports = function zeros(expression) {
    let array = expression.split("*");
    let twos = [0];
    let fives = [0];
    let tens = [0];
    array.map(item => fin(item));

    function fin(item) {
        let factorial = +item.slice(0, -1);
        let doubleFactorial = +item.slice(0, -2);
        if (isFinite(factorial)) {
            for (let i = 1; i <= factorial; i++) {
                if ((factorial / (Math.pow(5, i))) >= 1) {
                    fives.push(Math.trunc(factorial / (Math.pow(5, i))));
                    twos.push(Math.trunc(factorial / Math.pow(2, i)))
                }
            }
        } else if (isFinite(doubleFactorial) && doubleFactorial % 2) {
            for (let k = 1; doubleFactorial / Math.pow(5, k) >= 1; k++) {
                for (let j = 1; j <= doubleFactorial; j += 2) {
                    (j % Math.pow(5, k) === 0) ? fives.push(1) : fives.push(0)
                }
            }
        } else if (isFinite(doubleFactorial) && doubleFactorial % 2 === 0) {
            for (let m = 1; doubleFactorial / Math.pow(5, m) >= 1; m++) {
                for (let n = 2; n <= doubleFactorial; n += 2) {
                    if (n % Math.pow(5, m) === 0) {
                        tens.push(1)
                    } else if (n % 2 === 0) {
                        twos.push(Math.trunc(doubleFactorial / Math.pow(2, m)))
                    }
                }
            }
        }
        return item
    }

    return Math.min(fives.reduce((sum, current) => sum + current),
        twos.reduce((sum, current) => sum + current))
        + tens.reduce((sum, current) => sum + current)
};
