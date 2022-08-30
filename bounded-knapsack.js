/*Input:
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

Output:
17

As our capacity is 15, we can add weights (4 + 1 + 10 = 15)
So the maximum value we will get is 12(4) + 1(1) + 4(10) = 17
*/
const knapSack = (values, weights, target) => {
  const N = values.length + 1;
  const table = new Array(N);

  for (let r = 0; r <= N; r++) {
    table[r] = new Array(target + 1);
    for (let c = 0; c <= target; c++) {
      if (r === 0 || c === 0) {
        table[r][c] = 0;
      } else if (weights[r - 1] <= c) {
        table[r][c] = Math.max(
          table[r - 1][c - weights[r - 1]] + values[r - 1],
          table[r - 1][c]
        );
      } else {
        table[r][c] = table[r - 1][c];
      }
    }
  }
  return table[N][target];
};

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

const result = knapSack(values, weights, target);
console.log(result);
/*
Time complexity: O(values.length * target)
Space complexity: O(values.length * target)
*/
/*
  [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [0, 0, 2, 2, 12, 12, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
  [0, 1, 2, 3, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15],
  [0, 1, 2, 3, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15, 16, 17],
  [0, 1, 2, 3, 12, 13, 14, 15, 15, 16, 16, 16, 16, 16, 16, 17],
  [0, 1, 2, 3, 12, 13, 14, 15, 15, 16, 16, 16, 16, 16, 16, 17]
]
*/
