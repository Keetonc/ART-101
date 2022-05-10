/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */
 // JavaScript for web

var outputEl= document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "Art 101 is the best class.";
var new2El = document.createElement("div");
new2El.innerHTML = "Wes. Mode is a good insturctor";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.style.color = "red";
outputEl.style.background ="yellow";
outputEl.style.fontSize = "120%";
