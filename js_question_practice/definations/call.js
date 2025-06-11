const obj = { name : 'amit'}

function print(par){
    console.log(this.name  ) ;
    console.log(par) ;
    
}



print.call(obj , "hello" );


functionName.call(thisValue, arg1, arg2, ...)


// ✅ Simple Definition of .call() in JavaScript:
// .call() is used to call a function and manually set what this refers to inside that function.
