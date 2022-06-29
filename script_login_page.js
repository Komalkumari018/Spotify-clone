function validate()
{
    var username=document.getElementById("username").value;
    var passwords=document.getElementById("password").value;
    if(username=="admin" && passwords=="user")
    {
        alert("login successfull"); 
    }
    else 
    {
       alert("login failed !!"+"\nEnter username : admin , password : user"); 
       return false;
    }
}