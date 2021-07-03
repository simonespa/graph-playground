import BinaryNode from '../BinaryNode';

export function preOrder<T>(node: BinaryNode<T> | null, result: Array<T>): void {
  if (node === null || node === undefined) return;

  result.push(node.getValue());
  preOrder(node.getLeft(), result);
  preOrder(node.getRight(), result);
}

export function inOrder<T>(node: BinaryNode<T> | null, result: Array<T>): void {
  if (node === null || node === undefined) return;

  inOrder(node.getLeft(), result);
  result.push(node.getValue());
  inOrder(node.getRight(), result);
}

export function postOrder<T>(node: BinaryNode<T> | null, result: Array<T>): void {
  if (node === null || node === undefined) return;

  postOrder(node.getLeft(), result);
  postOrder(node.getRight(), result);
  result.push(node.getValue());
}
