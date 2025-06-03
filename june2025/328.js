
// 328. Odd Even Linked List

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head?.next == null || head == null ){
        return head; 
    }

   let odd = new ListNode() ;
   let oddCopy =  odd ;
   let even = new ListNode() ;
   let evenCopy = even ;

    let temp = head ; 
    let prevOdd = null ;
    let prevEven = null ; 
    let count = 1 ;


    while(temp!=null)
    {
        if(count % 2 != 0 ) {
            console.log("odd val " ,temp.val);
            odd.val = temp.val ;
            odd.next = new ListNode() ;
            prevOdd = odd 
            odd = odd.next ;
            count++ ;

        }else{
            even.val =  temp.val ;
            even.next = new ListNode() ; 
            prevEven = even
            even = even.next ;
            count++ ;

        }
        temp = temp.next  ;
    }
    if(prevEven?.next){
    prevEven.next = null ; 
    }
    if( prevOdd?.next ){
    prevOdd.next = evenCopy ;
    }
    // console.log( "even" , evenCopy) ;
    // console.log("odd" , oddCopy)

    return oddCopy ;
    
};