/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var strarr1 = str1.split("").sort();
  var strarr2 = str2.split("").sort();
  console.log(strarr1.join(""));
  console.log(strarr2.join(""));

  sortstr1 =strarr1.join("");
  sortstr2 =strarr1.join("");


  if(sortstr1==sortstr2)
  return true;
  else
  return false;

}
var res= isAnagram("name","mane");
console.log(res);
module.exports = isAnagram;
