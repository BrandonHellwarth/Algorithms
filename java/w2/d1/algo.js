/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
    this.data = data;
    /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
    this.left = null;
      /** @type {BSTNode|null} */
    this.right = null;
    }
}

/**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are > their parent's data.
   */
class BinarySearchTree {
    constructor() {
    /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
    this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if(this.isEmpty()){
            return null;
        }
        while(current.left != null){
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if(this.isEmpty()){
            return null;
        }
        if(current.left != null){
            return this.minRecursive(current.left);
        }
        else{
            return current.data;
        }
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if(this.isEmpty()){
            return null;
        }
        while(current.right != null){
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if(this.isEmpty()){
            return null;
        }
        if(current.right != null){
            return this.maxRecursive(current.right);
        }
        else{
            return current.data;
        }
    }

    // ****************************************************************************
  // DAY 2
  // ****************************************************************************

/**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
contains(searchVal) {
    var runner = this.root;
    while(runner != null){
        if(runner.data > searchVal){
            console.log("Test1");
            runner = runner.left;
        }
        else if(runner.data < searchVal){
            console.log("Test2");
            runner = runner.right;
        }
        else if(runner.data == searchVal){
            console.log("Test3");
            return true;
        }
    }
    return false;
}

/**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
containsRecursive(searchVal, current = this.root) {
    if(current == null){
        return false;
    }
    if(current.data > searchVal){
        console.log("Test1");
        return this.containsRecursive(searchVal, current = current.left);
    }
    else if(current.data < searchVal){
        console.log("Test2");
        return this.containsRecursive(searchVal, current = current.right);
    }
    else if(current.data == searchVal){
        console.log("Test3");
        return true;
    }
}

/**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
range(startNode = this.root) {
    if(this.isEmpty()){
        return null;
    }
    if(startNode.right == null && startNode.left == null){
        return null;
    }
    if(startNode.left == null){
        return startNode.right.data - startNode.data; 
    }
    if(startNode.right == null){
        return startNode.data - startNode.left.data;
    }
    var runnerLeft = startNode.left;
    var runnerRight = startNode.right;
    while(runnerLeft.left != null){
        runnerLeft = runnerLeft.left;
    }
    while(runnerRight.right != null){
        runnerRight = runnerRight.right;
    }
    var max = runnerRight.data;
    var min = runnerLeft.data;
    return max - min;
}

// ****************************************************************************
  // DAY 3
  // ****************************************************************************

/**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
insert(newVal) {
    if(this.isEmpty()){
        return null;
    }
    var runner = this.root;
    var forwardRunner = runner
    while(runner != null){
        if(runner.data == newVal){
            console.log("Tree already contains value.");
            return null;
        }
        if(runner.data > newVal){
            if(runner.left == null){
                runner.left = new BSTNode(newVal);
                return runner;
            }
            runner = runner.left;
        }
        if(runner.data < newVal){
            if(runner.right == null){
                runner.right = new BSTNode(newVal);
                return runner;
            }
            runner = runner.right;
        }
    }
}

/**
    * Inserts a new node with the given newVal in the right place to preserver
    * the order of this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} newVal The data to be added to a new node.
    * @param {Node} curr The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {BinarySearchTree} This tree.
    */
insertRecursive(newVal, curr = this.root) {
    if(this.isEmpty()){
        return null;
    }
    if(curr.data == newVal){
        console.log("Tree already contains value.");
        return null;
    }
    if(curr.data > newVal){
        if(curr.left == null){
            curr.left = new BSTNode(newVal);
            return curr;
        }
        return this.insertRecursive(newVal, curr.left);
    }
    if(curr.data < newVal){
        if(curr.right == null){
            curr.right = new BSTNode(newVal);
            return curr;
        }
        return this.insertRecursive(newVal, curr.right);
    }
}
}
//     // Logs this tree horizontally with the root on the left.
//     print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
//     if (!node) {
//         return;
//     }

//     spaceCnt += spaceIncr;
//     this.print(node.right, spaceCnt);

//     console.log(
//         " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
//         `${node.data}`
//     );

//     this.print(node.left, spaceCnt);
// }

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
/* twoLevelTree
         root
          10
        /   \
       5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
/* threeLevelTree 
    root
     10
    /   \
   5     15
  / \    / \
 2   6  13  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);
/* fullTree
                    root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

const newTree = new BinarySearchTree();
newTree.root = new BSTNode(10);
newTree.root.right = new BSTNode(13);
console.log(threeLevelTree.insertRecursive(14));