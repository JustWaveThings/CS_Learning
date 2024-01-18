export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getHead() {
    return this.head.value;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  tail() {
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  length() {
    let length = 0;
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current.next !== null) {
      length++;
      current = current.next;
    }
    return length;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (count !== index) {
      count++;
      current = current.next;
    }
    return current;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    if (previous === null) {
      this.head = null;
    } else {
      previous.next = null;
    }
    return current.data;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  findValueObj(key) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.next;
    }
    return null;
  }

  containsObjKey(key) {
    let current = this.head;
    while (current !== null) {
      if (current.value.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `(${current.value.key} : ${current.value.value} points) -> `;
      current = current.next;
    }
    string += 'null';
    return string;
  }

  nodeValues() {
    let current = this.head;
    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  insertAt(value, index) {
    let node = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count !== index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = node;
    node.next = current;
  }

  removeAt(index) {
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count !== index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  removeAtObj(key) {
    if (this.size() === 1) return this.pop();
    let current = this.head;
    let previous = null;

    while (current.value.key !== key) {
      console.log('hit while statement');
      previous = current;
      current = current.next;
    }
    if (current === this.head) {
      console.log('if statement');
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
  }
}

export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append('dasfdadsf');
/* console.log(list.pop()); // undefined
console.log(list.pop()); // undefined
console.log(list.pop()); // undefined
console.log(list.pop()); // Output: null
 */

list.removeAt(1);
//console.log(list.toString()); // (1) -> (3) -> null

list.insertAt('y', 1);
//console.log(list.toString()); // (1) -> (y) -> (3) -> null

//console.log(list.find('y')); //  1

//console.log(list.contains('y')); // true

// console.log(list.tail()); //  Node { value: 3, next: null }

// console.log(list.at(1)); //  Node { value: 'y', next: Node { value: 3, next: null } }

// console.log(list.size()); // 3

// console.log(list.getHead()); //
// console.log(list.length());
