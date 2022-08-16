/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 * 
 * USING 0 index
 * - parent is located at: Math.floor((i - 1) / 2);
 * - left child is located at: (i * 2) + 1
 * - right child is located at: (i * 2) + 2
 */
class MinHeap {
    constructor() {
    /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
    this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        if(this.heap.length < 2){
            return null;
        }
        return this.heap[1];
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        this.heap.push(num);
        var i = this.heap.length - 1;
        while(num < this.heap[Math.floor(i/2)]){
            this.heap[i] = this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = num;
            i = Math.floor(i/2);
        }
        return this.heap;
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
        return;
    }

    spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
// ======================================================
  // DAY 2
  // ======================================================

/**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and set idx1 equal to the popped value.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
extract() {
    if(this.heap.length < 2){
        return null;
    }
    if(this.heap.length < 3){
        var temp = this.heap[1];
        this.heap.pop();
        console.log(this.heap);
        return temp;
    }
    if(this.heap.length < 4){
        var temp = this.heap[1];
        this.heap[1] = this.heap[i*2];
        this.heap.pop();
        return temp;
    }
    var temp = this.heap[1];
    var last = this.heap[this.heap.length-1];
    this.heap.pop();
    this.heap[1] = last;
    console.log(this.heap);
    var i = 1;
    //creating left and right child variables here would help with confusion instead of using a formula everytime we want left or right child
    while(this.heap[i] > this.heap[i*2] || this.heap[i] > this.heap[(i*2)+1]){
        if(this.heap[i*2] < this.heap[(i*2)+1]){
        this.heap[1] = this.heap[i*2];
        this.heap[i*2] = last;
        i = i*2;
        }
        else{
            this.heap[1] = this.heap[(i*2)+1];
            this.heap[(i*2)+1] = last;
            i = (i*2)+1;
        }
    }
    console.log(this.heap);
    return temp;
}

/**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
    return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
}
}
const newMinHeap = new MinHeap;
newMinHeap.insert(5);
newMinHeap.insert(8);
newMinHeap.insert(12);
newMinHeap.insert(17);
newMinHeap.insert(15);
newMinHeap.insert(13);
console.log(newMinHeap.extract());