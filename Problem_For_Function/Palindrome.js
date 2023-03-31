function palindrome(str) {
    var re = /[\W_]/g;     
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr; 
  }

  var str="Nashik";
  if(palindrome(str)){
    console.log("Its a palindrome");
}
else
console.log("Its not a palindrome");