'use strict';

const isInitialValuesUndefined = (initialValue) => initialValue === undefined;

const mainReduce = (arr, func, initialValue) => {
  const acc = isInitialValuesUndefined(initialValue) ? arr[0] : initialValue;
  const arrCopy = isInitialValuesUndefined(initialValue) ? arr.slice(1) : arr;

  return (function reduceInternal(accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal;
    const accNext = () => func(accInternal, head, counter, arrCopy);

    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, counter + 1);
  })(acc, arrCopy, 0);
};

export default mainReduce;
