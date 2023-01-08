/**
This is a freeCodeCamp challenge about restricting usernames using JavaScript
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

1. Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";

let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// ^[a-z] -----starts with a letter
// ()$ ----- ends with
// [0-9]{2,}  ---- 2 digits OR [a-z]+\d* ----- a letter followed by 0 or more digits

let result = userCheck.test(username);
