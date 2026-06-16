function longestPalindrome(s: string) {
  //   const stringToArray = s.split("");
  //   let resultPalindrome = stringToArray.reduce(
  //     (acc, curr) => {
  //       console.log(acc[curr]);
  //       acc[curr] = (acc[curr] || 0) + 1;
  //       return acc;
  //     },
  //     {} as Record<string, number>,
  //   );
  //   let biggestChar: { char: string; size: number } = { char: "", size: 0 };
  //   for (const char in resultPalindrome) {
  //     if (resultPalindrome[char] > biggestChar.size) {
  //       biggestChar = { char, size: resultPalindrome[char] };
  //     }
  //   }
  //   const formatString = s.slice(
  //     s.indexOf(biggestChar.char),
  //     s.lastIndexOf(biggestChar.char) + 1,
  //   );
  //   return formatString;

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
