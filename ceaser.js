function rot13(str) { // LBH QVQ VG!
  var alphabet="abcdefghijklmnopqrstuvwxyz!? "
  var alphabetArray=alphabet.split("")

  var strip=str.toLowerCase().split("")

  var alphaA="abcdefghijklm!? "
  var alphaB="nopqrstuvwxyz!? "
  // console.log(alphaA[alphaB.indexOf("s")])

  var final=[]



  for(var x=0;x<strip.length;x++){
      var outPut=alphabetArray.indexOf(strip[x])
      if(outPut<=12){
        var news=strip[x].replace(strip[x], alphaB[alphaA.indexOf(strip[x])])
        final.push(news)
      }
      else{
        var news=strip[x].replace(strip[x], alphaA[alphaB.indexOf(strip[x])])
        final.push(news)
      }
  }

console.log(final.join(""))

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
