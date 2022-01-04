class Stack {
  constructor(maximumCapaity) {
    //Total capacity of the stack
    this.maximumCapaity = maximumCapaity;
    //Array representing the stack
    this.stackArray = [];
    //index(position) of the top element of the stack
    this.topElement = -1;
  }
  //Accessor Methods:
  //Get the size of the stack
  size() {
    return this.topElement + 1;
  }
  //Check if stack is empty
  isEmpty() {
    return this.topElement < 0;
  }
  //Return the top element of the stack
  top() {
    if(this.isEmpty()) throw 'Stack is empty';
    return this.stackArray[this.topElement];
  }

  search() {
    //Implement search feature
  }

  //Operations
  //Add new item to the stack
  push(element) {
    if(this.size() === this.maximumCapaity) throw 'Stack is full';
    //Make newly added element the top element and update the index
    this.stackArray[++this.topElement] = element;
  }
  //Remove the top item of the stack
  pop() {
    // let element = new Object();
    if(this.isEmpty()) throw 'Stack is empty';
    let element = this.stackArray[this.topElement];
    //Make the top element empty again
    this.stackArray[this.topElement--] = null;
    return element;
  }
}

let stackOne = new Stack(50);

//Add an element to the stack
stackOne.push({name:"plate1"})
console.log(stackOne);
//Return the size of the stack
console.log(stackOne.size());
//Remove the top element from the stack
console.log(stackOne.pop());
//Return the top element of the stack
console.log(stackOne.top());