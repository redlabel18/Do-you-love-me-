let yes = document.getElementById("yes")
let no = document.getElementById("no")
let msg = document.getElementById("message")
let container = document.getElementById("container")
let cat= document.getElementById("cat")

no.addEventListener("mouseover",()=>{
    no.style.top=Math.floor(Math.random()*50)+"vh"
    no.style.right=Math.floor(Math.random()*50)+"vw"
    // yes.classList.add("grow")
})

yes.addEventListener("click",()=>{
    // message.style.display="block"
    // message.style.background="violet"
    container.style.display="none"
    cat.classList.add("show");

  // Optional: hide after 2 seconds for extra fun
//   setTimeout(() => {
//     cat.classList.remove("show");
//   }, 2000);
})
cat.addEventListener("click",()=>{
    cat.classList.remove("show");
})