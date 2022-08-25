/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor(items = []) {
    this.items = items;
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
    this.items.push(item);
    return this.size();
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
    return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
    return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
    return this.items.length === 0;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
    return this.items.length;
    }

    /**
     * Logs the items as a space separated string.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
    this.items = [];
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * TODO: implement this method
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift(); //shift does reassign indexes
    }

    /**
     * TODO: implement this method
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * TODO: implement this method
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if(this.size() == 0){
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * TODO: implement this method
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
    
/**
   * TODO: implement this method
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
compareQueues(q2) {
    if (this.size() !== q2.size()) {
        return false;
    }
    let count = 0;
    let isEqual = true;
    const len = this.size();

    while (count < len) {
        const dequeued1 = this.dequeue();
        const dequeued2 = q2.dequeue();

        if (dequeued1 !== dequeued2) {
        isEqual = false;
        }

        this.enqueue(dequeued1);
        q2.enqueue(dequeued2);
        count++;
    }
    return isEqual;
}

/**
  * TODO: implement this method
  * Determines if the queue is a palindrome (same items forward and backwards).
  * Avoid indexing queue items directly via bracket notation, instead use the
  * queue methods for practice.
  * Use only 1 stack as additional storage, no other arrays or objects.
  * The queue should be returned to its original order when done.
  * - Time: O(?).
  * - Space: O(?).
  * @returns {boolean}
  */
isPalindrome() { 
    let isPalin = true;
    const stack = new Stack(),
    len = this.size();
    for (let i = 0; i < len; i++) {
        let dequeued = this.dequeue();
        stack.push(dequeued);
        // add it back so the queue items and order is restored at the end
        this.enqueue(dequeued);
    }
    for (let i = 0; i < len; i++) {
        let dequeued = this.dequeue();
        let popped = stack.pop();
        if (popped !== dequeued) {
            isPalin = false;
        }
        // add it back so the queue items and order is restored at the end
        this.enqueue(dequeued);
    }
    return isPalin;
}
/**
   * TODO: Implement this method
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
isSumOfHalvesEqual() {
    var length = this.size();
    var leftSum = 0;
    var rightSum = 0;
    console.log(length);
    for(var i=0;i<length;i++){
        if(i < Math.floor(length/2)){
            leftSum = leftSum + this.front();
        }
        if(length % 2 == 0){
            if(i >= length/2){
                rightSum = rightSum + this.front();
            }
        }
        else{
            if(i > Math.floor(length/2)){
                rightSum = rightSum + this.front();
            }
        }
        this.enqueue(this.dequeue());
    }
    if(leftSum == rightSum){
        return true;
    }
    return false;
}
}

const newQueue = new Queue;
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
console.log(newQueue.isSumOfHalvesEqual());
// const newQueue1 = new Queue;
// newQueue1.enqueue("bill");
// newQueue1.enqueue("bob");
// newQueue1.enqueue("ted");
// // newQueue1.enqueue("joe");
// newQueue1.enqueue("ted");
// newQueue1.enqueue("bob");
// newQueue1.enqueue("bill");
// console.log(newQueue1);
// console.log(newQueue1.isPalindrome());
// const newQueue2 = new Queue;
// newQueue2.enqueue("bill");
// newQueue2.enqueue("ben");
// newQueue2.enqueue("bob");
// newQueue2.enqueue("borg");
// console.log(newQueue2);
// console.log(newQueue1.compareQueues(newQueue2));


/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

/**
   * TODO: implement this method
   * Adds a new item to the back of the queue.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} item To be added.
   * @returns {number} The new number of items in the queue.
   */
enqueue(item) {}

/**
   * TODO: implement this method
   * Removes the next item in the line / queue.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The removed item.
   */
dequeue() {}
}


class QueueNode {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
      // In order to maintain an O(1) enqueue time complexity like .push with an array
      // We add a tail to our linked list so we can go directly to the last node
    this.head = null;
    this.tail = null;
    this.size = 0;
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        const newNode = new QueueNode;
        newNode.data = item;
        if(this.isEmpty()){
            this.head = newNode;
            return this.size();
        }
        if(this.size() == 1){
            this.tail = newNode;
            return this.size();
        }
        this.tail.next = newNode;
        return this.size();
    }

    /**
      * TODO: implement this method
      * Notice how this Time Complexity of this algo is O(1) not O(n) like the array version
      * Removes and returns the first item of this queue.
      * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if(!this.isEmpty()){
            var dequeued = this.head;
            this.head = this.head.next;
            return dequeued;
        }
    }

    /**
      * TODO: implement this method
      * Retrieves the first item without removing it.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {any} The first item or undefined if empty.
      */
    front() {
        return this.head.data;
    }

    /**
      * TODO: implement this method
      * Returns whether or not this queue is empty.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {boolean}
      */
    isEmpty() {
        return this.size() = 0;
    }

    /**
      * TODO: implement this method
      * Retrieves the size of this queue.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {number} The length.
      */
    size() { //.size is not defined?
        var runner = this.head;
        var size = 0;
        while(runner != null){
            size++;
            runner = runner.next;
        }
        return size;
    }
}

// const newListQueue = new LinkedListQueue;
// newListQueue.enqueue("bill");
// console.log(newListQueue);