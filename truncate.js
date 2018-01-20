function truncate(str,num){
  if(num<=3){
    var finalString = str.substr(0,num)+"...";
    console.log(finalString)
  }
  else if(str.length > num){
    var finalWord=str.substr(0,num-3)+"...";
    console.log(finalWord)
  }
  else if(str.length === num || str.length> num){
    var finalText=str.substr(0,num);
    console.log(finalText)
  }

}
truncate("Absolutely", 2);
