function quickSort(arr, start, end) {
  if (end - start < 2) {
    if (arr[start] > arr[end]) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
    }
    return arr;
  }

  let support = arr[end];
  let k = start;
  let j = end - 1;

  while (k < j) {
    if (arr[k] > support && arr[j] < support) {
      let temp = arr[k];
      arr[k] = arr[j];
      arr[j] = temp;
      k++;
      j--;
    } else {
      if (arr[k] > support) {
        j--;
      } else if (arr[j] < support) {
        k++;
      } else {
        k++;
        j--;
      }
    }
  }
  if (arr[j] > support) {
    let temp = arr[j];
    arr[j] = support;
    arr[end] = temp;
  }

  let center = Math.floor((start + end) / 2);
  quickSort(arr, center, end);
  quickSort(arr, start, center);

  return arr;
}

console.log(quickSort([1, 5, 8, 2, 3, 7, 6, 4], 0, 7));
