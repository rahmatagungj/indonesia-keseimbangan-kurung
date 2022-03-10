function balancedBrackets(originalString) {
    const states = []
    originalString.split("").forEach((val, i) => val.match(/[(]|[{]|[\[]/g)? states.push(true) : val == originalString[i - 1] && originalString.substring(0, i - 2).split("").filter(s => s == val).length % 2 == 0 ? states.push(true) : states.splice(states.indexOf(true), 1))
    return originalString.length % 2 != 0 ? false : !(!!states.length)
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
