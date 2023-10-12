

const topTransition = document.getElementById("transitionTop")
const bottomTransition=document.getElementById("transitionBottom")
const flowerLoad = document.getElementById("flowerLoad")
const time = document.getElementById("time")

const batteryLevelImgs = {8: "images/battery/80-100.svg",
5:"images/battery/50-80.svg",
0:"images/battery/0-40.svg"
}
const batteryPic = document.getElementById("batteryImg")
const batteryPercentage = document.getElementById("batteryPercentage")
transition()

function transition() {
    flowerLoad.classList.add("show")
    
    topTransition.classList.add("topTransition")
    bottomTransition.classList.add("bottomTransition")
    
    setTimeout(()=>{flowerLoad.style.zIndex=-1}, 3000)
    
    
}

setInterval(setTime, 30000)
function setTime(){
    const d = new Date();
let text = d.toLocaleTimeString('en-us',{hour: "2-digit", minute: "2-digit"});

time.innerText =text

}


setTime()

function updateBattery(battery){
    
    battery.charging? batteryPercentage.innerText = `${Math.trunc(battery.level * 100)}%`: battery.level<1?batteryPercentage.innerText = `${Math.trunc(battery.level * 100)}%`: batteryPercentage.innerText = ``;
    if(battery.charging){
        batteryPic.src = "images/battery/charging.png"
    }
    else{
        
        battery.level >= .8? batteryPic.src = batteryLevelImgs[8]: 
        (battery.level >= .5)?batteryPic.src = batteryLevelImgs[5]:
        battery.level <= .49?batteryPic.src = batteryLevelImgs[0]:
        batteryPic.src = batteryLevelImgs[8]
                
        
    }
}
navigator.getBattery().then(function(battery) {
    updateBattery(battery)
    battery.onlevelchange = function() {
        updateBattery(battery)
        
    };
    battery.onchargingchange = function () {
        updateBattery(battery)
      };
  });
  function closeOpenApps(cards){
    
    for (let card of cards){
        if (card.classList.contains("open")){
            card.querySelector(".exit").click()
            setTimeout(()=>{
                card.classList.remove("closed")}, 1500)
    }
  }
}
  function open(button){
    closeOpenApps(cards);
    div = document.getElementById(button.dataset.target)
            div.querySelector(".exit").addEventListener("click", ()=>{
                div.classList.add("closed")
                div.classList.remove("open")
                setTimeout(()=>{
                div.classList.remove("closed")}, 1500)
            })
            
            div.classList.remove("closed")
            div.classList.add("open")
            
    

  }
  const cards = document.getElementById("cards").children
  const phoneBodyApps = document.getElementById("phoneBody").children
  for(let button of phoneBodyApps){
    button.addEventListener("click", (e)=> {open(e.target)})
  }
 