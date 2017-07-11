class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  size() {
    return this.size;
  }
  enqueue(...args) {
    this.queue.push(...args);
    ++this.size;
  }
  dequeue() {
    if (this.size === 0) return this.size;
    --this.size;
    return this.queue.shift();
  }
}

module.exports = Queue;
