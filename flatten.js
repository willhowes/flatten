const flatten = (...inputArguments) => {
  returningArray = [];
  inputArguments.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(subItem => {
        returningArray.push(subItem);
      });
    } else {
      returningArray.push(item);
    }
  });
  return returningArray;
};

module.exports = flatten;
