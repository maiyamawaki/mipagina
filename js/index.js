let min = 1;
let max = 6

const leftBtn = document.querySelector(".left")
const rigthBtn =  document.querySelector(".right")

let img = document.querySelector(".main")

leftBtn.addEventListener("click", ()=>{
	let num = Math.floor(Math.random()*(max - min) + min)
	img.style.backgroundImage = `url(/img/img${num}.jpg)`
})

rigthBtn.addEventListener("click", ()=>{
	let num = Math.floor(Math.random()*(max - min) + min)
	img.style.backgroundImage = `url(/img/img${num}.jpg)`
})

function changeBgi(){
	let num = Math.floor(Math.random()*(max - min) + min)
	img.style.backgroundImage = `url(/img/img${num}.jpg)`
}

setInterval(changeBgi,2500)

