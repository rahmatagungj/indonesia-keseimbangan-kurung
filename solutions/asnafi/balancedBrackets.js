function balancedBrackets(anything) {
  const stack = []
  for (const char of anything) {
    if (char == "(") stack.push(")")
    else if (char == "{") stack.push("}")
    else if (char == "[") stack.push("]")
    else if (char !== stack.pop()) return false
  }

  return !stack.length
}

// dont change the code below
exports.balancedBrackets = balancedBrackets;