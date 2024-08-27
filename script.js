var users = [
    {username : "seif" , email : "seif@gmail.com" , password : "12345678"},

    {username : "mohammed" , email : "mohammed@gmail.com" , password : "87654321"},

    {username : "Ahmed" , email : "Ahmed@gmail.com" , password : "13579086"}
]
function validataform(){
    var valid = true;
    if (document.inputform.email.value.indexOf('@gmail.com') == -1) {
        alert("please enter valid email,eg:info@gmail.com");
        valid = false;
    }
    return valid;
}
function checkcredentials(inputusername,inputpassword){
    let found =false;
    users.forEach(user=>{
        if (user.username === inputusername && user.password===inputpassword) {
            <a href="Home.html">Home</a>
            found = true;
        }
    });
    if (!found) {
        alert("Email no found");
    }
}