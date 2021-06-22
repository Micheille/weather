type PaddingValue = `${number}px`;

type Padding = {
  top: PaddingValue;
  right: PaddingValue;
  bottom: PaddingValue;
  left: PaddingValue;
};

function padding(): Padding;
function padding(padding: number): Padding;
function padding(paddingHorizontal: number, paddingVertical: number): Padding;
function padding(
  paddingTop: number,
  paddingHorizontal: number,
  paddingBottom: number
): Padding;
function padding(
  paddingTop: number,
  paddingRight: number,
  paddingBottom: number,
  paddingLeft: number
): Padding;
function padding(
  arg1?: number,
  arg2?: number,
  arg3?: number,
  arg4?: number
): Padding {
  function createPaddingObject(
    top: number,
    right: number,
    bottom: number,
    left: number
  ) {
    const paddingObject: Padding = {
      top: `${top}px`,
      right: `${right}px`,
      bottom: `${bottom}px`,
      left: `${left}px`,
    };
    return paddingObject;
  }

  if (arg1 && arg2 && arg3 && arg4) {
    return createPaddingObject(arg1, arg2, arg3, arg4);
  } else if (arg1 && arg2 && arg3) {
    return createPaddingObject(arg1, arg2, arg3, arg2);
  } else if (arg1 && arg2) {
    return createPaddingObject(arg2, arg1, arg2, arg1);
  } else if (arg1) {
    return createPaddingObject(arg1, arg1, arg1, arg1);
  }
  return createPaddingObject(0, 0, 0, 0);
}

/**
 * Uncomment and/or change code below to test
 */

// const paddingObj = padding(4, 5, 3);
// console.log(paddingObj);

export {};
