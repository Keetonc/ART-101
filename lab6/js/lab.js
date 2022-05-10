/*
 * author: Shimao Zhou Cole Keeton
 * created: April 25
 * license:
 *
 */

//define variable
 myTransport = ["on feet","by bus","use Lyft"];
 myMainRide = {
   name: "Highway 19",
   model: "New Flyer",
   color: "Bule",
   year: "2010",
 }

 myVehicle = ["Toyota Tacoma", "Bus", "Bike"];
 myMainVehicle = {
    model: "Tacoma",
    make: "Toyota",
    Year: "2008",
    color: "White",
}


 //output
 document.writeln("kind of transport I use: " , myTransport, "<br>");
 document.writeln("My main Ride:  <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

    document.writeln("kind of transport I use: " , myVehicle, "<br>");
    document.writeln("My main Vehicle:  <pre>",
       JSON.stringify(myMainVehicle, null, '\t'), "</pre>");
