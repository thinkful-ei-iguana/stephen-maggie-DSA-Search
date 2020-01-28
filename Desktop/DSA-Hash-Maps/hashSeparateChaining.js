class _Node {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  constructor(initialCapacity = 8) {
    this._length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._hashTable = [];
    for (let i = 0; i < oldSlots.length; i++)
      for (let slot = oldSlots[i]; slot; slot = slot.next) {
        if (!slot.deleted)
          //copy to a new array
          this.insert(slot.key, slot.value);
      }

  }
  insert(key, value) {
    const loadRatio = (this._length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
    console.log(this._hashTable[index]);
    if (this._hashTable[index] === undefined) {
      //this._hashTable[index] = new _Node(key, value, null);
      this._hashTable[index] = {};
      this._hashTable[index].next = new _Node(key, value, null);
      this._length++;
    }
    else {
      let node = this._hashTable[index];
      while (node.next !== null && node.key !== key) {
        node = node.next;
      }
      if (node.key === key) {
        node.value = value;
        this._length++;
      }
      else {
        node.next = new _Node(key, value, null);
        this._length++;
      }
    }
  }

  remove(key) {
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
    let previous = null;
    let current = this._hashTable[index];

    if (this._hashTable[index] !== undefined) {
      while (current.next !== null && current.key !== key) {
        previous = current;
        current = current.next;
      }
      if (current === null) {
        console.log('Item not found');
        return;
      }
      if (current.key === key) {
        previous.next = current.next;
        this._length--;
      }

    }

  }
  get(key) {
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
    if (this._hashTable[index] === null) {
      return -1;
    }
    else {
      let node = this._hashTable[index];
      while (node !== null && node.key !== key) {
        node = node.next;
      }
      if (node === null)
        return -1;
      else
        return node.value;
    }

  }
}
