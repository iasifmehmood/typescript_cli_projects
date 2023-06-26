//get string and number array

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

// let numbers = ArrayUtils.wrapInArray(1);
let numbers = ArrayUtils.wrapInArray('a');
