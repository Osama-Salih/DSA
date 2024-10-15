function cartesianProduct(set1, set2) {
  const res = [];
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      res.push([set1[i], set2[j]]);
    }
  }

  return res;
}

console.log(cartesianProduct([1, 2], [3, 4]));
console.log(cartesianProduct([1, 2], [3, 4, 5]));

// Big-O O(mn)
