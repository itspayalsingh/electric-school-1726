let name1=document.querySelector("#name")
let email1=document.querySelector("#email")
let password1=document.querySelector("#password")
// let pass=document.querySelector("#password").value
document.querySelector("button").addEventListener("click",()=>{
    let payload={
        name:name1.value,
        email:email1.value,
        password:password1.value,
    }
    fetch("https://localhost:9090/user/register",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-type":"application/json"
        }
    })   
})
// let payload={
//     name,
//     email,
//     pasword,
// }
// console.log(payload)