function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
   
function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

var list = new DoblyList();

var newNode = new Node(data);

LinkedList.prototype.print = function() {
   var currentNode = this.head;

   while (currentNode.next!=null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
};

LinkedList.prototype.addToTheBeginning = function(newNode) {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
};

LinkedList.prototype.addToTheEnd = function(newNode) {
    if(this.head===null) {
        this.head = newNode;
        this.length++;
    }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
}

LinkedList.prototype.deleteItem = function (nodeToDelete) {
    var currentNode = this.head;

    if (nodeToDelete = this.head) {
        this.head = nodeToDelete.next;
        this.head.previous = null;
        this.length--;
        return;
    };

    if (nodeToDelete = this.tail) {
        this.tail = nodeToDelete.previous;
        this.tail.next = null;
        this.length--;
        return;
    };

    while (currentNode != null) {
        if (currentNode.next == nodeToDelete) {
            var newNeighbour = nodeToDelete.next
            newNeighbour.previous = currentNode;
            currentNode.next = newNeighbour;
            this.length--;
            return;
        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.removeItemByIndex = function(index) {
    var currentNode = this.head;
    var i = 1;
    var newNeighbour = currentNode.next.next;

    if (index === 0) {
        this.head = null;
        this.length--;
        return;
    }

    if (index === this.length - 1) {
        newTail = this.tail.previous
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return;
    }

    while (i < index) {
        currentNode = currentNode.next;
    }

    newNeighbour.previous = currentNode;
    currentNode.next = newNeighbour;

    this.length--;
}