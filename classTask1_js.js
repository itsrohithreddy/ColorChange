const but = document.querySelector("#btn")
but.addEventListener("click",changeColor)
function changeColor(){
    const clr=document.querySelectorAll(".a")
    for(let i=0;clr.length;i++){
        clr[i].style.color="green";
    }
}