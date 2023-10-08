
const transitionBtn =document.getElementById("transition")
const topTransition = document.getElementById("transitionTop")
const bottomTransition=document.getElementById("transitionBottom")
const flowerLoad = document.getElementById("flowerLoad")
transitionBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    transition()
})
function transition() {
    topTransition.classList.add("topTransition")
    bottomTransition.classList.add("bottomTransition")
    flowerLoad.classList.add("show")
    setTimeout(loadPage, 4000)
   
}
function loadPage(){
    location.replace("http://127.0.0.1:3000/newVersion/mainScreen.html")
}