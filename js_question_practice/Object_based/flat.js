let user = {
  name: "amit",
  lastName: "kushwaha",
  phone: "8962374312",
};

// console.log(Object.keys(user));
// console.log(Object.values(user)) ;
const obj = { a: { b: { c: 1 } } };

function flat(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    // console.log("obj" , obj[key]) ;
    parentKey = parentKey + "." + key;
    console.log("p", parentKey);
    if (typeof obj[key] === "object") {
      // console.log(obj[key]) ;
      flat(obj[key], parentKey, result);
    } else {
      result[parentKey] = obj[key];
    }
  }
  return result;
}

const ans = flat(obj);
console.log(ans);
