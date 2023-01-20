// given two arrays and an index copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function mergeArr(arr1, arr2, n) {

  let newArr = [];

  // Split the second array on position "n" and concat arr1 in between the 2 pieces
  newArr = arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));

  return newArr;
}
