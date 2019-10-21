const flatten = require("./flatten");

describe("#flatten", () => {
  it("turns one argument into an array", () => {
    expect(flatten(1)).toEqual([1]);
  });
  it("turns two arguments into an array", () => {
    expect(flatten(1, 2)).toEqual([1, 2]);
  });
  it("takes an array as an argument, with other arguments and returns one array", () => {
    expect(flatten(1, [2, 3])).toEqual([1, 2, 3]);
  });
  it("correctly handles a sub array within an array argument", () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });
});
