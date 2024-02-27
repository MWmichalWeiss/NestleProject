function navMedia()
{
   var a= document.getElementById("navMedia")
   if(a.style.display === "none" || a.style.display =="")
   a.style.display="block" ;
   else a.style.display="none";
}
function myFunction(val) {
   if(val==1)
    location.replace("linkQuestion.html")
    else if(val==2)
    location.replace("linkWant.html")
    else if(val==3)
    location.replace("wantBay.html")


  }