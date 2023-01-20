// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {

	let arr = str.split("");
	let myVowels = /[aeuio]/i;

	if (arr[0].match(myVowels)) {
		// Check if word starts with a vowel 
		return arr.concat(['way']).join("");
	} else if (!str.match(myVowels)) {
		// Check if word has no vowels
		return arr.concat(['ay']).join("");
	} else {
		// check if word starts with a consonant or a consonant group
		for (let i = 1; i < arr.length; i++) {
			if (arr[i].match(myVowels)) {
				return (arr.slice(i).concat(arr.slice(0, i), ["ay"]).join(""));
			}
		}
	}
}
