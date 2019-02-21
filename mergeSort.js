function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const center =
    arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, center)),
    mergeSort(arr.slice(center))
  );
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  if (j > i) {
    result = result.concat(left.slice(i));
  } else if (j < i) {
    result = result.concat(right.slice(j));
  }

  return result;
}

let arr = [4, 3, 7, 1, 6, -9, 33, 0, 9, 45, 28, 17];

console.log(mergeSort(arr));
