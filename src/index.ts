import BinaryNode from './BinaryNode';
import { preOrder, inOrder, postOrder } from './dfs';

const nodes = new Array<BinaryNode<number>>(11);

for (let i = 0; i < nodes.length; i++) {
  nodes[i] = new BinaryNode(i + 1);
}

nodes[5].setLeft(nodes[1]);
nodes[5].setRight(nodes[2]);

nodes[1].setLeft(nodes[3]);
nodes[1].setRight(nodes[0]);

nodes[3].setLeft(nodes[6]);
nodes[3].setRight(nodes[7]);

nodes[0].setLeft(nodes[10]);

nodes[2].setLeft(nodes[4]);
nodes[2].setRight(nodes[8]);

nodes[4].setRight(nodes[9]);

const preorderTraversal = [];
const inorderTraversal = [];
const postorderTraversal = [];

preOrder(nodes[5], preorderTraversal);
inOrder(nodes[5], inorderTraversal);
postOrder(nodes[5], postorderTraversal);

console.log(`Pre-order: ${preorderTraversal}`);
console.log(`In-order: ${inorderTraversal}`);
console.log(`Post-order: ${postorderTraversal}`);
