//return the largest numbers in each mini array
function largestNumbers(arrays){
  var finalArray=[]
  for(var i=0;i<arrays.length;i++){
      finalArray.push(Math.max(...arrays[i]))
  }
console.log(finalArray)
}
largestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
