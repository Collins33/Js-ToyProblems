//make a string repeat n number of times
function repeat(str,num){
  if(num<0){
    console.log("not a value")
  }
  else {
    var final=[];
    for(var i=0;i<num;i++){
      final.push(str)
    }

    var finalWord=final.join("")
    console.log(finalWord)
  }



}
repeat("bubu",-7)
