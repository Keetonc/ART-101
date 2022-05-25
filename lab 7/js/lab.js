/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */
 // Libraries & jQuery

 function sortUsername(){
  var userName = window.prompt("Hi, please give me a list of names.");
  var nameArray = userName.split(" ");
  var sortArray = nameArray.sort();
  var sortName = sortArray.join(" ");
  return sortName;
 }

 document.writeln("Here are the names in alphebtical order: ",
 sortUsername(), "<br>");
 
