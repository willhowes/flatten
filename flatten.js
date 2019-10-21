const flatten = (...inputArguments) => {
  returningArray = [];
  inputArguments.forEach(item => {
    returningArray.push(item);
  });
  return returningArray;
};

module.exports = flatten;
