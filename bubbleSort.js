/**
 *
 * Bubble Sort
 *
 * @param {number[]} arr
 * @return {number[]}
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
}

function swap(arr, a, b) {
  if (a !== b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}

// Test
if (require.main === module) {
  console.log(bubbleSort([1, 4, 3, 6, 2, 7]));
}

module.exports = {
  bubbleSort
};
