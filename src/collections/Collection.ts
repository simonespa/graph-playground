/**
 * This is the base interface for all collections.
 */
export default interface Collection<T> {
  /**
   * Tests if the collection is empty.
   *
   * @returns {boolean} true if the collection contains no items; false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns the number of items stored in the collection.
   *
   * @returns {number} the number of items.
   */
  size(): number;

  /**
   * Removes all items from the collection, setting the size to zero.
   * The collection will be empty after this call returns (i.e. isEmpty returns true).
   */
  clear(): void;
}
