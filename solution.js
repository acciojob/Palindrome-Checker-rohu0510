// complete the given function

function palindrome(str){
  const sLen = str.length;
  for(let i=0; i<sLen; i++){
    if (str[i] !== str[sLen - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome
