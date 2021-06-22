function merge<T extends object, V extends object>(
  objectT: T,
  objectV: V
): T & V {
  const mergeObject: T & V = <T & V>{};

  for (const keyT in objectT) {
    const valueT = objectT[keyT];
    (<any>mergeObject)[keyT] = valueT;
  }

  for (const keyV in objectV) {
    const valueV = objectV[keyV];
    (<any>mergeObject)[keyV] = valueV;
  }

  return mergeObject;
}

/**
 * Uncomment code below to test
 */

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const resultObjects = merge(obj1, obj2);

// console.log('Initial objects: ');
// console.log(obj1);
// console.log(obj2);

// console.log('Result with usual objects:');
// console.log(resultObjects);

// type Type1 = {
//   foo: string;
// };
// type Type2 = {
//   bar: string;
// };

// const objType1: Type1 = {
//   foo: 'foo',
// };
// const objType2: Type2 = {
//   bar: 'bar',
// };

// const resultTypes = merge(objType1, objType2);

// console.log('Initial type objects: ');
// console.log(objType1);
// console.log(objType2);

// console.log('result with type objects:');
// console.log(resultTypes);

export {};
