class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    } else {
      let thisNode = this.head;
      while (thisNode.next) {
        thisNode = thisNode.next;
      }
      thisNode.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    const offWithHisHead = this.head.value;
    this.head = this.head.next;
    return offWithHisHead;
  }
  contains(value) {
    let now = this.head;
    while (now.next) {
      if (now.value === value) return true;
      now = now.next;
    }
    return false;
  }
}

module.exports = LinkedList;
