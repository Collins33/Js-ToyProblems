function longest(str){
  var inputArray=str.split(" ")
  var newArray=[]
  for(var i=0;i<inputArray.length;i++){
    newArray.push(inputArray[i].length)
  }
  var index=Math.max(...newArray)
  return index
}

longest("this is andela")
