/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    result = [];
    
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            let newScore = parseInt(result[result.length - 1]) + parseInt(result[result.length - 2])
            result.push(newScore);
        } else if (ops[i] === 'D') {
            result.push(result[result.length - 1] * 2);
        } else if (ops[i] === 'C') {
            result.pop();
        } else {
            result.push(ops[i])
        }
    }
    
    console.log(result);
    
    return result.reduce((sum, val) => parseInt(sum) + parseInt(val));
};