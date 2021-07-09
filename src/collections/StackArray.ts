import Stack from 'src/collections/Stack';

export default class StackArray<T> implements Stack<T> {

  private array: Array<T>;

  constructor(input: Array<T> = []) {
    this.array = [...input]; // shallow copy
  }

  push(item: T): void {
    this.array.push(item);
  }

  pop(): T | undefined {
    return this.array.pop();
  }

  peek(): T | undefined {
    return this.array.slice(-1)[0];
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }

  size(): number {
    return this.array.length;
  }

  clear(): void {
    this.array.splice(0);
  }

  toString(): string {
    return `[ ${this.array.join(' | ')} ]`;
  }
}
