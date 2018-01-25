//return true if all letters in second value are in the second value
function mutations(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      console.log("false");
  }
  console.log("true");
 }
mutations(["voodoo", "no"])


//testing regular expressions
