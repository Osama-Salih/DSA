function stringSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i] !== pattern[j]) {
        break;
      }
      count++;
      i++;
    }
  }
  return count;
}

console.log(stringSearch('lorie loled', 'lol'));
// Big O(n^2)
