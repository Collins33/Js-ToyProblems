//remove all false values from the array
function bouncer(arr) {
  // var array=arr.filter(function(val){
  //   return val != Boolean(val)
  // })
  // console.log(array)
  //filter it to remove boolea values
  console.log(arr.filter(Boolean))
}

bouncer([false, null, 0, NaN, undefined, ""]);
