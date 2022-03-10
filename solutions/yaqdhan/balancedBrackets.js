function balancedBrackets(anything) {
  const openings = ["{", "[", "("];
  const closings = ["}", "]", ")"];
  const expected = [];

  for (const letter of anything.split("")) {
    if (openings.includes(letter)) {
      expected.push(closings[openings.indexOf(letter)]);
    } else if (closings.includes(letter)) {
      if (expected.pop() !== letter) {
        return false;
      }
    } else {
      return false;
    }
  }

  return !expected.length;
}

// dont change the code below
exports.balancedBrackets = balancedBrackets;
