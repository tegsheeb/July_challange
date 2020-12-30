/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const getDistance = (point) => {
        return point[0]*point[0] + point[1] * point[1];
    }
    
    const n = points.length;
    let distance = [];
    let result = [];
    
    for (let i = 0; i < n; i++) {
        distance.push(getDistance(points[i]))
    }
    
    const sortedDistance = distance.sort((a, b) => a - b);
    const distanceK = sortedDistance[K - 1];
    
    for (let i = 0; i < n; i++) {
        if (getDistance(points[i]) <= distanceK) {
            result.push(points[i])
        }
    }
    
    return result;
};

const set1 = [[1,3],[-2,2]]
console.log(kClosest(set1, 1))