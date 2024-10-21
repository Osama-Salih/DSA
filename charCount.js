function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaCharacter(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

function isAlphaCharacter(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(charCount('osama SAlih 123!')); // {'o': 1, 's': 2, 'a': 3, 'm': 1, 'l': 1, 'i': 1, 'h': 1, 1: 1, 2: 1, 3: 1}

// Big O(n)
