function insertionSort(arr) {
  let key;
  let j;

  for(let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while(j > -1 && arr[j] > key) {
        arr[j+1] = arr[j]
        j = j - 1
    }

    arr[j+1] = key
  }
  return arr
}

console.log(insertionSort([3,2,1,0,8,4]))