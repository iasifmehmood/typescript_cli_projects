class keyValuePair<T, V> {
  constructor(public key: T, public value: V) {}
}

let pair = new keyValuePair<string, number>('a', 1);

//or

let pair = new keyValuePair('a', 1);

//compiler will automatically infer types for us
