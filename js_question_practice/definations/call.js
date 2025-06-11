const obj = { name : 'amit'}

function print(par){
    console.log(this.name  ) ;
    console.log(par) ;
    
}



print.call(obj , "hello" );


// functionName.call(thisValue, arg1, arg2, ...)

/*
✅ Simple Definition of .call() in JavaScript:
.call() is used to call a function and manually set what this refers to inside that function.
*/


/*
✅ Simple Definition of .apply() in JavaScript:
.apply() is used to call a function and set what this refers to, just like .call(),
but it takes arguments as an array.
*/


/*
.bind(obj) → returns a new function with this = obj
*/