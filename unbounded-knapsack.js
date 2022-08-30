/*
Input:
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

Output:
39

As our capacity is 15 and we can repeat the items, we can add weights (4 + 4 + 4 + 2 + 1 = 15)
So the maximum value we will get is 12(4) + 12(4) + 12(4) + 2(2) + 1(1) = 39

lookup[target + 1].fill(0);

from j = 0 to j = n - 1
lookup[i] = max(lookup[i], lookup[i-weight[j]] + val[j])
                   where j varies from 0 
                   to n-1 such that:
                   weights[j] <= i

result = lookup[target]
*/

const unboundedKnapsack = (values, weights, n, target) => {
  // create a lookup table
  // lookup[i] is going to store maximum value
  // with knapsack capacity i.
  const lookup = new Array(target + 1).fill(0);

  // fill lookup[] using above recursive formula
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < n; j++) {
      if (weights[j] <= i) {
        lookup[i] = Math.max(lookup[i], lookup[i - weights[j]] + values[j]);
      }
    }
  }
  //return the max
  return lookup[target];
};

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const n = values.length - 1;
const target = 15;

const result = unboundedKnapsack(values, weights, n, 15);
/*
Time Complexity: O(value.length * target);
Space Complexity: O(target + 1)
*/
