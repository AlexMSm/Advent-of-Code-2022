let data = `[M] [H]         [N]                
[S] [W]         [F]     [W] [V]    
[J] [J]         [B]     [S] [B] [F]
[L] [F] [G]     [C]     [L] [N] [N]
[V] [Z] [D]     [P] [W] [G] [F] [Z]
[F] [D] [C] [S] [W] [M] [N] [H] [H]
[N] [N] [R] [B] [Z] [R] [T] [T] [M]
[R] [P] [W] [N] [M] [P] [R] [Q] [L]`;

let rows = data.split("\n");

let stacks = {};

for (row of rows) {
  let result = row.match(/.{1,4}/g) ?? [];

  stack = 1;

  for (crate of result) {
    if (crate.split("").includes("[")) {
      try {
        stacks[stack].push(crate);
      } catch (err) {
        stacks[stack] = [crate];
      }
    }
    stack++;
  }
}

const instructions = `move 1 from 7 to 6
move 1 from 9 to 4
move 4 from 9 to 6
move 1 from 2 to 3
move 7 from 8 to 6
move 1 from 6 to 3
move 6 from 2 to 9
move 1 from 2 to 9
move 3 from 5 to 6
move 4 from 5 to 4
move 1 from 1 to 6
move 8 from 9 to 4
move 1 from 5 to 1
move 7 from 3 to 9
move 11 from 4 to 1
move 1 from 9 to 3
move 1 from 3 to 6
move 9 from 1 to 2
move 1 from 4 to 8
move 1 from 8 to 2
move 5 from 9 to 4
move 8 from 2 to 1
move 10 from 6 to 3
move 5 from 4 to 3
move 9 from 3 to 2
move 1 from 9 to 5
move 1 from 6 to 1
move 4 from 1 to 8
move 5 from 7 to 6
move 1 from 5 to 9
move 2 from 4 to 3
move 13 from 6 to 1
move 1 from 6 to 3
move 3 from 1 to 7
move 9 from 2 to 7
move 2 from 4 to 6
move 25 from 1 to 9
move 2 from 2 to 7
move 2 from 3 to 5
move 1 from 6 to 5
move 2 from 5 to 2
move 2 from 8 to 9
move 2 from 2 to 5
move 23 from 9 to 5
move 1 from 8 to 5
move 1 from 8 to 9
move 6 from 3 to 7
move 3 from 5 to 7
move 1 from 3 to 1
move 1 from 1 to 5
move 11 from 7 to 6
move 9 from 6 to 2
move 1 from 7 to 1
move 1 from 1 to 7
move 2 from 6 to 8
move 8 from 2 to 3
move 4 from 7 to 1
move 7 from 7 to 6
move 6 from 9 to 6
move 1 from 1 to 5
move 5 from 6 to 8
move 2 from 7 to 6
move 2 from 3 to 2
move 24 from 5 to 8
move 1 from 3 to 5
move 4 from 3 to 2
move 1 from 5 to 6
move 31 from 8 to 6
move 1 from 5 to 6
move 1 from 3 to 6
move 2 from 1 to 9
move 2 from 9 to 6
move 1 from 1 to 9
move 46 from 6 to 5
move 1 from 9 to 4
move 35 from 5 to 1
move 28 from 1 to 5
move 24 from 5 to 3
move 1 from 3 to 4
move 1 from 6 to 3
move 19 from 3 to 4
move 2 from 3 to 8
move 3 from 1 to 8
move 4 from 2 to 1
move 4 from 8 to 6
move 6 from 1 to 5
move 1 from 8 to 5
move 3 from 4 to 1
move 5 from 1 to 7
move 23 from 5 to 2
move 21 from 2 to 8
move 6 from 8 to 2
move 2 from 2 to 5
move 2 from 5 to 6
move 5 from 4 to 5
move 6 from 6 to 7
move 4 from 5 to 2
move 1 from 7 to 9
move 3 from 3 to 2
move 1 from 5 to 2
move 2 from 8 to 5
move 11 from 2 to 5
move 3 from 2 to 7
move 13 from 7 to 4
move 11 from 8 to 1
move 1 from 9 to 5
move 23 from 4 to 2
move 1 from 4 to 9
move 10 from 1 to 2
move 1 from 9 to 5
move 1 from 1 to 3
move 2 from 8 to 6
move 4 from 5 to 9
move 19 from 2 to 5
move 3 from 9 to 2
move 28 from 5 to 7
move 1 from 3 to 5
move 1 from 9 to 5
move 15 from 7 to 5
move 2 from 6 to 4
move 2 from 4 to 3
move 19 from 5 to 9
move 5 from 7 to 5
move 8 from 7 to 8
move 1 from 8 to 1
move 14 from 9 to 6
move 2 from 8 to 5
move 1 from 3 to 8
move 3 from 5 to 9
move 1 from 1 to 9
move 3 from 9 to 6
move 8 from 6 to 5
move 1 from 8 to 1
move 1 from 8 to 3
move 13 from 2 to 4
move 4 from 9 to 8
move 4 from 4 to 1
move 1 from 6 to 1
move 2 from 3 to 4
move 2 from 1 to 7
move 10 from 5 to 1
move 2 from 5 to 2
move 7 from 4 to 7
move 6 from 6 to 7
move 1 from 9 to 7
move 3 from 7 to 1
move 7 from 2 to 7
move 1 from 6 to 3
move 1 from 6 to 9
move 8 from 7 to 8
move 2 from 7 to 6
move 8 from 7 to 9
move 17 from 1 to 7
move 13 from 8 to 5
move 2 from 7 to 1
move 2 from 6 to 3
move 9 from 7 to 6
move 5 from 7 to 6
move 1 from 4 to 5
move 3 from 5 to 9
move 4 from 9 to 2
move 2 from 8 to 6
move 1 from 7 to 9
move 4 from 9 to 1
move 12 from 6 to 2
move 10 from 2 to 6
move 4 from 9 to 4
move 6 from 1 to 6
move 2 from 7 to 8
move 2 from 8 to 4
move 1 from 8 to 1
move 8 from 4 to 7
move 5 from 5 to 2
move 3 from 4 to 1
move 3 from 2 to 8
move 2 from 8 to 4
move 1 from 4 to 5
move 3 from 2 to 1
move 2 from 9 to 8
move 11 from 6 to 5
move 4 from 7 to 2
move 1 from 3 to 7
move 1 from 8 to 5
move 8 from 6 to 4
move 2 from 3 to 7
move 1 from 6 to 2
move 15 from 5 to 3
move 15 from 3 to 5
move 5 from 1 to 6
move 12 from 2 to 8
move 4 from 7 to 3
move 4 from 6 to 3
move 7 from 4 to 3
move 8 from 3 to 8
move 1 from 6 to 8
move 10 from 5 to 3
move 8 from 5 to 4
move 15 from 3 to 9
move 1 from 1 to 3
move 9 from 4 to 9
move 1 from 7 to 3
move 2 from 7 to 6
move 1 from 9 to 7
move 19 from 8 to 2
move 1 from 1 to 9
move 4 from 3 to 9
move 1 from 5 to 6
move 4 from 8 to 1
move 1 from 4 to 1
move 3 from 1 to 3
move 1 from 1 to 9
move 4 from 9 to 7
move 2 from 6 to 1
move 2 from 1 to 2
move 1 from 6 to 3
move 1 from 1 to 4
move 3 from 7 to 5
move 21 from 2 to 8
move 1 from 7 to 8
move 2 from 5 to 3
move 1 from 4 to 3
move 3 from 3 to 1
move 1 from 7 to 5
move 1 from 1 to 2
move 1 from 1 to 2
move 2 from 3 to 2
move 1 from 3 to 8
move 2 from 5 to 6
move 1 from 3 to 9
move 4 from 2 to 8
move 12 from 9 to 6
move 1 from 1 to 4
move 14 from 6 to 1
move 3 from 9 to 1
move 1 from 4 to 7
move 4 from 8 to 6
move 3 from 6 to 4
move 3 from 4 to 7
move 15 from 1 to 5
move 1 from 6 to 5
move 12 from 5 to 4
move 10 from 9 to 8
move 3 from 7 to 8
move 1 from 9 to 1
move 2 from 1 to 7
move 17 from 8 to 5
move 10 from 4 to 2
move 16 from 5 to 8
move 30 from 8 to 7
move 4 from 5 to 2
move 4 from 7 to 1
move 1 from 5 to 8
move 4 from 8 to 4
move 5 from 4 to 8
move 8 from 7 to 8
move 19 from 7 to 5
move 4 from 1 to 4
move 7 from 5 to 3
move 10 from 2 to 3
move 5 from 5 to 1
move 1 from 5 to 3
move 4 from 2 to 8
move 4 from 4 to 6
move 1 from 5 to 7
move 3 from 7 to 1
move 1 from 4 to 2
move 7 from 3 to 7
move 2 from 5 to 1
move 1 from 2 to 8
move 3 from 5 to 2
move 3 from 2 to 7
move 11 from 1 to 9
move 9 from 9 to 6
move 1 from 3 to 8
move 2 from 9 to 6
move 3 from 3 to 7
move 3 from 7 to 1
move 5 from 6 to 7
move 14 from 7 to 6
move 1 from 7 to 2
move 5 from 3 to 5
move 1 from 3 to 4
move 2 from 1 to 4
move 1 from 6 to 9
move 1 from 3 to 8
move 1 from 9 to 2
move 1 from 1 to 4
move 4 from 4 to 9
move 1 from 2 to 3
move 5 from 5 to 9
move 1 from 9 to 5
move 1 from 5 to 3
move 11 from 6 to 3
move 2 from 9 to 1
move 1 from 1 to 7
move 5 from 6 to 4
move 4 from 3 to 9
move 1 from 3 to 7
move 1 from 4 to 2
move 1 from 4 to 5
move 2 from 2 to 1
move 1 from 4 to 5
move 2 from 1 to 6
move 1 from 3 to 6
move 8 from 9 to 6
move 19 from 8 to 7
move 2 from 7 to 4
move 1 from 1 to 3
move 6 from 6 to 5
move 1 from 8 to 6
move 8 from 5 to 9
move 1 from 9 to 8
move 1 from 4 to 6
move 1 from 9 to 1
move 4 from 7 to 5
move 2 from 4 to 7
move 1 from 4 to 5
move 8 from 9 to 5
move 3 from 8 to 2
move 8 from 6 to 8
move 5 from 3 to 1
move 6 from 8 to 3
move 9 from 5 to 7
move 3 from 2 to 4
move 1 from 6 to 1
move 2 from 3 to 9
move 2 from 8 to 1
move 1 from 4 to 7
move 1 from 5 to 6
move 1 from 9 to 3
move 8 from 3 to 8
move 2 from 4 to 9
move 2 from 5 to 7
move 5 from 8 to 3
move 2 from 6 to 9
move 1 from 9 to 5
move 3 from 9 to 3
move 3 from 6 to 5
move 1 from 9 to 6
move 1 from 8 to 3
move 4 from 5 to 4
move 24 from 7 to 5
move 8 from 3 to 1
move 24 from 5 to 2
move 3 from 4 to 6
move 5 from 6 to 3
move 1 from 3 to 1
move 1 from 5 to 2
move 4 from 2 to 1
move 5 from 3 to 9
move 1 from 4 to 3
move 5 from 2 to 3
move 3 from 1 to 2
move 1 from 7 to 1
move 4 from 7 to 8
move 1 from 1 to 2
move 5 from 2 to 8
move 2 from 9 to 8
move 19 from 1 to 7
move 9 from 8 to 9
move 2 from 3 to 5
move 8 from 9 to 6
move 5 from 6 to 2
move 1 from 3 to 8
move 2 from 9 to 5
move 3 from 5 to 9
move 5 from 9 to 4
move 2 from 6 to 4
move 2 from 8 to 3
move 1 from 5 to 6
move 3 from 8 to 4
move 1 from 6 to 9
move 8 from 4 to 3
move 19 from 7 to 5
move 5 from 3 to 6
move 1 from 4 to 5
move 1 from 4 to 7
move 1 from 9 to 1
move 4 from 6 to 8
move 1 from 7 to 5
move 2 from 6 to 4
move 4 from 8 to 5
move 6 from 3 to 1
move 6 from 5 to 8
move 5 from 5 to 1
move 2 from 4 to 7
move 2 from 3 to 2
move 7 from 5 to 2
move 1 from 7 to 9
move 3 from 2 to 6
move 7 from 2 to 1
move 4 from 1 to 7
move 7 from 1 to 7
move 11 from 2 to 4
move 3 from 6 to 7
move 2 from 8 to 5
move 8 from 7 to 3
move 6 from 3 to 5
move 4 from 2 to 3
move 3 from 7 to 6
move 3 from 2 to 5
move 7 from 5 to 1
move 10 from 1 to 6
move 1 from 2 to 8
move 3 from 6 to 7
move 4 from 4 to 1
move 2 from 3 to 6
move 3 from 3 to 9
move 1 from 3 to 6
move 4 from 1 to 4
move 3 from 9 to 6
move 2 from 4 to 1
move 9 from 4 to 7
move 11 from 7 to 4
move 6 from 1 to 6
move 6 from 4 to 7
move 5 from 4 to 7
move 4 from 8 to 1
move 1 from 8 to 6
move 1 from 9 to 7
move 4 from 6 to 4
move 5 from 5 to 4
move 5 from 5 to 9
move 5 from 1 to 6
move 1 from 5 to 6
move 4 from 9 to 7
move 1 from 9 to 8
move 7 from 7 to 1
move 1 from 7 to 8
move 4 from 1 to 5
move 5 from 4 to 1
move 1 from 4 to 8
move 6 from 1 to 2
move 11 from 6 to 8
move 2 from 8 to 9
move 1 from 5 to 9
move 6 from 2 to 8
move 1 from 1 to 2
move 2 from 7 to 8
move 1 from 9 to 2
move 2 from 2 to 8
move 1 from 7 to 8
move 10 from 8 to 3
move 3 from 5 to 9
move 4 from 8 to 5
move 4 from 8 to 2
move 7 from 7 to 8
move 2 from 5 to 9
move 1 from 5 to 1
move 2 from 7 to 8
move 5 from 3 to 5
move 1 from 1 to 3
move 1 from 1 to 6
move 1 from 2 to 4
move 7 from 6 to 4
move 2 from 2 to 3
move 3 from 8 to 4
move 2 from 3 to 1
move 3 from 5 to 6
move 3 from 6 to 8
move 1 from 1 to 9
move 3 from 3 to 1
move 8 from 8 to 1
move 1 from 2 to 9
move 1 from 6 to 2
move 3 from 5 to 1
move 1 from 8 to 3
move 3 from 4 to 1
move 4 from 8 to 9
move 1 from 7 to 1
move 7 from 1 to 6
move 8 from 9 to 6
move 1 from 8 to 9
move 4 from 9 to 8
move 15 from 6 to 5
move 3 from 1 to 6
move 2 from 1 to 2
move 1 from 2 to 7
move 1 from 9 to 6
move 3 from 8 to 1
move 1 from 4 to 9
move 11 from 5 to 9
move 1 from 7 to 1
move 1 from 2 to 3
move 2 from 3 to 4
move 6 from 1 to 7
move 7 from 4 to 5
move 2 from 6 to 7
move 1 from 4 to 5
move 2 from 4 to 1
move 13 from 9 to 1
move 2 from 3 to 2
move 1 from 3 to 7
move 2 from 4 to 1
move 4 from 6 to 9
move 1 from 8 to 4
move 4 from 6 to 8
move 1 from 4 to 9
move 9 from 1 to 6
move 8 from 6 to 9
move 4 from 5 to 3
move 1 from 8 to 4`;

const movesSplit = instructions.split("\n");

let moves = [];

for (move of movesSplit) {
  let nums = move.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);
  moves.push(nums);
}

function moveCrates(num, from, to, curStack) {
  const movingStack = curStack[from].splice(0, num);
  // movingStack.reverse();
  curStack[to].splice(0, 0, ...movingStack);
}

tmoves = [
  [1, 2, 1],
  [3, 1, 3],
  [2, 2, 1],
  [1, 1, 2],
];
tstacks = { 1: ["[N]", "[Z]"], 2: ["[D]", "[C]", "[M]"], 3: ["[P]"] };

console.log(stacks);

for (move of moves) {
  moveCrates(move[0], move[1], move[2], stacks);
}
console.log("final", stacks);
for (list of Object.values(tstacks)) {
}
