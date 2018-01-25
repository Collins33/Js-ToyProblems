// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr,num) {
  // Find my place in this sorted array.
  var newArray=[]
  for(var i=0;i<arr.length;i++){
    if(arr[i]<num){
      newArray.push(arr[i])
    }
  }

  return newArray.length;
}

getIndexToIns([2, 20, 10], 19);
