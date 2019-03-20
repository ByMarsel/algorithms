function countKeysEqual(arr, maxValue) {
  const result = [];

  while (result.length < maxValue) {
    result.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]]++;
  }

  return result;
}

function countKeysLess(equal, maxValue) {
  const result = [];
  result[0] = 0;
  let j = 1;
  while (j < maxValue) {
    result[j] = result[j - 1] + equal[j - 1];
    j++;
  }
  return result;
}

function rearrange(arr, less, maxValue) {
  const result = [];
  const next = [];

  let j = 0;
  while (j < maxValue) {
    next[j] = less[j] + 1;
    j++;
  }

  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    index = next[arr[i]];
    result[index] = arr[i];
    next[arr[i]]++;
  }

  return result;
}

function countSort(arr, maxValue) {
  const equal = countKeysEqual(arr, maxValue);
  const less = countKeysLess(equal, maxValue);
  return rearrange(arr, less, maxValue);
}

console.log(countSort([1,4,2,6,3,3,1], 7))