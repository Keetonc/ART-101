/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */
 //loops
 var oneLongString ="";
for(var i= 1; i < 200; i++){
  if(i % 105 == 0) {
    oneLongString+="fizzbuzzboom<br>";
  }
  else if(i % 35 == 0){
    oneLongString+="buzzboom<br>";
  }
  else if(i % 21 == 0){
    oneLongString+="fizzboom<br>";
  }
  else if(i % 15 == 0) {
    oneLongString+="fizzbuzz<br>";
  }
  else if(i % 3 == 0){
    oneLongString+="fizz<br>";
  }
  else if(i % 5 == 0){
    oneLongString+="buzz<br>";
  }
  else if(i % 7 == 0){
    oneLongString+="boom<br>";
  }
  else {
    oneLongString+=i+"<br>";
  }
}
$("#output").html(oneLongString);
