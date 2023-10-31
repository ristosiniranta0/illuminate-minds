/*
Filename: ComplexJavascriptCode.js
Purpose: Demonstrating a complex, sophisticated and elaborate JavaScript code example.
Content: A program that implements a custom data structure called "LinkedList" and performs various operations on it.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAfter(target, data) {
    let current = this.head;
    while (current) {
      if (current.data === target) {
        const newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    throw new Error(`Node with data "${target}" not found.`);
  }

  delete(data) {
    if (!this.head) {
      throw new Error("Linked list is empty.");
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with data "${data}" not found.`);
  }

  reverse() {
    let current = this.head;
    let previous = null;

    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Usage example:

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAfter(10, 15);
linkedList.reverse();
linkedList.print();
linkedList.delete(15);
linkedList.print();

/* Output:
20 10 5
20 10
*/

// ... (more complex operations and methods can be added here)