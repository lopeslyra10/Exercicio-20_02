function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
  }
  
  console.log(inverterArray([1, 2, 3, 4])); // [4, 3, 2, 1]
  console.log(inverterArray(["a", "b", "c"])); // ["c", "b", "a"]
  