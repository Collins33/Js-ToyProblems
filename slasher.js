function slasher(arr, howMany) {
  var empty=[]
  if(howMany>arr.length){
    console.log(empty)
  }
  else{
    for(var i=0;i<howMany;i++){
      arr.splice(0,1)
    }
    console.log(arr)
  }
}

slasher([1, 2, 3], 1);
