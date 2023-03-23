function a()
{
    var finame=document.getElementById("fname").value;
    var regf_n=/^[a-zA-Z]{2,10}$/;

    var laname=document.getElementById("lname").value;
    var regl_n=/^[a-zA-z]{2,10}$/;

    var usname=document.getElementById("uname").value;
    var regu_n=/^[a-zA-z0-9!@#$%&*]{5,25}$/;

    var cr_pass=document.getElementById("create_pass").value;
    var regcre_p=/^[a-zA-z0-9!@#$%&*]{5,15}$/;

    var co_pass=document.getElementById("confirm_pass").value;
    var regcon_p=/^[a-zA-z0-9!@#$%&*]{5,15}$/;

    if(finame=="")
    {
        document.getElementById("f_name").innerHTML="*Username Require";
        return false;
    }
    else if(regf_n.test(finame))
    {
        document.getElementById("f_name").innerHTML="";
    }
    else
    {
        document.getElementById("f_name").innerHTML="Invalid";
        return false;
    }

    //LAST NAME

    if(laname=="")
    {
        document.getElementById("l_name").innerHTML="*Last name require";
        return false;
    }
    else if(regl_n.test(laname))
    {
        document.getElementById("l_name").innerHTML="";
    }
    else
    {
        document.getElementById("l_name").innerHTML="Invalid";
        return false;
    }

    //USERNAME

    if(usname=="")
    {
        document.getElementById("u_name").innerHTML="*Username require";
        return false;
    }
    else if(regu_n.test(usname))
    {
        document.getElementById("u_name").innerHTML="";
    }
    // else
    // {
    //     document.getElementById("u_name").innerHTML="Invalid Username";
    //     return false;
    // }

    //Create Password

    if(cr_pass=="")
    {
        document.getElementById("cre_pass").innerHTML="*Password require";
        return false;
    }
    else if(regcre_p.test(cr_pass))
    {
        document.getElementById("cre_pass").innerHTML="";
    }
    else
    {
        document.getElementById("cre_pass").innerHTML="Invalid";
        return false;
    }

    //Confirm Password

    if(co_pass=="")
    {
        document.getElementById("con_pass").innerHTML="*Password Require";
        return false;
    }
    else if(cr_pass==co_pass)
    {
        document.getElementById("con_pass").innerHTML="";
    }
    else
    {
        document.getElementById("con_pass").innerHTML="Password Is Not Matching";
        return false;
    }
alert("Access Granted");

}