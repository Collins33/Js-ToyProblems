//write a function that reverses a given string
function reverseString(str){
  var newArray=str.split("");
  var finalArray=[]
  for(var i=newArray.length;i>=0;i--){
    finalArray.push(newArray[i])
  }

  console.log(finalArray.join(""))
}

reverseString("Howdy")
