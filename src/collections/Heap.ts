import Collection from './Collection';
import Comparable from '../util/Comparable';

/**
 * A heap is a binary tree that satisfies two properties:
 *   1) Completeness: Every level of the tree (except last) is completely filled.
 *      All holes in the last level are all the way to the right.
 *   2) Heap Order Invariant: Every element in the tree is <= (or >=) its parent
 *      depending if it's a max heap or a min heap.
 *
 * The items stored in this data structure must be comparable. For this reason,
 * it only accepts types that extends the "Comparable" interface.
 */
export default interface Heap<T extends Comparable<T>> extends Collection<T> {
  /**
   * Adds a new element to the heap.
   *
   * @param element the comparable element to add.
   * @complexity time: O(log n)
   */
  add(element: T): void;

  /**
   * Removes the root element and returns it.
   * The root element can be the maximum one if it's a max heap,
   * or the minimum one if it's a min heap.
   *
   * @returns the maximum element if a max heap, or the minimum if a min heap.
   * @complexity time: O(log n)
   */
  poll(): T;

  /**
   * Returns the root element without removing it.
   * The root element can be the maximum one if it's a max heap,
   * or the minimum one if it's a min heap.
   *
   * @returns the maximum element if a max heap, or the minimum if a min heap.
   * @complexity time: O(1)
   */
  peek(); T;

  /**
   * Returns the heap in array form.
   */
  toArray(): Array<T>;
}

// class Person implements Comparable<Person>{
//   private name;

//   constructor(name: string) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }

//   compare(person: Person): Comparison {
//     if (this.getName() === person.getName()) return Comparison.Equal;

//     return Comparison.LessThan;
//   }
// }
