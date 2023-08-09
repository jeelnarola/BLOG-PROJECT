
function open(){
    popup.classLisst.add("open-login")
}

// let popup = localStorage.getItem("popup")
// console.log(popup)
// if(popup==true){
//     window.addEventListener("load",()=>{
//         setTimeout(function open(event){
//     document.getElementById("login").style.display="block"
//         },1000)
//     })
// }
// else{
//     console.log("finding value")
// }

// let popup = localStorage.getItem("popup");
// console.log(popup);
    if (popup == true || popup == null) {
        window.addEventListener("load", function () {
          setTimeout(function open(event) {
            document.querySelector("#login").style.display = "block";
          }, 10);
      
        });
      } else {
        console.log(" finding value");
      }
      

document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault()


    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    document.getElementById("login").style.display="none"
    localStorage.setItem("popup",false)


    fetch(`http://localhost:8090/singup?firstname=${username}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.length > 0){
            for( let i=0; i<data.length;i++){
                if(data[i].firstname!=username){
                    alert("jl narolka")
                }
                else if(data[i].password!=password){
                    alert("password not match")
                }
                else{
                    alert("login")
                    window.location.href="http://127.0.0.1:5500/index.html"
                }

            }
        }
        else{
            window.location.href="http://127.0.0.1:5500/sing-up/singup.html"
        }
    })
})
const get=async()=>{
    fetch("http://localhost:8090/singup")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
get()

