var singular = "bottle";
var plural = "bottles";

var count = 99;

while(count > 0)
{
        
    console.log(count + " " + plural + " of beer on the wall");
    console.log(count + " " +  plural + " of beer");
    console.log("take one down and pass it around");
    console.log(count + " " + plural + " of beer on the wall");
    count -= 1;
    console.log("-----");

    if(count == 1)
    {
        console.log(count + " " + singular + " of beer on the wall");
        console.log(count + " " +  singular + " of beer");
        console.log("take one down and pass it around");
        console.log(count + " " + plural + " of beer on the wall");
        count -= 1;
        console.log("-----");
        } 
     
        


} 