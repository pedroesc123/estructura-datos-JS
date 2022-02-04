class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value) {
        if(this.root === null) {
            alert('Aun no hay elementos en el arbol.')     
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(currentNode.left) {
                        if(value === currentNode.left.value) {
                            return true;
                        }
                        currentNode = currentNode.left;
                    } else {
                        return false;
                    }
                } else if (value > currentNode.value) {
                    if(currentNode.right) {
                        if(value === currentNode.right.value) {
                            return true;
                        }
                        currentNode = currentNode.right;
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();