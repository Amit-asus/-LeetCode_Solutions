//leet code 206  reverse the linked list 
var reverseList = function (head) {
  let temp = head;
  let prev = null;

  while (temp != null) {
    //     let r = temp.next
    temp.next = prev; //c
    prev = temp; //c
    temp = temp.next;
  }

  console.log(temp);
};
