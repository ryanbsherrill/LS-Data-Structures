class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // should have the methods: addToTail,

  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    // should keep the same head after adding nodes
    } else {
      let thisNode = this.head;
      while (thisNode.next) {
        thisNode = thisNode.next;
      }
      thisNode.next = node;
    }
    // replaces the tail with a new value that is passed in
    // should update the tail value when a new node is added
    this.tail = node;
  }
  // ... removeHead,
  removeHead() {
    // should not contain removed values
    const offWithHisHead = this.head.value;
    // should remove head when removeHead is invoked
    this.head = this.head.next;
    // should return the head that is removed when removeHead is invoked
    return offWithHisHead;
  }
  // ... and contains
  contains(value) {
    let now = this.head;
    // search through the linked list
    while (now.next) {
      // return true if a matching value is found
      if (now.value === value) return true;
      now = now.next;
    }
    // false otherwise
    return false;
  }
}

module.exports = LinkedList;
