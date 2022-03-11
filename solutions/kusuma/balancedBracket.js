function balancedBrackets(anything) {
  const array = anything.split("");
  const openBracket = "({[";
  const closeBracket = ")}]";
  const stack = [];

  for (const bracket of array) {
    if (openBracket.includes(bracket)) {
      const index = openBracket.indexOf(bracket);
      stack.push(closeBracket.charAt(index));
    } else if (bracket !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
}

// dont change the code below
exports.balancedBrackets = balancedBrackets;
