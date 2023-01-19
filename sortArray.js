// Using the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function returns a new array, and does not mutate the original array.

function nonMutatingSort(arr) {
   
  // make a copy of the array
  let newArr = [...arr];
  
  
//   If function(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
//   If function(a,b) returns a value greater than 0 for two elements a and b, then b will come before a.
//   If function(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged
  return newArr.sort(function(a, b){
    return a === b ? 0 : a < b ? -1 : 1;
  }); 
}
