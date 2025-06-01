// // 225. Implement Stack using Queues
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.



const myStack = function(){
    this.queue1 =  [] ;
    this.queue2 = [] ;
}

myStack.prototype.push = function (x) {
    this.queue1.push(x) ;

    while(this.queue2.length > 0)
    {
        this.queue1.push(this.queue2.shift()) ;
    }

    [this.queue1, this.queue2] = [this.queue2, this.queue1]; 
}

myStack.prototype.pop = function () {
    return  this.queue2.shift() ;
};


myStack.prototype.isEmpty = function () {
    return this.queue2.length === 0  ;
};

myStack.prototype.peek = function () {
    return this.queue2[0] ;
};


const myStack1 = new myStack() ;
myStack1.push(1) ;
myStack1.push(2);
myStack1.push(3);
myStack1.push(4);
console.log(myStack1.peek() );
console.log(myStack1.pop());
console.log(myStack1.peek());
console.log(myStack1.isEmpty());

