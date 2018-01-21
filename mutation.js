//return true if all letters in second value are in the second value
function mutations(arr) {
  var first = arr[0];
  var second = arr[1]
  var final = []
  for (var i = 0; i < second.length; i++) {
    for (var v = 0; v < first.length; v++) {
      if (second[i] === first[v]) {
        final.push("true")
      }
    }
  }

  if (final.length >= second.length) {
    console.log("true")
  } else {
    console.log("false")
  }
  // console.log(final)
}
mutations(["voodoo", "no"])


//testing regular expressions
