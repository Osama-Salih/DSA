function same(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i] * arr1[i])) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

// Big O(n)
