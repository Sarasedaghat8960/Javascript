fetch("http://localhost:3004/users")
.then(res=>res.json())
.then(users=>console.log(users));
document.getElementById("register").addEventListener("click",function(){
    let newUser= {"userName":document.getElementById("regUserName").value,"password":document.getElementById("regPassword").value};
    console.log(newUser);
    //console.log(newUser);      
    fetch("http://localhost:3004/users/new", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
})
.then(res=>res.json())
.then(users=>console.log(users));
})

