const { balancedBrackets } = require("../../balancedBrackets");

describe("Functional Test", () => {
  it("balancedBrackets should be defined", () => {
    expect(balancedBrackets).toBeDefined();
  })

  it("balancedBrackets should return true for '{}'", () => {
    expect(balancedBrackets("{}")).toBe(true);
  })

  it("balancedBrackets should be not throw any error", () => {
    expect(() => balancedBrackets("{}")).not().toThrowError();
  })

  it("balancedBrackets should have function type", () => {
    expect(typeof balancedBrackets).toBe("function");
  })

  it("balancedBrackets should return boolean type", () => {
    expect(typeof balancedBrackets("[{}]")).toBe("boolean");
  })
});

describe("Return Value Test", () => {
  it("Test Case #1", () => {
    expect(balancedBrackets("{}")).toBe(true);
  })

  it("Test Case #2", () => {
    expect(balancedBrackets("{}[]")).toBe(true);
  })

  it("Test Case #3", () => {
    expect(balancedBrackets("{}[]())")).toBe(false);
  })

  it("Test Case #4", () => {
    expect(balancedBrackets("{}[()()]()")).toBe(true);
  })

  it("Test Case #5", () => {
    expect(balancedBrackets("{}[()()]")).toBe(true);
  })

  it("Test Case #6", () => {
    expect(balancedBrackets("{}[()()]()")).toBe(true);
  })

  it("Test Case #7", () => {
    expect(balancedBrackets("{}[()()]()()(){}[{}]")).toBe(true);
  })

  it("Test Case #8", () => {
    expect(balancedBrackets("{}[()()]()({)(){}[{}]")).toBe(false);
  })

  it("Test Case #9", () => {
    expect(balancedBrackets("{}[()()]()(){}[{}][")).toBe(false);
  })

  it("Test Case #10", () => {
    expect(balancedBrackets("{}[()()]()(){}[{}]")).toBe(true);
  })
})

describe("More Test", () => {
  it("Test Case #1", () => {
    expect(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))")).toBe(false);
    expect(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))")).toBeFalsy();
  })

  it("Test Case #2", () => {
    expect(balancedBrackets("{}[()()]()(){}[{}]")).toBe(true);
    expect(balancedBrackets("{}[()()]()(){}[{}]")).toBeTruthy();
  })

  it("Test Case #3", () => {
    expect(balancedBrackets("()()[{()})]")).toBe(false);
    expect(balancedBrackets("()()[{()})]")).toBeFalsy();
  })
})

describe("Deep Test", () => {
  it("Test Case #1", () => {
    expect(balancedBrackets("()([])")).toStrictEqual(true);
    expect(balancedBrackets("()([])")).toBeTruthy();
    expect(typeof balancedBrackets("()([])")).toBe("boolean");
    expect(balancedBrackets("()([])")).not().toBeFalsy()
  })

  it("Test Case #2", () => {
    expect(balancedBrackets("((({})()))")).toStrictEqual(true);
    expect(balancedBrackets("((({})()))")).toBeTruthy();
    expect(typeof balancedBrackets("((({})()))")).toBe("boolean");
    expect(balancedBrackets("((({})()))")).not().toBeFalsy()
  })

  it("Test Case #3", () => {
    expect(balancedBrackets("(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())")).toStrictEqual(true);
    expect(balancedBrackets("(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())")).toBeTruthy();
    expect(typeof balancedBrackets("(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())")).toBe("boolean");
    expect(balancedBrackets("(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())")).not().toBeFalsy()
  })

  it("Test Case #4", () => {
    expect(balancedBrackets(")[]}")).toStrictEqual(false);
    expect(balancedBrackets(")[]}")).toBeFalsy();
    expect(typeof balancedBrackets(")[]}")).toBe("boolean");
    expect(balancedBrackets(")[]}")).not().toBeTruthy()
  })

  it("Test Case #5", () => {
    expect(balancedBrackets("[{a}]")).toStrictEqual(false);
    expect(balancedBrackets("[{a}]")).toBeFalsy();
    expect(typeof balancedBrackets("[{a}]")).toBe("boolean");
    expect(balancedBrackets("[{a}]")).not().toBeTruthy()
  })
})