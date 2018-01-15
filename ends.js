//check if a string ends with A certain character
function endsWith(str,target){
var word=str.toLowerCase()
var ending=target.toLowerCase()
var index=word.length-1


if( word[index] === ending){
  console.log("hello")
}
else{
  console.log("no")
}
}
endsWith("Bastian", "n")
