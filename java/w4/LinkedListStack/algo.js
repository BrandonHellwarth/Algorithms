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
    constructor() {
    this.items = [];
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * TODO: implement this method
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        return this.items.pop();
    }

    /**
     * TODO: implement this method
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * TODO: implement this method
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if(this.items.length == 0){
            return true;
        }
        return false;
    }

    /**
     * TODO: implement this method
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}

// const newStack = new Stack;
// console.log(newStack.push(5));
// console.log(newStack.pop());
// console.log(newStack.push(7));
// console.log(newStack.push(9));
// console.log(newStack.peek());

class StackNode {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class LinkedListStack {
    constructor() {
    this.head = null;
    }

    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        const newNode = new StackNode;
        newNode.data = item; //.next of newNode is null
        var currHead = this.head; //.next of currHead contains the rest of the list
        this.head = newNode; //.next is still null
        newNode.next = currHead; //now .next is the old list with all old values
        return this.size();
    }

    /**
      * TODO: implement this method
      * Removes the top / last item from this stack.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {any} The removed item or undefined if this stack was empty.
      */
    pop() {
        var nextNode = this.head.next;
        var removedVal = this.head.data;
        this.head = nextNode;
        return removedVal;
    }

    /**
      * TODO: implement this method
      * Retrieves the top / last item from this stack without removing it.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {any} The top / last item of this stack.
      */
    peek() {
        return this.head.data;
    }

    /**
      * TODO: implement this method
      * Returns whether or not this stack is empty.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {boolean}
      */
    isEmpty() {
        if(this.size() == 0){
            return true;
        }
        return false;
    }

    /**
      * TODO: implement this method
      * Returns the size of this stack.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {number} The length.
      */
    size() {
        var size = 0;
        var runner = this.head;
        while(runner != null){
            size++;
            runner = runner.next;
        }
        return size;
    }
}

const newListStack = new LinkedListStack;
console.log(newListStack.push(5));
console.log(newListStack.push(6));
console.log(newListStack.push(7));
console.log(newListStack.push(8));
console.log(newListStack.pop());
console.log(newListStack.peek());
console.log(newListStack.isEmpty());
console.log(newListStack.size());
