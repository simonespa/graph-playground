/**
 * Stack is a linear data structure which follows
 * the LIFO (Last In First Out) approach.
 */
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
}
