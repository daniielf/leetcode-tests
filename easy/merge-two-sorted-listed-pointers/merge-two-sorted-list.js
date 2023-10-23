var mergeTwoLists = function(list1, list2) {
  if (!list1 && !list2) { return null}
  let pointer;
  let head;

  let pointer1 = list1;
  let pointer2 = list2;
  while (pointer1 || pointer2) {

      if (!pointer1) {
          aux = pointer2;
          pointer2 = pointer2.next;
      } else if (!pointer2) {
          aux = pointer1;
          pointer1 = pointer1.next;
      } else {
          if (pointer1.val > pointer2.val) {
              aux = pointer2;
              pointer2 = pointer2.next;
          } else {
              aux = pointer1;
              pointer1 = pointer1.next;
          }
      }

      if (head) {
          pointer.next = aux;
          pointer = aux;
      } else {
          head = aux;
          pointer = head;
      }
  }

  return head;
};