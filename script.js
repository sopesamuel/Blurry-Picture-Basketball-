const loadText = document.querySelector('.Loading')
const backGr = document.querySelector('.bg')

let load = 0
let interval = setInterval(count, 60)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ( (num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
function count(){
    load++
    if (load > 99) {
clearInterval(interval)
    }
    loadText.textContent = `${load}%`
    loadText.style.opacity = scale(load, 0 , 100 , 1 , 0 )
    backGr.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}