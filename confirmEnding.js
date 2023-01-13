// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  
  const myRegex = new RegExp(target + "$", "g");
  return myRegex.test(str);
  

// Another way would be using the slice method with a negative index.
// return (str.slice(-target.length) === target) 
  
}
