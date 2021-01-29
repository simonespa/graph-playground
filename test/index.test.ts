import BinaryNode from '../src/BinaryNode';
import { preOrder, inOrder, postOrder } from '../src//dfs';
import { expect } from 'chai';

const nodes = new Array<BinaryNode<number>>(11);

for (let i = 0; i < nodes.length; i++) {
  nodes[i] = new BinaryNode(i + 1);
}

const root = 5;

nodes[root].setLeft(nodes[1]);
nodes[root].setRight(nodes[2]);

nodes[1].setLeft(nodes[3]);
nodes[1].setRight(nodes[0]);

nodes[3].setLeft(nodes[6]);
nodes[3].setRight(nodes[7]);

nodes[0].setLeft(nodes[10]);

nodes[2].setLeft(nodes[4]);
nodes[2].setRight(nodes[8]);

nodes[4].setRight(nodes[9]);

describe('preOrder', function() {
  it('should build a list containing all visited nodes with the pre-order method', function() {
    const output = [];
    preOrder(nodes[root], output);

    expect(output).to.have.ordered.members([6, 2, 4, 7, 8, 1, 11, 3, 5, 10, 9]);
  });
});

describe('inOrder', function() {
  it('should build a list containing all visited nodes with the in-order method', function() {
    const output = [];
    inOrder(nodes[root], output);

    expect(output).to.have.ordered.members([7, 4, 8, 2, 11, 1, 6, 5, 10, 3, 9]);
  });
});

describe('postOrder', function() {
  it('should build a list containing all visited nodes with the post-order method', function() {
    const output = [];
    postOrder(nodes[root], output);

    expect(output).to.have.ordered.members([7, 8, 4, 11, 1, 2, 10, 5, 9, 3, 6]);
  });
});
