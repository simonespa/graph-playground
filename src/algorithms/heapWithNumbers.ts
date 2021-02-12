class Heap {

  private heap: Array<number>;

  constructor(input: Array<number> = []) {
    this.heap = input;
    const current = Math.floor(this.heap.length / 2);
    this.buildHeap(current);
  }

  private buildHeap(current: number): void {
    for (let index = current; index >= 0; index--) {
      this.bubbleDown(index);
    }
  }


  

  private bubbleDown(current: number): void {
    // if it is a leaf, exit
    if (this.isLeaf(current)) return;
    // if it is greater than or equal to the greatest of its children, exit
    const leftChild = this.getLeftChild(current);
    const rightChild = this.getRightChild(current);
    const maxChild = this.getMax(leftChild, rightChild);
    if (this.heap[current] >= this.heap[maxChild]) return;

    this.swap(current, maxChild);
    this.bubbleDown(maxChild);
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


const h = new Heap([2, 4, 7, 1, 5, 3]);
// const h = new Heap();
// h.add(2).add(4).add(7).add(1).add(5).add(3);
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
console.log(h.getRoot());
console.log(h.toArray());
