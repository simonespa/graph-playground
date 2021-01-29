export default class BinaryNode<T> {
  private value: T;
  private visited: boolean = false;
  private left: BinaryNode<T> | null = null;
  private right: BinaryNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  public setLeft(left: BinaryNode<T> | null): void {
    this.left = left;
  }

  public setRight(right: BinaryNode<T>): void {
    this.right = right;
  }

  public getValue() {
    this.visited = true;
    return this.value;
  }

  public getLeft() {
    return this.left;
  }

  public getRight() {
    return this.right;
  }

  public isVisited() {
    return this.visited;
  }
}
