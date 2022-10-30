// complete the given function

function palindrome(str){
  let result = str.split("").reverse().join("")
    if(result === str){
        return true
    }
    return false
}
module.exports = palindrome
