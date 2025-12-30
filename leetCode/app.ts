// Valid Parentheses

const input = "[{}]()";
const correct = "[ ]( )";

function isValid(s: string) {
  const left: string[] = [];
  const legend: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const char of s) {
    if (char in legend) {
      console.log(char);
      left.push(char);
    } else {
      const last = left.pop();
      if (!last || legend[last] !== char) {
        return false;
      }
    }
  }
  return !left.length;
  
}

console.log(isValid(input));



