

function deepClone(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}


const original = {
  name: "Amit",
  address: {
    city: "Mumbai",
    coordinates: {
      lat: 19.076,
      long: 72.8777,
    },
  },
};

const clone = deepClone(original);
clone.address.city = "Delhi";
console.log(original.address.city); // Mumbai ✅
