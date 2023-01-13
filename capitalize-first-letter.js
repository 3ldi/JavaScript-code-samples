// Return the provided string with the first letter of each word capitalized, including connecting words like "of" or "and" 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  // Change string to lower case and split it on spaces
  let strArr = str.toLowerCase().split(" ");
  
  // Create an empty array that will hold each word capitalized on the first character
  let capitalArr = [];
  
  // Create an empty string to store our final string
  let finalStr = "";
  
  // Loop through each array element and split it in 2 parts on the first character. 
  // Then capitalize the first part and join again with the second part.    
  for (let i = 0; i < strArr.length; i++){
    let newWord = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1);
    
    // Add the capitalized word to capitalArr
    capitalArr.push(newWord);
    }

  // Create the final string by joining all capitalArr elements with a space 
  finalStr = capitalArr.join(" ");
  
  return finalStr;
}

// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout
