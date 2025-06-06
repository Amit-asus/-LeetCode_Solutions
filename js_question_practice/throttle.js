//implement won  throttle function 

function throttle(fun , delay ){
    let lastCall = 0  ;
    
    return function(){
        let now = new Date().getTime() ;
        if(now-lastCall >= delay)
        {
            lastCall = now ; 
            fun()
        }
    }
    
}


function logger () {
    console.log("i am logger function ") ;
}
const  throttledLog = throttle(logger,500) ;