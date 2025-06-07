//compose and pipe

function compose(...params) {
  return function (init) {
    let result = init;
    params.reverse().forEach(function (item, i, arr) {
      result = item(result);
    });
    return result;
  };
}

function pipe(...params) {
  return function (init) {
    let result = init;
    params.forEach(function (item, i, arr) {
      result = item(result);
    });
    return result;
  };
}


const addFive = (num) => {
  return num + 5;
};
const subtractTwo = (num) => {
  return num - 2;
};
const multiplyFour = (num) => {
  return num * 4;
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
