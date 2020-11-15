const modal = document.querySelector(".modalForm")
const body = document.querySelector("body")
const mapBox = document.querySelector(".mapBox")

document.querySelectorAll(".modalActive").forEach(ele=>{
	ele.addEventListener("click", ()=>{
		if(modal.classList.contains("hidden")){
			modal.classList.add("active")
			body.classList.add("bg-black")
			mapBox.classList.add("hidden")
		}else{
			modal.classList.add("hidden")
			body.classList.remove("bg-black")
		}
	})
})


	