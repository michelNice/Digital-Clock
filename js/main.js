const hours = document.querySelector('.hour')
const minites = document.querySelector('.minute')
const seconds = document.querySelector('.second')


const clock = function(){
    const now = new Date()
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
   


    seconds.innerText = ("0" + s).substr(-2)

    minites.innerText = ('0' + m).substr(-2)

    hours.innerText = ('0' + h).substr(-2)
  
}

setInterval(clock, 1000)