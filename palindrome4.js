function palindrome(str) {
    var re = /[\W)]/g; ///[\W_]/g will be the first test here
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("race car"));