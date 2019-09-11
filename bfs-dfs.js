class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(9);
root.left = new Node(4);
root.right = new Node(20);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.right.left = new Node(15);
root.right.right = new Node(170);

function DFSInOrder(node, list){
  if(node.left){
    DFSInOrder(node.left, list);
  }
  list.push(node.value);
  if(node.right){
    DFSInOrder(node.right, list);
  }
  return list;
}

function DFSPreOrder(node, list){
  list.push(node.value);
  if(node.left){
    DFSInOrder(node.left, list);
  }
  if(node.right){
    DFSInOrder(node.right, list);
  }
  return list;
}

function DFSPostOrder(node, list){
  if(node.left){
    DFSInOrder(node.left, list);
  }
  if(node.right){
    DFSInOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function BFS(queue, list){
  if(queue.length === 0){
    return list;
  }

  let currentNode = queue.shift();
  list.push(currentNode.value);
  if(currentNode.left){
    queue.push(currentNode.left);
  }
  if(currentNode.right){
    queue.push(currentNode.right);
  }
  return BFS(queue, list);
}

console.log(DFSInOrder(root, []))
console.log(DFSPreOrder(root, []))
console.log(DFSPostOrder(root, []))
console.log(BFS([root], []))
