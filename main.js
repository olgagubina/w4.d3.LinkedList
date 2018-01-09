function LinkedList() {
  this.length = 0;
  this.head = null;
};

function Node(data) {
    this.data = data;
    this.next = null;
};

var list = new LinkedList();

var newNode = new Node(data);

LinkedList.prototype.print = function() {
   var currentNode = this.head;

   while (currentNode.next!=null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
};

LinkedList.prototype.addToTheBeginning = function() {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

LinkedList.prototype.addToTheEnd = function() {
    if(this.head===null) {
        this.head = newNode;
        this.length++;
    }
    
    var currentNode = this.head;
    do {
        currentNode = currentNode.next;
    }while(currentNode.next)
    
    currentNode.next = newNode;
    this.length++;
}

LinkedList.prototype.deleteItem = function (nodeToDelete) {
    var currentNode = this.head;

    if (nodeToDelete = this.head) {
        this.head = nodeToDelete.next;
        this.length--;
        return;
    };

    while (currentNode != null) {
        if (currentNode.next == nodeToDelete) {
            currentNode.next = nodeToDelete.next;
            this.length--;
            return;
        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.removeItemByIndex = function(index) {
    var currentNode = this.head;
    var i = 1;

    if (index == 0) {
        this.head = null;
        this.length--;
        return;
    }

    while (i < index) {
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    this.length--;
}