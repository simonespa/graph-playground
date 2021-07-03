export default class NumericMaxHeap {

  private heap: Array<number>;

  constructor(input: Array<number> = []) {
    this.heap = input;
    const current = Math.floor(this.heap.length / 2);
    this.buildHeap(current);
  }

  public toArray(): Array<number> {
    return this.heap;
  }

  private buildHeap(current: number): void {
    for (let index = current; index >= 0; index--) {
      this.bubbleDown(index);
    }
  }

  private bubbleDown(current: number): void {
    // If the current node is a leaf, exit
    if (this.isLeaf(current)) return;
    // Get the max child
    const maxChild = this.getMax(this.getLeftChild(current), this.getRightChild(current));
    // If the current node is smaller than the max child
    if (this.heap[current] < this.heap[maxChild]) {
      // swap positio between the current node and its child
      this.swap(current, maxChild);
      // recursively call this function
      this.bubbleDown(maxChild);
    }
  }

  private bubbleUp(current: number): void {
    // if it is root, exit
    if (this.isRoot(current)) return;
    // if it is not strictly greater than its parent, exit
    const parent = this.getParent(current);
    if (this.heap[current] <= this.heap[parent]) return;

    this.swap(current, parent);
    this.bubbleUp(parent);
  }

  private getParent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChild(index: number): number {
    return index * 2 + 1;
  }

  private getRightChild(index: number): number {
    return index * 2 + 2;
  }

  private isRoot(index: number): boolean {
    return index === 0;
  }

  private isLeaf(index: number): boolean {
    const leftChild = this.getLeftChild(index);
    const rightChild = this.getRightChild(index);
    const N = this.heap.length;
    return leftChild >= N && rightChild >= N;
  }

  private getMax(indexOne: number, indexTwo: number): number {
    let one = this.heap[indexOne];
    let two = this.heap[indexTwo];

    if (one === undefined) return indexTwo;
    if (two === undefined) return indexOne;

    if (two > one) return indexTwo;

    return indexOne;
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
}

const h = new NumericMaxHeap([2, 4, 7, 1, 5, 3]);
console.log(h.toArray());
