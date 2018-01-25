// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr,num) {
  // Find my place in this sorted array.
  var newArray=[num]
  for(var i=0;i<arr.length;i++){
    newArray.push(arr[i])
  }
  var final=newArray.sort()
  var number=final.indexOf(num)
  return number;
}

getIndexToIns([40, 60,10],50);
