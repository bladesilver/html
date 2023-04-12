const intNumbers = [-1, 2, -3, 4, -5, 6, -7, 0, -8];

const signCount = function(array) {
    let result = 0;
    for (let index = 0; index < array.length; ++index) {
        if (Math.sign(array[index]) !== 1 && array[index] !== 0) {
            ++result;
        }
    }
    return result;
};

console.log(signCount(intNumbers));