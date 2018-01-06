//check if string is palindrome

function palindrome(str){
//using regular expression to remove non alphanumeric characters
//make input lower case
//turn it into array using split
//reverse array using reverse()
//turn it into string using join()
  return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye")
