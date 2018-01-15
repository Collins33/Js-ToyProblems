function capitalize(str){
  var newArray=str.toLowerCase().split(" ")
  var results=newArray.map(function(val){
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
  })
  results.join(" ")
  console.log(results)

}
capitalize("I'm a little tea pot")
