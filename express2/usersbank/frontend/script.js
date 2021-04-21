fetch("http://localhost:3004/users")
.then(res=>res.json())
.then(users=>{
    let userName=document.getElementById("userName");
    let password=document.getElementById("password")
        document.getElementById("login").addEventListener("click",function(){
           console.log(users);
           for(user in users){
               if(userName.value==users[user].userName && password.value==users[user].password){
                     document.getElementById("welcomeLogin").insertAdjacentHTML("afterbegin","hello  "+userName.value+" to our page ");
                        console.log(users[user].userName);
        
                }
            }

        });
    
});