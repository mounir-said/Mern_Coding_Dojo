function partition(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)];
  let i = low - 1;
  let j = high + 1;

  while (true) {
      do {
          i++;
      } while (arr[i] < pivot);

      do {
          j--;
      } while (arr[j] > pivot);

      if (i >= j) {
          return j;
      }

      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] and arr[j]
  }
}

function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quicksort(arr, low, pivotIndex);
      quicksort(arr, pivotIndex + 1, high);
  }
  return arr;
}

// Example usage:
const unsortedArray = [5, 3, 7, 2, 8, 6, 1, 4];
console.log(quicksort(unsortedArray.slice())); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
