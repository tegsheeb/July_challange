/*
A Mars rover is directed to move within a square matrix. It accepts a sequence of commands to move in any of the four directions from each cell: [UP, DOWN, LEFT or RIGHT]. The rover starts from cell 0. and may not move diagonally or outside of the boundary.

Each cell in the matrix has a position equal to:
(row * size) + column
where row and column are zero-indexed, size = row length of the matrix.

Return the final position of the rover after all moves.

Example
n = 4
commands = [RIGHT, UP, DOWN, LEFT, DOWN, DOWN]

The rover path is shown below.

0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 15

RIGHT: Rover moves to position 1
UP: Position unchanged, as the move would take the rover out of the boundary.
DOWN: Rover moves to Position 5.
LEFT: Rover moves to position 4
DOWN: Rover moves to position 8
DOWN: The rover ends up in position 12.

The function returns 12.

Function Description
Complete the function roverMove in the editor below.
roverMove has the following parameter(s):
int n: the size of the square matrix
string cmds[m]: the commands

Returns
int: the label of the cell the rover occupies after executing all commands

Constraints
2 <= n <= 20
1 <= |cmds| <= 20

Input Format For Custom Testing

Input from stdin will be processed as follows and passed to the function.
The first line contains an integer, n, denoting the size of the square matrix.
The next line contains an integer, m, the number of commands to follow.
Each of the next m lines contains a command string, cmds[i].

Sample Input :
STDIN Function

4 → n = 4
5 → cmds [] size m = 5
RIGHT → cmds = ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN']
DOWN
LEFT
LEFT
DOWN

Sample Output:
8

Explanation:
0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 15
Rover starts at position 0
RIGHT → pos 1
DOWN → pos 5
LEFT → pos 4
LEFT → pos 4, No effect
DOWN → pos 8

https://aonecode.com/aplusplus/interviewctrl/getInterview/89237198

*/


const roverMove = (n, cmds) => {
    col = 0;
    row = 0;
    for (let i = 0; i < cmds.length; i++) {
        if (cmds[i] === 'UP') {
            row = Math.max(0, row - 1);
        } else if (cmds[i] === 'DOWN') {
            row = Math.min(n - 1, row + 1);
        } else if (cmds[i] === 'LEFT') {
            col = Math.max(0, col - 1);
        } else {
            col = Math.min(n - 1, col + 1)
        }
    }

    return row * n + col;
}

const n1 = 4
cmds1 = ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN']
console.log(roverMove(n1, cmds1))