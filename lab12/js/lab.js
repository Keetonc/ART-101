/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */
 //Conditionals

 function sortingHat(str) {
    len = str.length;
   if(len % 4 == 0) {
     return "Proter College.";
   }
   else if(len % 4 == 1){
     return"Crown College.";
   }
   else if(len % 4 == 2) {
     return "College 9.";
   }
   else {
     return "Stevenson College.";
   }
 }

 $("button").click(function(){
   var name = $("#input").val();
   var college = sortingHat(name);
   newText = "<p> The sorting hat has send you into " + college + "</p>";
   $("#output").html(newText);
 } )
