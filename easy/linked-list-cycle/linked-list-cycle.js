
var hasCycle = function(head) {
  if (head === null) return false;
  let cursor = head;

  while (cursor.next !== null) {
      if (cursor.visited === undefined) {
          cursor.visited = true;
      } else {
          return true;
      }

      cursor = cursor.next;
  }
  return false;
};

/** Version 2, fast vs slow */
var hasCycle2 = function(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};