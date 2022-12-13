// complete the given function

function palindrome(str){
  str = str.toLowerCase();
  const sLen = str.length;
  for(let i=0; i<sLen/2; i++){
    if (str[i] !== str[sLen - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome
