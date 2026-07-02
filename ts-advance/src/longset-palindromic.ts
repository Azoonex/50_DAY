function longestPalindrome(s: string) {

  if (isPalindrome(s)) {
    return s;
  }
  let current = "";
  for (let x = 0; x < s.length; x++) {
    console.log("x = ", x);
    for (let j = x + 1; j <= s.length; j++) {
      const ss = s.substring(x, j);

      if (isPalindrome(ss)) {
        if (ss.length > current.length) {
          current = ss;
        }
      }
    }
  }
  return current;
}

function isPalindrome(s: string) {
  return s === s.split("").reverse().join("");
}

console.log(longestPalindrome("abb"));

function longestPalindromeBast(s: string): string {
  let longSet = "";

  for (let i = 0; i < s.length; i++) {
    checkLeftAndRight(i, i);
    checkLeftAndRight(i, i + 1);
  }

  function checkLeftAndRight(left: number, right: number) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      if (right - left + 1 > longSet.length) {
        longSet = s.slice(left, right + 1);
      }
      console.log("left", left);
      console.log("right", right);
      left--;
      right++;
    }
  }
  return longSet;
}


console.log(longestPalindromeBast("bsdflkj"))