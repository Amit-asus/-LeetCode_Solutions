Array.prototype.myMap = function (cb) {
  const result = [];
  console.log("this", this);
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.myMap((e) => e * 2);
console.log(result);
