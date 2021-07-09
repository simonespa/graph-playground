export enum HeapType { MIN, MAX };

export default class NumericHeap {

  private heap: Array<number>;
  private heapType: HeapType;

  constructor(input: Array<number> = [], heapType: HeapType = HeapType.MAX) {
    this.heap = input;
    this.heapType = heapType;
    const currentIndex = Math.floor(this.heap.length / 2);
    this.buildHeap(currentIndex);
  }

  public toArray(): Array<number> {
    return this.heap;
  }

  private buildHeap(currentIndex: number): void {
    for (let index = currentIndex; index >= 0; index--) {
      this.bubbleDown(index);
    }
  }

  private bubbleDown(currentIndex: number): void {
    // If the current node is a leaf, exit
    if (this.isLeaf(currentIndex)) return;
    // Get the winner (min or max) child
    const winnerChildIndex = this.getWinnerIndex(this.getLeftChildIndex(currentIndex), this.getRightChildIndex(currentIndex));
    // If the winner child index wins against the current index
    if (this.isLeftTheWinnerIndex(winnerChildIndex, currentIndex)) {
      // swap positions
      this.swap(currentIndex, winnerChildIndex);
      // recursively call this function updating the current index with the winning child
      this.bubbleDown(winnerChildIndex);
    }
  }

  /**
   * Returns the min or max depending on the type of Heap.
   */
  private getWinnerIndex(indexOne: number, indexTwo: number): number {
    let one = this.heap[indexOne];
    let two = this.heap[indexTwo];

    if (one === undefined) return indexTwo;
    if (two === undefined) return indexOne;

    if (this.heapType === HeapType.MAX && two > one) return indexTwo;

    if (this.heapType === HeapType.MIN && two < one) return indexTwo;

    return indexOne;
  }

  /**
   * Tells whethr the left index is the winner, depending on the type of Heap.
   * - If Max heap, the left index wins if it is strictly greater than the right index
   * - If Min heap, the left index wins if it is strictly less than the right index
   * @param leftIndex
   * @param rightIndex
   * @returns true if the left index is the winner
   */
  private isLeftTheWinnerIndex(leftIndex: number, rightIndex: number): boolean {
    let one = this.heap[leftIndex];
    let two = this.heap[rightIndex];

    if (this.heapType === HeapType.MAX && two > one) return false;

    if (this.heapType === HeapType.MIN && two < one) return false;

    return true;
  }

  private bubbleUp(current: number): void {
    // if it is root, exit
    if (this.isRoot(current)) return;
    // if it is not strictly greater than its parent, exit
    const parent = this.getParentIndex(current);
    if (this.heap[current] <= this.heap[parent]) return;

    this.swap(current, parent);
    this.bubbleUp(parent);
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private isRoot(index: number): boolean {
    return index === 0;
  }

  private isLeaf(index: number): boolean {
    const leftChild = this.getLeftChildIndex(index);
    const rightChild = this.getRightChildIndex(index);
    const N = this.heap.length;
    return leftChild >= N && rightChild >= N;
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
}

const h = new NumericHeap([2, 4, 7, 1, 5, 3], HeapType.MIN);
console.log(h.toArray());
