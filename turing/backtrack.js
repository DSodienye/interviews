/**
 * Question:
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in specified order
*/

function a(nums) {
  const result = [];
  const subset = [];

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[index]);
    backtrack(index + 1);
    subset.pop();
    backtrack(index + 1);
  }

  backtrack(0);
  return result.sort((a, b) => a.length - b.length);
}

function b(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  result.sort((a, b) => a.length - b.length || (a[0] ?? -Infinity) - (b[0] ?? -Infinity));
  return result;
}


console.info(`-:`, [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
console.info('a:', a([1, 2, 3]));
console.info('b:', b([1, 2, 3]));
