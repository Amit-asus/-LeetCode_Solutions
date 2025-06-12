
const arr = [1,2,3,4,5] ;

function checkSorted (arr){
   for(let i = 1 ; i < arr.length ; i++){
         if(arr[i-1] <= arr[i]){
         }else{
            return  false ;
         }
   }
   return true ;
}

const  result =  checkSorted(arr) ;
console.log(result);