function a()
{
   var a= document.getElementById("un").value;
   var b = document.getElementById("ps").value;

   if(a=="" && b=="")
    {
       document.getElementById("un1").innerHTML="*UserName Is Required!";
       document.getElementById("ps1").innerHTML="*Password Is Required!";
       return false;
    }
    else if(a=="")
   {
   document.getElementById("un1").innerHTML="Username required";
   return false;
   }
   else if(b=="")
   {
    document.getElementById("ps1").innerHTML="Password required";
    return false;
   }
   else if(a=="surajtawale19" && b=="Surajt@19")
    {
        alert("Access Granted !");
        return true;
    }
    else
    {
        document.getElementById("sbtn").innerHTML="Access Deniend";
        return false;
    }
}