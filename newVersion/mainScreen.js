

const topTransition = document.getElementById("transitionTop")
const bottomTransition=document.getElementById("transitionBottom")
const flowerLoad = document.getElementById("flowerLoad")
window.onload(transition())

function transition() {
    flowerLoad.classList.add("show")
    
    topTransition.classList.add("topTransition")
    bottomTransition.classList.add("bottomTransition")
    

    
    
}
flowerLoad.style.zIndex=-1
