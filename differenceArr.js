// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

function diffArray(arr1, arr2) {
  let resultArr = [];
  
  // Merge the two arrays in one filtering out all elements that are on arr1 or arr2.
  resultArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));

  return resultArr; 
}
