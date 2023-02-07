class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    clearList() {
        this.head = null;
        this.size = 0;
      }
  
    // Insert first node
    insertStart(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    // Insert last node
    insertEnd(data) {
      let node = new Node(data);
      let current;
  
      // If empty, make head
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    // Insert at index
    insertPosition(data, index) {

      if (index > 0 && index > this.size) {
        return console.log('slot not available!');
      }
  
      // If first index
      if (index === 0) {
        this.insertStart(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      node.next = current;
      previous.next = node;
  

    }
  
    // Get at index
    printLinkedList() {
      let current = this.head;
  
      while (current) {
          console.log(current.data,current.next);
          current-current.next;
        }
      }
    }
  
  
  const nodelist = new LinkedList();
  nodeList.insertStart(200);
  nodeList.insertStart(400);
  nodeList.insertEnd(100);
  nodeList.insertPosition(300,1);
  nodeList.insertLinkedList(150, 3);
  //nodeList.clearList();
  nodeList.printListData();