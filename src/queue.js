const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.massiv = null;
  }
  getUnderlyingList() {
    return this.massiv;
  }

  enqueue(value) {
    const penqueue = (point, value) => {
      if (!point) {
          return new ListNode(value)
      }
      point.next = penqueue(point.next, value)
      return point;
    }
    this.massiv = penqueue(this.massiv, value)
  }

  dequeue() {
    const res = this.massiv;
    console.log(res);
    this.massiv = res.next;
    console.log(res.value);
    return res.value;
  }
}

module.exports = {
  Queue
};

const queue = new Queue();
 queue.enqueue(1); // adds the element to the queue
 queue.enqueue(3); // adds the element to the queue
 queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 queue.getUnderlyingList() // returns { value: 3, next: null }