const findCircleNum = (matrix) => {
    const n = matrix.length; 
    let result = 0;
    let visited = {};

    const dfs = (matrix, k, visited) => {
        visited[k] = true;

        for(let i = 0; i < n; i++) {
            if (visited[i] || matrix[k][i] !== 1) {
                continue;
            }
            dfs(matrix, i, visited);
        }
    }

    for (let i = 0; i < n; i++) {
        if(visited[i]) continue;

        dfs(matrix, i, visited);
        result++;
    }

    return result;
}

const matrix1 = [[1,1,0], [1,1,0], [0,0,1]]
const matrix2 = [[1,1,0], [1,1,1], [0,1,1]]

console.log(findCircleNum(matrix1));
console.log(findCircleNum(matrix2));