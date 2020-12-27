// Amazon | OA | Multiprocessor System
const solution = (num, ability, processes) => {
    let count = 0; 
    while (processes > 0 ) {
        const processing = Math.max(...ability);
        processes -= processing;
        ability[ability.indexOf(processing)] =  Math.floor(ability[ability.indexOf(processing)]/2)
        count ++;
    }
    return count
}

const num = 5;
const ability = [3,1,7,2,4];
const processes = 15


console.log(solution(num, ability, processes))