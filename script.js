let seconde_depart = 10;

function decreaseTimer() {
  console.log(seconde_depart)
  if(seconde_depart > 0){
    seconde_depart--
  } else {
    console.log("fini")
    stopTimer()
  }  
}

function stopTimer(){
  clearInterval(countdown)
  console.log("Timer stopper")
}

let countdown = setInterval(decreaseTimer, 1000)

document.getElementById("stopTimer").addEventListener("click", stopTimer)
