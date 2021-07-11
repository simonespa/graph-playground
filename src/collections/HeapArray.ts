import Heap from './Heap';
import Comparable, { Comparison } from '../util/Comparable';

enum HeapType {
  MaxHeap = 0,
  MinHeap = 1
}

enum Operand { Left, Right };
enum HeapType { Max, Min };

/**
 * Returns the right operand if:
 * - It's a Max Heap and the right operand is strictly greater than the left one
 * - It's a Min Heap and the right operand is strictly less than the left one
 *
 * Returns the left operand otherwise.
 *
 * @param left the left operand
 * @param right the right operand
 * @param heapType the type of heap (Max or Min)
 */
function whoWins(left: number, right: number, heapType: HeapType): Operand {
  if (heapType === HeapType.Max && right > left || heapType === HeapType.Min && right < left) {
    return Operand.Right;
  } else {
    return Operand.Left;
  }
}
export default class HeapArray<T extends Comparable<T>> implements Heap<T> {

  private heap: Array<T>;
  private type: HeapType;

  constructor(input: Array<T> = [], type: HeapType = HeapType.MaxHeap) {
    this.heap = input;
    this.type = type;
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

  private test() {
    const left = this.heap[leftChild];
    const right = this.heap[rightChild];
    const operand = whoWins(left, right);
    if (operand === Operand.Left)
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
    // all elements in the second half of the array are leaves
    return index >= Math.floor(this.heap.length / 2);
  }

  public add(element: T): void {

  }

  public poll(): T {
    throw new Error('');
  }

  public peek(); T {
    throw new Error('');
  }
}
