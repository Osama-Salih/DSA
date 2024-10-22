function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let count = 1;
  let j = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (j !== arr[i]) {
      count++;
      j = arr[i];
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 1, 2, 2])); // 4

// Big O(n)
