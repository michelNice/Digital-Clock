const hours = document.querySelector('.hour')
const minites = document.querySelector('.minute')
const seconds = document.querySelector('.second')
const date = document.querySelector('.date')

const clock = function(){
    const now = new Date()
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()


    const week = {
        year:'numeric',
        month:'long',
        weekday:'long'
    }

    let result = now.toLocaleDateString('en-us',week)


    date.textContent = result
   


    seconds.innerText = ("0" + s).substr(-2)

    minites.innerText = ('0' + m).substr(-2)

    hours.innerText = ('0' + h).substr(-2)
  
}

setInterval(clock, 1000)