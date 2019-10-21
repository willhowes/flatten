const flatten = (...inputArguments) => {
  let i = 0;

  while (i < inputArguments.length) {
    if (Array.isArray(inputArguments[i])) {
      inputArguments.splice(i, 1, ...inputArguments[i]);
    } else {
      i++;
    }
  }
  return inputArguments;
};

module.exports = flatten;
