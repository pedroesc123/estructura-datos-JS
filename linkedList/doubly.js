class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;

        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }
    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        newNode.prev = firstPointer;
        holdingPointer.prev = newNode;

        this.length++;
        return this;
    }
    delete (index) {
        const firstPointer = this.getTheIndex(index - 1);
        const eliminatedPointer = this.getTheIndex(index);
        const secondPointer = this.getTheIndex(index + 1);

        firstPointer.next = secondPointer;
        secondPointer.prev = firstPointer;

        this.length--;

        return eliminatedPointer;
    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !==index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1)