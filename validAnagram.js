function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounterLetter = {};
  for (let char of str1) {
    frequencyCounterLetter[char] = (frequencyCounterLetter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequencyCounterLetter[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
console.log(validAnagram('text', 'txet')); // true

// Big O(n)
