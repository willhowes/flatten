const flatten = require("./flatten");

describe("#flatten", () => {
  it("turns one argument into an array", () => {
    expect(flatten(1)).toEqual([1]);
  });
});
