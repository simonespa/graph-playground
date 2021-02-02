export default interface Stack<T> {

  /**
   * Pushes an item at the top of the stack.
   * @param {T} item the item to be pushed onto this stack.
   */
  push(item: T): void;

  /**
   * Removes the item at the top of the stack and returns it.
   * Returns a null pointer if the stack is empty.
   * @returns {T | undefined} the item or undefined.
   */
  pop(): T | undefined;

  /**
   * Returns the item at the top of the stack without removing it.
   * @returns {T | undefined} the item or undefined.
   */
  peek(): T | undefined;

  /**
   * Tests if this stack is empty.
   * @returns {boolean} true if and only if this stack contains no items; false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns the number of items stored in the stack.
   * @returns {number} the number of items.
   */
  size(): number;

  /**
   * Removes all of the items from the stack, setting the size to zero. The Stack will be empty after this call returns.
   */
  clear(): void;

  /**
   * Returns a string representation of the stack.
   * @returns {string} the string representation.
   */
  toString(): string;
}
