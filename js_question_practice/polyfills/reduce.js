// arr.reduce((acc,ele, index ,arr)=> {} ,acc)
// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

Array.prototype.myReduce = function(cb ,initialValue){
    let accumulator = initialValue ;
    for(let i = 0 ; i < this.length ; i++){
       accumulator = accumulator ?cb(accumulator, this[i], i, this) :  this[i] ;
    }
    return accumulator; 
}

const arr = [1,2,3,4,5];
const result = arr.myReduce((acc, ele) => {
  return acc + ele;
}, 0); ;
console.log(result);