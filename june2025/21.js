// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.



var mergeTwoLists = function (list1, list2) {
  let newList = new ListNode();
  const result = newList;
  while (list1 != null && list2 != null) {
    console.log("comp", list1.val, list2.val);
    if (list1.val < list2.val) {
      newList.next = new ListNode(list1.val);
      list1 = list1.next;
      newList = newList.next;
    } else {
      newList.next = new ListNode(list2.val);
      list2 = list2.next;
      newList = newList.next;
    }
  }

  while (list1 != null) {
    newList.next = new ListNode(list1.val);
    list1 = list1.next;
    newList = newList.next;
  }

  while (list2 != null) {
    newList.next = new ListNode(list2.val);
    list2 = list2.next;
    newList = newList.next;
  }
  return result.next;
};
