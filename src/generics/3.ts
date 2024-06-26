type Obj = {
  [key: string]: any;
};

function merge(objA: Obj, objB: Obj): Obj {
  return Object.assign(objA, objB);
}
