function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([3, 2, 1, 4, 5, 33]));
