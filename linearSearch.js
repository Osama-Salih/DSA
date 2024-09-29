const linearSearch = (n, t) => n.indexOf(t);

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 5, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1

// Big O(n) leaner
